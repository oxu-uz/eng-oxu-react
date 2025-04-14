import React, { useState, useEffect } from "react";
import { Layout, Modal, message, Tabs, Skeleton, Descriptions, Card, Grid } from "antd";
import {
  getAllStudents,
  getAllDeletedStudents,
  deleteStudent,
  restoreStudent,
  getStudentInfos,
} from "../../services/AdminStudentsService";
import Button from "../../components/Button";

const { Content } = Layout;
const { TabPane } = Tabs;
const { useBreakpoint } = Grid;

const formatDate = (dateStr) => {
  if (!dateStr) return "N/A";
  const date = new Date(dateStr);
  return date.toLocaleString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
};

const AdminDashboard = () => {
  const [activeStudents, setActiveStudents] = useState([]);
  const [deletedStudents, setDeletedStudents] = useState([]);
  const [loadingActive, setLoadingActive] = useState(false);
  const [loadingDeleted, setLoadingDeleted] = useState(false);
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [studentInfos, setStudentInfos] = useState(null);
  const screens = useBreakpoint();

  const fetchActiveStudents = async () => {
    setLoadingActive(true);
    try {
      const data = await getAllStudents();
      setActiveStudents(data);
    } catch (error) {
      message.error("Failed to fetch active students");
    } finally {
      setLoadingActive(false);
    }
  };

  const fetchDeletedStudents = async () => {
    setLoadingDeleted(true);
    try {
      const data = await getAllDeletedStudents();
      setDeletedStudents(data);
    } catch (error) {
      message.error("Failed to fetch deleted students");
    } finally {
      setLoadingDeleted(false);
    }
  };

  useEffect(() => {
    fetchActiveStudents();
    fetchDeletedStudents();
  }, []);

  const handleDelete = (id) => {
    Modal.confirm({
      title: "Are you sure you want to delete this student?",
      onOk: async () => {
        try {
          await deleteStudent(id);
          message.success("Student deleted successfully");
          fetchActiveStudents();
          fetchDeletedStudents();
        } catch (error) {
          message.error("Failed to delete student");
        }
      },
    });
  };

  const handleRestore = async (id) => {
    try {
      await restoreStudent(id);
      message.success("Student restored successfully");
      fetchActiveStudents();
      fetchDeletedStudents();
    } catch (error) {
      message.error("Failed to restore student");
    }
  };

  const handleInfo = async (record) => {
    setSelectedStudent(record);
    try {
      const infos = await getStudentInfos(record.id);
      setStudentInfos(infos);
      Modal.info({
        title: `Details for ${record.full_name}`,
        width: screens.md ? "60%" : "90%",
        style: { top: 20 },
        bodyStyle: { maxHeight: "80vh", overflowY: "auto" },
        content: (
            <div className="student-details-modal">
              <Descriptions
                  title="Basic Information"
                  bordered
                  column={1}
                  size="small"
                  style={{ marginBottom: 16 }}
              >
                <Descriptions.Item label="ID">{record.id}</Descriptions.Item>
                <Descriptions.Item label="Full Name">
                  {record.full_name}
                </Descriptions.Item>
                <Descriptions.Item label="Phone">{record.phone}</Descriptions.Item>
                <Descriptions.Item label="Created At">
                  {formatDate(record.created_at)}
                </Descriptions.Item>
              </Descriptions>

              {infos ? (
                  <>
                    {infos.profile && infos.profile.length > 0 && (
                        <Descriptions
                            title="Profile Details"
                            bordered
                            column={1}
                            size="small"
                            style={{ marginBottom: 16 }}
                        >
                          <Descriptions.Item label="Gender">
                            {infos.profile[0].gender}
                          </Descriptions.Item>
                          <Descriptions.Item label="Birth Date">
                            {formatDate(infos.profile[0].birth_at)}
                          </Descriptions.Item>
                          <Descriptions.Item label="National ID">
                            {infos.profile[0].nationaly_id || "N/A"}
                          </Descriptions.Item>
                          <Descriptions.Item label="Country ID">
                            {infos.profile[0].country_id || "N/A"}
                          </Descriptions.Item>
                          <Descriptions.Item label="Address">
                            {infos.profile[0].address || "N/A"}
                          </Descriptions.Item>
                        </Descriptions>
                    )}

                    {infos.family && infos.family.length > 0 && (
                        <Descriptions
                            title="Family"
                            bordered
                            column={1}
                            size="small"
                            style={{ marginBottom: 16 }}
                        >
                          <Descriptions.Item label="Father Name">
                            {infos.family[0].father_name}
                          </Descriptions.Item>
                          <Descriptions.Item label="Father Phone">
                            {infos.family[0].father_phone}
                          </Descriptions.Item>
                          <Descriptions.Item label="Mother Name">
                            {infos.family[0].mather_name}
                          </Descriptions.Item>
                          <Descriptions.Item label="Mother Phone">
                            {infos.family[0].mather_phone}
                          </Descriptions.Item>
                        </Descriptions>
                    )}

                    {infos.infos && infos.infos.length > 0 && (
                        <Descriptions
                            title="Additional Info"
                            bordered
                            column={1}
                            size="small"
                        >
                          <Descriptions.Item label="Hobbies">
                            {infos.infos[0].hobbies}
                          </Descriptions.Item>
                          <Descriptions.Item label="Events">
                            {infos.infos[0].events}
                          </Descriptions.Item>
                        </Descriptions>
                    )}
                  </>
              ) : (
                  <p>No detailed information available.</p>
              )}
            </div>
        ),
        onOk: () => {
          setStudentInfos(null);
          setSelectedStudent(null);
        },
      });
    } catch (error) {
      message.error("Failed to load student details");
    }
  };

  const renderMobileCard = (student, isActive = true) => (
      <Card
          key={student.id}
          className="mb-4"
          bodyStyle={{ padding: screens.xs ? 12 : 16 }}
      >
        <div className="grid grid-cols-2 gap-2 mb-3">
          <div className="break-words">
            <p className="text-xs text-gray-500 dark:text-gray-400">ID</p>
            <p className="text-sm font-medium">{student.id}</p>
          </div>
          <div className="break-words">
            <p className="text-xs text-gray-500 dark:text-gray-400">Name</p>
            <p className="text-sm font-medium">{student.full_name}</p>
          </div>
          <div className="break-words col-span-2"> {/* Changed to col-span-2 for phone */}
            <p className="text-xs text-gray-500 dark:text-gray-400">Phone</p>
            <p className="text-sm font-medium break-all">{student.phone}</p>
          </div>
          <div className="break-words">
            <p className="text-xs text-gray-500 dark:text-gray-400">
              {isActive ? "Created" : "Deleted"}
            </p>
            <p className="text-sm font-medium">
              {formatDate(isActive ? student.created_at : student.deleted_at)}
            </p>
          </div>
        </div>
        <div className="flex space-x-2">
          <Button
              size={screens.xs ? "xs" : "sm"}
              variant="primary"
              type="button"
              onClick={() => handleInfo(student)}
              block={screens.xs}
          >
            Info
          </Button>
          {isActive ? (
              <Button
                  size={screens.xs ? "xs" : "sm"}
                  variant="red"
                  type="button"
                  onClick={() => handleDelete(student.id)}
                  block={screens.xs}
              >
                Delete
              </Button>
          ) : (
              <Button
                  size={screens.xs ? "xs" : "sm"}
                  variant="green"
                  type="button"
                  onClick={() => handleRestore(student.id)}
                  block={screens.xs}
              >
                Restore
              </Button>
          )}
        </div>
      </Card>
  );

  const renderTable = (students, isActive = true) => (
      <div className="hidden md:block">
        <table className="min-w-full bg-white dark:bg-gray-900 shadow overflow-hidden">
          <thead className="bg-gray-50 dark:bg-gray-800">
          <tr>
            <th className="px-4 py-3 text-left text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
              ID
            </th>
            <th className="px-4 py-3 text-left text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
              Full Name
            </th>
            <th className="px-4 py-3 text-left text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
              Phone
            </th>
            <th className="px-4 py-3 text-left text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
              {isActive ? "Created At" : "Deleted At"}
            </th>
            <th className="px-4 py-3 text-left text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
              Actions
            </th>
          </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
          {students.map((student) => (
              <tr key={student.id} className="hover:bg-gray-50 dark:hover:bg-gray-800">
                <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-700 dark:text-gray-200">
                  {student.id}
                </td>
                <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-700 dark:text-gray-200">
                  {student.full_name}
                </td>
                <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-700 dark:text-gray-200">
                  {student.phone}
                </td>
                <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-700 dark:text-gray-200">
                  {formatDate(isActive ? student.created_at : student.deleted_at)}
                </td>
                <td className="px-4 py-4 whitespace-nowrap text-sm">
                  <div className="flex gap-2">
                    <Button
                        size="sm"
                        variant="primary"
                        type="button"
                        onClick={() => handleInfo(student)}
                    >
                      Info
                    </Button>
                    {isActive ? (
                        <Button
                            size="sm"
                            variant="red"
                            type="button"
                            onClick={() => handleDelete(student.id)}
                        >
                          Delete
                        </Button>
                    ) : (
                        <Button
                            size="sm"
                            variant="green"
                            type="button"
                            onClick={() => handleRestore(student.id)}
                        >
                          Restore
                        </Button>
                    )}
                  </div>
                </td>
              </tr>
          ))}
          </tbody>
        </table>
      </div>
  );

  const renderMobileList = (students, isActive = true) => (
      <div className="md:hidden space-y-3">
        {students.length > 0 ? (
                students.map((student) => renderMobileCard(student, isActive)))
                : (
            <Card>
              <p className="text-center text-gray-500">No students found</p>
            </Card>
          )
        }
      </div>
  );

  return (
      <Layout style={{ minHeight: "100vh" }}>
        <Content style={{ margin: screens.xs ? "8px" : "16px", padding: 0 }}>
          <Tabs
              type={screens.md ? "card" : "line"}
              defaultActiveKey="1"
              className="bg-white dark:bg-gray-900 p-2 md:p-4 rounded-lg shadow"
              tabBarStyle={{ margin: 0 }}
          >
            <TabPane tab="All Students" key="1">
              {loadingActive ? (
                  <Skeleton active paragraph={{ rows: 6 }} />
              ) : (
                  <>
                    {renderTable(activeStudents, true)}
                    {renderMobileList(activeStudents, true)}
                  </>
              )}
            </TabPane>
            <TabPane tab="Deleted Students" key="2">
              {loadingDeleted ? (
                  <Skeleton active paragraph={{ rows: 6 }} />
              ) : (
                  <>
                    {renderTable(deletedStudents, false)}
                    {renderMobileList(deletedStudents, false)}
                  </>
              )}
            </TabPane>
          </Tabs>
        </Content>
      </Layout>
  );
};

export default AdminDashboard;
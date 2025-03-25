import React, { useState, useEffect } from "react";
import { Layout, Modal, message, Tabs, Skeleton, Descriptions } from "antd";
import {
  getAllStudents,
  getAllDeletedStudents,
  deleteStudent,
  restoreStudent,
  getStudentInfos,
} from "../../services/AdminStudentsService";
import Button from "../../components/Button"; // Your custom Button component

const { Content } = Layout;
const { TabPane } = Tabs;

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

  // Fetch active students
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

  // Fetch deleted students
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

  // Delete an active student with confirmation
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

  // Restore a deleted student
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

  // Open student info modal when "Info" button is clicked
  const handleInfo = async (record) => {
    setSelectedStudent(record);
    try {
      const infos = await getStudentInfos(record.id);
      setStudentInfos(infos);
      // Используем локальную переменную infos для отображения
      Modal.info({
        title: `Details for ${record.full_name}`,
        width: 600,
        content: (
          <div>
            {/* Основная информация */}
            <Descriptions
              title="Основная информация"
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

            {/* Проверка на наличие подробных данных */}
            {infos ? (
              <>
                {/* Profile Section */}
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

                {/* Family Section */}
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

                {/* Additional Infos */}
                {infos.infos && infos.infos.length > 0 && (
                  <Descriptions
                    title="Additional Infos"
                    bordered
                    column={1}
                    size="small"
                    style={{ marginBottom: 16 }}
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
          // Сброс состояния при закрытии модала
          setStudentInfos(null);
          setSelectedStudent(null);
        },
        afterClose: () => {
          // Дополнительный сброс
          setStudentInfos(null);
          setSelectedStudent(null);
        },
      });
    } catch (error) {
      message.error("Failed to load student details");
    }
  };

  // Отрисовка таблицы: для активных и удалённых студентов с разными колонками
  const renderTable = (students, isActive = true) => {
    return (
      <table className="min-w-full bg-white dark:bg-gray-900 shadow   overflow-hidden">
      <thead className="bg-gray-50 dark:bg-gray-800">
        <tr>
          <th className="px-4 py-3 border-b border-gray-300 dark:border-gray-700 text-left text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
            ID
          </th>
          <th className="px-4 py-3 border-b border-gray-300 dark:border-gray-700 text-left text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
            Full Name
          </th>
          <th className="px-4 py-3 border-b border-gray-300 dark:border-gray-700 text-left text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
            Phone
          </th>
          {isActive ? (
            <th className="px-4 py-3 border-b border-gray-300 dark:border-gray-700 text-left text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
              Created At
            </th>
          ) : (
            <th className="px-4 py-3 border-b border-gray-300 dark:border-gray-700 text-left text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
              Deleted At
            </th>
          )}
          <th className="px-4 py-3 border-b border-gray-300 dark:border-gray-700 text-left text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
            Actions
          </th>
        </tr>
      </thead>
      <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
        {students.map((student) => (
          <tr
            key={student.id}
            className="transition-colors duration-200 hover:bg-gray-50 dark:hover:bg-gray-800 group"
          >
            <td className="px-4 py-1.5 border-t border-gray-200 dark:border-gray-700">
              <span className="text-sm text-gray-700 dark:text-gray-200">
                {student.id}
              </span>
            </td>
            <td className="px-4 py-1.5 border-t border-gray-200 dark:border-gray-700">
              <span className="text-sm text-gray-700 dark:text-gray-200">
                {student.full_name}
              </span>
            </td>
            <td className="px-4 py-1.5 border-t border-gray-200 dark:border-gray-700">
              <span className="text-sm text-gray-700 dark:text-gray-200">
                {student.phone}
              </span>
            </td>
            {isActive ? (
              <td className="px-4 py-1.5 border-t border-gray-200 dark:border-gray-700">
                <span className="text-sm text-gray-700 dark:text-gray-200">
                  {formatDate(student.created_at)}
                </span>
              </td>
            ) : (
              <td className="px-4 py-1.5 border-t border-gray-200 dark:border-gray-700">
                <span className="text-sm text-gray-700 dark:text-gray-200">
                  {formatDate(student.deleted_at)}
                </span>
              </td>
            )}
            <td className="px-4 py-1.5 border-t border-gray-200 dark:border-gray-700">
              <div className="flex gap-2">
                <Button
                  size="rg"
                  variant="primary"
                  type="button"
                  onClick={() => handleInfo(student)}
                >
                  Info
                </Button>
                {isActive ? (
                  <Button
                    size="rg"
                    variant="red"
                    type="button"
                    onClick={() => handleDelete(student.id)}
                  >
                    Delete
                  </Button>
                ) : (
                  <Button
                    size="rg"
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
    
    );
  };

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Content style={{ margin: "16px", background: "#fff", padding: 24 }}>
        <Tabs type="card" defaultActiveKey="1">
          <TabPane tab="All Students" key="1">
           <div className="p-1">
           {loadingActive ? (
              <Skeleton active paragraph={{ rows: 6 }} />
            ) : (
              renderTable(activeStudents, true)
            )}
           </div>
          </TabPane>
          <TabPane tab="Deleted Students" key="2">
            {loadingDeleted ? (
              <Skeleton active paragraph={{ rows: 6 }} />
            ) : (
              // Для удалённых студентов отобразятся только нужные поля
              renderTable(deletedStudents, false)
            )}
          </TabPane>
        </Tabs>
      </Content>
    </Layout>
  );
};

export default AdminDashboard;

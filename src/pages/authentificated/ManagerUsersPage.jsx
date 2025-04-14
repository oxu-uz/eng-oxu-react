import React, { useState, useEffect } from 'react';
import { getAllUsers, getUserAddedStudents } from '../../services/manager/ManagerUsersService';
import Button from '../../components/Button';
import { Modal, Card, List, Typography, Divider, Skeleton } from 'antd';

const { Text, Title } = Typography;

const ManagerUsersPage = () => {
  const [users, setUsers] = useState([]);
  const [selectedUserStudents, setSelectedUserStudents] = useState([]);
  const [loading, setLoading] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [modalLoading, setModalLoading] = useState(false);

  const fetchUsers = async () => {
    try {
      setLoading(true);
      const data = await getAllUsers();
      setUsers(data);
    } catch (error) {
      console.error("Error fetching users:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const viewUserAddedStudents = async (userId) => {
    try {
      setModalLoading(true);
      const data = await getUserAddedStudents(userId);
      setSelectedUserStudents(data);
      setModalVisible(true);
    } catch (error) {
      console.error("Error fetching user added students:", error);
    } finally {
      setModalLoading(false);
    }
  };

  // Mobile user card renderer
  const renderMobileUserItem = (user) => (
      <Card className="mb-4 shadow-sm">
        <div className="space-y-3">
          <div className="flex justify-between">
            <Text strong>ID:</Text>
            <Text>{user.id}</Text>
          </div>
          <Divider className="my-2" />

          <div className="flex justify-between">
            <Text strong>Name:</Text>
            <Text>{user.name}</Text>
          </div>
          <Divider className="my-2" />

          <div className="flex justify-between">
            <Text strong>Email:</Text>
            <Text className="break-all">{user.email}</Text>
          </div>

          <Button
              size="sm"
              variant="primary"
              onClick={() => viewUserAddedStudents(user.id)}
              block
          >
            View Added Students
          </Button>
        </div>
      </Card>
  );

  // Mobile student card renderer for modal
  const renderMobileStudentItem = (student) => (
      <Card size="small" className="mb-2">
        <div className="space-y-2">
          <div className="flex justify-between">
            <Text strong>ID:</Text>
            <Text>{student.id}</Text>
          </div>
          <Divider className="my-1" />

          <div className="flex justify-between">
            <Text strong>Name:</Text>
            <Text>{student.full_name}</Text>
          </div>
          <Divider className="my-1" />

          <div className="flex justify-between">
            <Text strong>Phone:</Text>
            <Text>{student.phone}</Text>
          </div>
        </div>
      </Card>
  );

  return (
      <div className="container mx-auto p-2 md:p-4">
        <Title level={3} className="mb-4">Manager Users</Title>

        {loading ? (
            <Skeleton active paragraph={{ rows: 6 }} />
        ) : (
            <>
              {/* Desktop Table (hidden on mobile) */}
              <div className="hidden md:block">
                <table className="min-w-full bg-white shadow rounded-lg overflow-hidden">
                  <thead className="bg-gray-100">
                  <tr>
                    <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">ID</th>
                    <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">Name</th>
                    <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">Email</th>
                    <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">Actions</th>
                  </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                  {users.map((user) => (
                      <tr key={user.id} className="hover:bg-gray-50">
                        <td className="px-4 py-2 text-sm text-gray-700">{user.id}</td>
                        <td className="px-4 py-2 text-sm text-gray-700">{user.name}</td>
                        <td className="px-4 py-2 text-sm text-gray-700">{user.email}</td>
                        <td className="px-4 py-2 text-sm text-gray-700">
                          <Button
                              size="sm"
                              variant="primary"
                              onClick={() => viewUserAddedStudents(user.id)}
                          >
                            View Added Students
                          </Button>
                        </td>
                      </tr>
                  ))}
                  </tbody>
                </table>
              </div>

              {/* Mobile List (visible only on mobile) */}
              <div className="md:hidden">
                <List
                    dataSource={users}
                    renderItem={renderMobileUserItem}
                    locale={{ emptyText: 'No users found' }}
                />
              </div>
            </>
        )}

        <Modal
            title="User Added Students"
            visible={modalVisible}
            onCancel={() => setModalVisible(false)}
            footer={[
              <Button size="rg" key="close" onClick={() => setModalVisible(false)}>
                Close
              </Button>
            ]}
            width="90%"
            style={{ maxWidth: '800px' }}
        >
          {modalLoading ? (
              <Skeleton active paragraph={{ rows: 4 }} />
          ) : selectedUserStudents.length > 0 ? (
              <>
                {/* Desktop table in modal */}
                <div className="hidden md:block">
                  <table className="min-w-full">
                    <thead className="bg-gray-100">
                    <tr>
                      <th className="px-4 py-2 text-left">ID</th>
                      <th className="px-4 py-2 text-left">Full Name</th>
                      <th className="px-4 py-2 text-left">Phone</th>
                    </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                    {selectedUserStudents.map((student) => (
                        <tr key={student.id} className="hover:bg-gray-50">
                          <td className="px-4 py-2">{student.id}</td>
                          <td className="px-4 py-2">{student.full_name}</td>
                          <td className="px-4 py-2">{student.phone}</td>
                        </tr>
                    ))}
                    </tbody>
                  </table>
                </div>

                {/* Mobile list in modal */}
                <div className="md:hidden">
                  <List
                      dataSource={selectedUserStudents}
                      renderItem={renderMobileStudentItem}
                      locale={{ emptyText: 'No students found' }}
                  />
                </div>
              </>
          ) : (
              <Text>No added students found for this user.</Text>
          )}
        </Modal>
      </div>
  );
};

export default ManagerUsersPage;
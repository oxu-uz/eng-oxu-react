import React, { useState, useEffect } from 'react';
import { getAllUsers, getUserAddedStudents } from '../../services/manager/ManagerUsersService';
import Button from '../../components/Button';
import { Modal } from 'antd';

const ManagerUsersPage = () => {
  const [users, setUsers] = useState([]);
  const [selectedUserStudents, setSelectedUserStudents] = useState([]);
  const [loading, setLoading] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

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
      const data = await getUserAddedStudents(userId);
      setSelectedUserStudents(data);
      setModalVisible(true);
    } catch (error) {
      console.error("Error fetching user added students:", error);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Manager Users</h1>

      {loading ? (
        <p>Loading users...</p>
      ) : (
        <table className="min-w-full bg-white dark:bg-gray-900 shadow  overflow-hidden">
          <thead className="bg-gray-100 dark:bg-gray-800">
            <tr>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-600 dark:text-gray-400">ID</th>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-600 dark:text-gray-400">Name</th>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-600 dark:text-gray-400">Email</th>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-600 dark:text-gray-400">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
            {users.map((user) => (
              <tr key={user.id} className="hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                <td className="px-4 py-2 text-sm text-gray-700 dark:text-gray-200">{user.id}</td>
                <td className="px-4 py-2 text-sm text-gray-700 dark:text-gray-200">{user.name}</td>
                <td className="px-4 py-2 text-sm text-gray-700 dark:text-gray-200">{user.email}</td>
                <td className="px-4 py-2 text-sm text-gray-700 dark:text-gray-200">
                  <Button size="rg" variant="primary" onClick={() => viewUserAddedStudents(user.id)}>
                    View Added Students
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
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
      >
        {selectedUserStudents.length > 0 ? (
          <table className="min-w-full">
            <thead>
              <tr>
                <th className="px-4 py-2 text-left">ID</th>
                <th className="px-4 py-2 text-left">Full Name</th>
                <th className="px-4 py-2 text-left">Phone</th>
              </tr>
            </thead>
            <tbody>
              {selectedUserStudents.map((student) => (
                <tr key={student.id}>
                  <td className="px-4 py-2">{student.id}</td>
                  <td className="px-4 py-2">{student.full_name}</td>
                  <td className="px-4 py-2">{student.phone}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>No added students found for this user.</p>
        )}
      </Modal>
    </div>
  );
};

export default ManagerUsersPage;

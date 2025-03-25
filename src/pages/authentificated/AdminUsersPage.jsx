import React, { useState, useEffect } from 'react';
import { getAllUsers, updateUserRole, getAllRoles, createAgent } from '../../services/AdminUsersService';
import Button from '../../components/Button';
import Input from '../../components/Input';
import Select from '../../components/Select';

const AdminUsersPage = () => {
  const [users, setUsers] = useState([]);
  const [roles, setRoles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // State for create agent form
  const [agentData, setAgentData] = useState({
    name: '',
    email: '',
    login: '',
    password: '',
    roles: [],
  });
  const [creating, setCreating] = useState(false);
  const [updateLoading, setUpdateLoading] = useState(false);

  const fetchUsers = async () => {
    try {
      setLoading(true);
      const data = await getAllUsers();
      setUsers(data);
    } catch (err) {
      setError('Error loading users');
    } finally {
      setLoading(false);
    }
  };

  const fetchRoles = async () => {
    try {
      const data = await getAllRoles();
      setRoles(data || []);
    } catch (err) {
      console.error('Error loading roles:', err);
    }
  };

  useEffect(() => {
    fetchUsers();
    fetchRoles();
  }, []);

  const handleRoleChange = async (userId, newRole) => {
    try {
      setUpdateLoading(true);
      await updateUserRole(userId, { role: [newRole] });
      fetchUsers();
    } catch (err) {
      console.error('Error updating role:', err);
    } finally {
      setUpdateLoading(false);
    }
  };

  const handleAgentInputChange = (e) => {
    const { name, value } = e.target;
    setAgentData((prev) => ({ ...prev, [name]: value }));
  };

  const handleAgentRoleChange = (e) => {
    const selectedRole = e.target.value;
    setAgentData((prev) => ({ ...prev, roles: [selectedRole] }));
  };

  const handleCreateAgent = async (e) => {
    e.preventDefault();
    try {
      setCreating(true);
      await createAgent(agentData);
      // Clear the form
      setAgentData({
        name: '',
        email: '',
        login: '',
        password: '',
        roles: [],
      });
      fetchUsers();
    } catch (err) {
      console.error('Error creating agent:', err);
    } finally {
      setCreating(false);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Users Management</h1>

      {error && <p className="text-red-500">{error}</p>}

      <div className="mb-8 p-6 bg-gray-50 dark:bg-gray-800 shadow rounded-lg">
        <h2 className="text-xl font-semibold mb-4">Create New Agent</h2>
        <form onSubmit={handleCreateAgent} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Name</label>
            <Input
              type="text"
              name="name"
              value={agentData.name}
              onChange={handleAgentInputChange}
              placeholder="Enter agent name"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Email</label>
            <Input
              type="email"
              name="email"
              value={agentData.email}
              onChange={handleAgentInputChange}
              placeholder="Enter agent email"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Login</label>
            <Input
              type="text"
              name="login"
              value={agentData.login}
              onChange={handleAgentInputChange}
              placeholder="Enter agent login"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Password</label>
            <Input
              type="password"
              name="password"
              value={agentData.password}
              onChange={handleAgentInputChange}
              placeholder="Enter password"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Role</label>
            <Select value={agentData.roles[0] || ''} onChange={handleAgentRoleChange}>
              <Select.Option value="">Select a role</Select.Option>
              {(roles || []).map((role) => (
                <Select.Option key={role} value={role}>
                  {role}
                </Select.Option>
              ))}
            </Select>
          </div>
          <Button type="submit" variant="primary" size="rg">
            {creating ? 'Creating...' : 'Create Agent'}
          </Button>
        </form>
      </div>

      {/* Users Table */}
      {loading ? (
        <p>Loading users...</p>
      ) : (
        <table className="min-w-full bg-white dark:bg-gray-900 shadow overflow-hidden">
          <thead className="bg-gray-50 dark:bg-gray-800">
            <tr>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-600 dark:text-gray-400">ID</th>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-600 dark:text-gray-400">Name</th>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-600 dark:text-gray-400">Email</th>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-600 dark:text-gray-400">Role</th>
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
                  {user.role[0] === 'admin' ? (
                    <span>{user.role[0]}</span>
                  ) : (
                    <Select
                      value={user.role[0]}
                      onChange={(e) => handleRoleChange(user.id, e.target.value)}
                    >
                      {(roles || []).map((role) => (
                        <Select.Option key={role} value={role}>
                          {role}
                        </Select.Option>
                      ))}
                    </Select>
                  )}
                </td>
                <td className="px-4 py-2 text-sm text-gray-700 dark:text-gray-200">
                  {updateLoading && <span>Updating...</span>}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default AdminUsersPage;

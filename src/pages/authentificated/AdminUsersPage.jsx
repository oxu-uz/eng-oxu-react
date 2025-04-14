import React, { useState, useEffect } from 'react';
import { getAllUsers, updateUserRole, getAllRoles, createAgent } from '../../services/AdminUsersService';
import Button from '../../components/Button';
import Input from '../../components/Input';
import Select from '../../components/Select';
import { Card, Table, Tag, Typography, Divider, List, message } from 'antd';

const { Text, Title } = Typography;

const AdminUsersPage = () => {
  const [users, setUsers] = useState([]);
  const [roles, setRoles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [updateLoadingId, setUpdateLoadingId] = useState(null);

  // State for create agent form
  const [agentData, setAgentData] = useState({
    name: '',
    email: '',
    login: '',
    password: '',
    roles: [],
  });
  const [creating, setCreating] = useState(false);

  // Load users
  const fetchUsers = async () => {
    try {
      setLoading(true);
      const data = await getAllUsers();
      setUsers(data);
    } catch (err) {
      setError('Error loading users');
      message.error('Error loading users');
    } finally {
      setLoading(false);
    }
  };

  // Load roles
  const fetchRoles = async () => {
    try {
      const data = await getAllRoles();
      setRoles(data || []);
    } catch (err) {
      console.error('Error loading roles:', err);
      message.error('Error loading roles');
    }
  };

  useEffect(() => {
    fetchUsers();
    fetchRoles();
  }, []);

  // Change role
  const handleRoleChange = async (userId, newRole) => {
    try {
      setUpdateLoadingId(userId);
      await updateUserRole(userId, { role: [newRole] });
      message.success('Role changed successfully');
      fetchUsers();
    } catch (err) {
      console.error('Error changing role:', err);
      message.error('Error changing role');
    } finally {
      setUpdateLoadingId(null);
    }
  };

  // Agent input change
  const handleAgentInputChange = (e) => {
    const { name, value } = e.target;
    setAgentData((prev) => ({ ...prev, [name]: value }));
  };

  // Agent role change
  const handleAgentRoleChange = (e) => {
    const selectedRole = e.target.value;
    setAgentData((prev) => ({ ...prev, roles: [selectedRole] }));
  };

  // Create new agent
  const handleCreateAgent = async (e) => {
    e.preventDefault();
    try {
      setCreating(true);
      await createAgent(agentData);
      message.success('User created successfully');
      // Clear form
      setAgentData({
        name: '',
        email: '',
        login: '',
        password: '',
        roles: [],
      });
      fetchUsers();
    } catch (err) {
      console.error('Error creating User:', err);
      message.error('Error creating User');
    } finally {
      setCreating(false);
    }
  };

  // Mobile user card
  const renderMobileItem = (user) => (
      <Card
          className="mb-3 shadow-sm hover:shadow-md transition-shadow"
          bodyStyle={{ padding: '12px' }}
      >
        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <Text strong className="text-gray-600">ID:</Text>
            <Text className="font-mono">{user.id}</Text>
          </div>
          <Divider className="my-2" />

          <div className="flex justify-between items-center">
            <Text strong className="text-gray-600">Name:</Text>
            <Text>{user.name}</Text>
          </div>
          <Divider className="my-2" />

          <div className="flex justify-between items-center">
            <Text strong className="text-gray-600">Email:</Text>
            <Text className="break-all">{user.email}</Text>
          </div>
          <Divider className="my-2" />

          <div className="flex justify-between items-center">
            <Text strong className="text-gray-600">Role:</Text>
            {user.role[0] === 'admin' ? (
                <span className="m-0">Admin</span>
            ) : (
                <Select
                    value={user.role[0]}
                    onChange={(e) => handleRoleChange(user.id, e.target.value)}
                    style={{ width: '100px' }}
                    loading={updateLoadingId === user.id}
                    disabled={updateLoadingId === user.id}
                >
                  {(roles || []).map((role) => (
                      <Select.Option key={role} value={role}>
                        {role}
                      </Select.Option>
                  ))}
                </Select>
            )}
          </div>
        </div>
      </Card>
  );

  return (
      <div className="container mx-auto p-2 md:p-4">
        <Title level={3} className="mb-4">User Management</Title>

        {error && <Text type="danger">{error}</Text>}

        {/* Create new User form */}
        <Card
            title="Create New User"
            className="mb-6"
            headStyle={{ fontSize: '1rem', fontWeight: '600', padding: '12px' }}
            bodyStyle={{ padding: '12px' }}
        >
          <form onSubmit={handleCreateAgent} className="space-y-3">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-600 mb-1">Name</label>
                <Input
                    type="text"
                    name="name"
                    value={agentData.name}
                    onChange={handleAgentInputChange}
                    placeholder="User name"
                    required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-600 mb-1">Email</label>
                <Input
                    type="email"
                    name="email"
                    value={agentData.email}
                    onChange={handleAgentInputChange}
                    placeholder="User email"
                    required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-600 mb-1">Login</label>
                <Input
                    type="text"
                    name="login"
                    value={agentData.login}
                    onChange={handleAgentInputChange}
                    placeholder="Login"
                    required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-600 mb-1">Password</label>
                <Input
                    type="password"
                    name="password"
                    value={agentData.password}
                    onChange={handleAgentInputChange}
                    placeholder="Password"
                    required
                />
              </div>
            </div>
            <div className="w-full md:w-1/2 pt-2">
              <label className="block text-sm font-medium text-gray-600 mb-1">Role</label>
              <Select
                  value={agentData.roles[0] || ''}
                  onChange={handleAgentRoleChange}
                  style={{ width: '100%' }}
                  required
              >
                <Select.Option value="">Select role</Select.Option>
                {(roles || []).map((role) => (
                    <Select.Option key={role} value={role}>
                      {role}
                    </Select.Option>
                ))}
              </Select>
            </div>
            <div className="pt-3">
              <Button
                  type="primary"
                  htmlType="submit"
                  variant="primary"
                  size="rg"
                  loading={creating}
                  className="bg-[#0a37b3] hover:bg-[#01408e]"
              >
                {creating ? 'Creating...' : 'Create User'}
              </Button>
            </div>
          </form>
        </Card>

        {/* Users list */}
        {loading ? (
            <div className="flex justify-center items-center h-32">
              <Text type="secondary">Loading...</Text>
            </div>
        ) : (
            <>
              {/* Desktop table (visible only on computers) */}
              <div className="hidden md:block">
                <Card
                    title="Users List"
                    className="overflow-x-auto"
                    bodyStyle={{ padding: '12px' }}
                >
                  <Table
                      columns={[
                        {
                          title: 'ID',
                          dataIndex: 'id',
                          key: 'id',
                          sorter: (a, b) => a.id - b.id,
                        },
                        {
                          title: 'Name',
                          dataIndex: 'name',
                          key: 'name',
                          sorter: (a, b) => a.name.localeCompare(b.name),
                        },
                        {
                          title: 'Email',
                          dataIndex: 'email',
                          key: 'email',
                          sorter: (a, b) => a.email.localeCompare(b.email),
                        },
                        {
                          title: 'Role',
                          dataIndex: 'role',
                          key: 'role',
                          render: (_, record) => (
                              record.role[0] === 'admin' ? (
                                  <span>Admin</span>
                              ) : (
                                  <Select
                                      value={record.role[0]}
                                      onChange={(e) => handleRoleChange(record.id, e.target.value)}
                                      loading={updateLoadingId === record.id}
                                      disabled={updateLoadingId === record.id}
                                  >
                                    {(roles || []).map((role) => (
                                        <Select.Option key={role} value={role}>
                                          {role}
                                        </Select.Option>
                                    ))}
                                  </Select>
                              )
                          ),
                        },
                      ]}
                      dataSource={users}
                      rowKey="id"
                      pagination={{
                        pageSize: 10,
                        showSizeChanger: false,
                      }}
                      scroll={{ x: true }}
                  />
                </Card>
              </div>

              {/* Mobile list (visible only on mobile devices) */}
              <div className="md:hidden">
                <Card
                    title="Users"
                    bodyStyle={{ padding: '12px' }}
                >
                  <List
                      dataSource={users}
                      renderItem={renderMobileItem}
                      pagination={{
                        pageSize: 5,
                        size: 'small',
                        showSizeChanger: false,
                        simple: true,
                      }}
                      locale={{ emptyText: 'No users found' }}
                  />
                </Card>
              </div>
            </>
        )}
      </div>
  );
};

export default AdminUsersPage;
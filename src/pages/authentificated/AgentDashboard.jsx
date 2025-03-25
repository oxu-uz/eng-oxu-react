import React, { useState, useEffect } from 'react';
import { addStudent, getUserAddedStudents } from '../../services/AgentsService';
import Button from '../../components/Button';
import Input from '../../components/Input';

const AgentDashboard = () => {
    const [students, setStudents] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
  
    const [formData, setFormData] = useState({
      full_name: '',
      phone: '',
      password: '',
    });
    const [creating, setCreating] = useState(false);
  
    const fetchStudents = async () => {
      try {
        setLoading(true);
        const data = await getUserAddedStudents();
        setStudents(data);
      } catch (err) {
        setError('Error loading students');
      } finally {
        setLoading(false);
      }
    };
  
    useEffect(() => {
      fetchStudents();
    }, []);
  
    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setFormData((prev) => ({ ...prev, [name]: value }));
    };
  
    const handleAddStudent = async (e) => {
      e.preventDefault();
      try {
        setCreating(true);
        await addStudent({
          full_name: formData.full_name,
          phone: Number(formData.phone),
          password: formData.password,
        });
        // Очистка формы
        setFormData({ full_name: '', phone: '', password: '' });
        fetchStudents();
      } catch (err) {
        setError('Error adding student');
      } finally {
        setCreating(false);
      }
    };
  
    return (
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">Agents Management</h1>
  
        {error && <p className="text-red-500 mb-4">{error}</p>}
  
        {/* Форма для создания нового студента */}
        <div className="mb-8 p-6 bg-gray-50 dark:bg-gray-800 shadow rounded-lg">
          <h2 className="text-xl font-semibold mb-4">Add New Student (Agent)</h2>
          <form onSubmit={handleAddStudent} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Full Name
              </label>
              <Input
                type="text"
                name="full_name"
                value={formData.full_name}
                onChange={handleInputChange}
                placeholder="Enter full name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Phone
              </label>
              <Input
                type="number"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                placeholder="Enter phone number"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Password
              </label>
              <Input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                placeholder="Enter password"
              />
            </div>
            <Button type="submit" variant="primary" size="rg">
              {creating ? 'Adding...' : 'Add Student'}
            </Button>
          </form>
        </div>
  
        {/* Таблица добавленных студентов */}
        <div className="p-6 bg-white dark:bg-gray-900 shadow rounded-lg overflow-hidden">
          <h2 className="text-xl font-semibold mb-4">User Added Students</h2>
          {loading ? (
            <p>Loading students...</p>
          ) : (
            <table className="min-w-full">
              <thead className="bg-gray-100 dark:bg-gray-800">
                <tr>
                  <th className="px-4 py-2 text-left text-sm font-medium text-gray-600 dark:text-gray-400">
                    ID
                  </th>
                  <th className="px-4 py-2 text-left text-sm font-medium text-gray-600 dark:text-gray-400">
                    Full Name
                  </th>
                  <th className="px-4 py-2 text-left text-sm font-medium text-gray-600 dark:text-gray-400">
                    Phone
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                {students.map((student) => (
                  <tr key={student.id} className="hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                    <td className="px-4 py-2 text-sm text-gray-700 dark:text-gray-200">
                      {student.id}
                    </td>
                    <td className="px-4 py-2 text-sm text-gray-700 dark:text-gray-200">
                      {student.full_name}
                    </td>
                    <td className="px-4 py-2 text-sm text-gray-700 dark:text-gray-200">
                      {student.phone}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    );
  };

export default AgentDashboard
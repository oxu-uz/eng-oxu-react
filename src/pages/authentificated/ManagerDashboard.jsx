import React, { useState, useEffect } from 'react';
import { getAllStudents, getRegisteredStudents, getAllDeletedStudents, getStudentInfos } from '../../services/manager/ManagerStudentsService';
import Button from '../../components/Button';
import { Modal } from 'antd';

const ManagerDashboard = () => {
    const [activeTab, setActiveTab] = useState('all'); // 'all' | 'registered' | 'deleted'
    const [students, setStudents] = useState([]);
    const [loading, setLoading] = useState(false);
    const [selectedStudent, setSelectedStudent] = useState(null);
    const [modalVisible, setModalVisible] = useState(false);
  
    const fetchStudents = async () => {
      setLoading(true);
      try {
        let data = [];
        if (activeTab === 'all') {
          data = await getAllStudents();
        } else if (activeTab === 'registered') {
          data = await getRegisteredStudents();
        } else if (activeTab === 'deleted') {
          data = await getAllDeletedStudents();
        }
        setStudents(data);
      } catch (error) {
        console.error("Error fetching students:", error);
      } finally {
        setLoading(false);
      }
    };
  
    useEffect(() => {
      fetchStudents();
    }, [activeTab]);
  
    const viewStudentDetails = async (studentId) => {
      try {
        const details = await getStudentInfos(studentId);
        setSelectedStudent(details);
        setModalVisible(true);
      } catch (error) {
        console.error("Error fetching student details:", error);
      }
    };
  
    return (
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">Manager Students</h1>
  
        <div className="mb-4 flex space-x-2">
          <Button
          size="rg"
            onClick={() => setActiveTab('all')}
            variant={activeTab === 'all' ? 'primary' : 'secondary'}
          >
            All Students
          </Button>
          <Button
          size="rg"
            onClick={() => setActiveTab('registered')}
            variant={activeTab === 'registered' ? 'primary' : 'secondary'}
          >
            Registered Students
          </Button>
          <Button
          size="rg"
            onClick={() => setActiveTab('deleted')}
            variant={activeTab === 'deleted' ? 'primary' : 'secondary'}
          >
            Deleted Students
          </Button>
        </div>
  
        {loading ? (
          <p>Loading students...</p>
        ) : (
          <table className="min-w-full bg-white dark:bg-gray-900 shadow rounded-lg overflow-hidden">
            <thead className="bg-gray-100 dark:bg-gray-800">
              <tr>
                <th className="px-4 py-2 text-left text-sm font-medium text-gray-600 dark:text-gray-400">ID</th>
                <th className="px-4 py-2 text-left text-sm font-medium text-gray-600 dark:text-gray-400">Full Name</th>
                <th className="px-4 py-2 text-left text-sm font-medium text-gray-600 dark:text-gray-400">Phone</th>
                <th className="px-4 py-2 text-left text-sm font-medium text-gray-600 dark:text-gray-400">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
              {students.map((student) => (
                <tr
                  key={student.id}
                  className="hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                >
                  <td className="px-4 py-2 text-sm text-gray-700 dark:text-gray-200">{student.id}</td>
                  <td className="px-4 py-2 text-sm text-gray-700 dark:text-gray-200">{student.full_name}</td>
                  <td className="px-4 py-2 text-sm text-gray-700 dark:text-gray-200">{student.phone}</td>
                  <td className="px-4 py-2 text-sm text-gray-700 dark:text-gray-200">
                    <Button size="rg" variant="primary" onClick={() => viewStudentDetails(student.id)}>
                      View Details
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
  
        <Modal
          title="Student Details"
          visible={modalVisible}
          onCancel={() => setModalVisible(false)}
          footer={[
            <Button size="rg" key="close" onClick={() => setModalVisible(false)}>
              Close
            </Button>
          ]}
        >
          {selectedStudent ? (
            <div>
              <p><strong>ID:</strong> {selectedStudent.id}</p>
              <p><strong>Full Name:</strong> {selectedStudent.full_name}</p>
              <p><strong>Phone:</strong> {selectedStudent.phone}</p>
              {/* Добавьте дополнительные поля, если они есть */}
            </div>
          ) : (
            <p>Loading details...</p>
          )}
        </Modal>
      </div>
    );
  };

export default ManagerDashboard
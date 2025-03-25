import React, { useState, useEffect } from 'react';
import { Button, Modal, Form, Input, message } from 'antd';
import { getAllCategories, createCategory, updateCategory, deleteCategory } from '../../services/manager/category/ManagerCategoryService';

const ManagerCategoriesPage = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [editingCategory, setEditingCategory] = useState(null);
  const [form] = Form.useForm();

  const fetchCategories = async () => {
    setLoading(true);
    try {
      const data = await getAllCategories();
      setCategories(data);
    } catch (error) {
      message.error('Error fetching categories');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  const openModal = (category) => {
    setEditingCategory(category);
    form.setFieldsValue({ title: category ? category.title : '' });
    setIsModalVisible(true);
  };

  const handleDelete = async (id) => {
    try {
      await deleteCategory(id);
      message.success('Category deleted');
      fetchCategories();
    } catch (error) {
      message.error('Error deleting category');
    }
  };

  const handleOk = async () => {
    try {
      const values = await form.validateFields();
      if (editingCategory) {
        // Update existing category
        await updateCategory(editingCategory.id, values);
        message.success('Category updated');
      } else {
        // Create new category
        await createCategory(values);
        message.success('Category created');
      }
      setIsModalVisible(false);
      fetchCategories();
    } catch (error) {
      message.error('Error saving category');
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Manager Categories</h1>
      <Button type="primary" onClick={() => openModal(null)}>
        Create Category
      </Button>
      <table className="min-w-full mt-4 border">
        <thead className="bg-gray-100">
          <tr>
            <th className="px-4 py-2 border">ID</th>
            <th className="px-4 py-2 border">Title</th>
            <th className="px-4 py-2 border">Actions</th>
          </tr>
        </thead>
        <tbody>
          {categories.map((cat) => (
            <tr key={cat.id} className="border-b">
              <td className="px-4 py-2 border">{cat.id}</td>
              <td className="px-4 py-2 border">{cat.title}</td>
              <td className="px-4 py-2 border">
                <Button onClick={() => openModal(cat)}>Edit</Button>
                <Button danger onClick={() => handleDelete(cat.id)} className="ml-2">
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <Modal
        title={editingCategory ? "Edit Category" : "Create Category"}
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={() => setIsModalVisible(false)}
      >
        <Form form={form} layout="vertical">
          <Form.Item
            label="Title"
            name="title"
            rules={[{ required: true, message: 'Please input category title' }]}
          >
            <Input />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default ManagerCategoriesPage;

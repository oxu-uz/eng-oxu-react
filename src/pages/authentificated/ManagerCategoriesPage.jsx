import React, { useState, useEffect } from 'react';
import {Button, Modal, Form, Input, message, Card, List, Typography, Skeleton, Divider} from 'antd';
import {
  createCategory,
  deleteCategory,
  getAllCategories,
  updateCategory
} from "../../services/manager/category/ManagerCategoryService.jsx";

const { Text, Title } = Typography;

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
        await updateCategory(editingCategory.id, values);
        message.success('Category updated');
      } else {
        await createCategory(values);
        message.success('Category created');
      }
      setIsModalVisible(false);
      fetchCategories();
    } catch (error) {
      message.error('Error saving category');
    }
  };

  // Mobile category card renderer
  const renderMobileCategory = (category) => (
      <Card className="mb-4 shadow-sm">
        <div className="space-y-3">
          <div className="flex justify-between">
            <Text strong>ID:</Text>
            <Text>{category.id}</Text>
          </div>
          <Divider className="my-2" />

          <div className="flex justify-between">
            <Text strong>Title:</Text>
            <Text>{category.title}</Text>
          </div>

          <div className="flex space-x-2">
            <Button
                size="small"
                onClick={() => openModal(category)}
                block
            >
              Edit
            </Button>
            <Button
                size="small"
                onClick={() => handleDelete(category.id)}
                block
                danger
            >
              Delete
            </Button>
          </div>
        </div>
      </Card>
  );

  return (
      <div className="container mx-auto p-2 md:p-4">
        <Title level={3} className="mb-4">Manager Categories</Title>

        <div className="mb-4">
          <Button
              type="primary"
              onClick={() => openModal(null)}
              size="large"
          >
            Create Category
          </Button>
        </div>

        {loading ? (
            <Skeleton active paragraph={{ rows: 6 }} />
        ) : (
            <>
              {/* Desktop Table (hidden on mobile) */}
              <div className="hidden md:block">
                <table className="min-w-full border rounded-lg overflow-hidden">
                  <thead className="bg-gray-100">
                  <tr>
                    <th className="px-4 py-2 border">ID</th>
                    <th className="px-4 py-2 border">Title</th>
                    <th className="px-4 py-2 border">Actions</th>
                  </tr>
                  </thead>
                  <tbody>
                  {categories.map((cat) => (
                      <tr key={cat.id} className="border-b hover:bg-gray-50">
                        <td className="px-4 py-2 border">{cat.id}</td>
                        <td className="px-4 py-2 border">{cat.title}</td>
                        <td className="px-4 py-2 border">
                          <Button size="middle" onClick={() => openModal(cat)}>
                            Edit
                          </Button>
                          <Button
                              size="middle"
                              danger
                              onClick={() => handleDelete(cat.id)}
                              className="ml-2"
                          >
                            Delete
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
                    dataSource={categories}
                    renderItem={renderMobileCategory}
                    locale={{ emptyText: 'No categories found' }}
                />
              </div>
            </>
        )}

        <Modal
            title={editingCategory ? "Edit Category" : "Create Category"}
            visible={isModalVisible}
            onOk={handleOk}
            onCancel={() => setIsModalVisible(false)}
            width="90%"
            style={{ maxWidth: '600px' }}
        >
          <Form form={form} layout="vertical">
            <Form.Item
                label="Title"
                name="title"
                rules={[{ required: true, message: 'Please input category title' }]}
            >
              <Input size="large" />
            </Form.Item>
          </Form>
        </Modal>
      </div>
  );
};

export default ManagerCategoriesPage;
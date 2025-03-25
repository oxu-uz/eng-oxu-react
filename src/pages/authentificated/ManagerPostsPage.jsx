import React, { useState, useEffect } from 'react';
import {Modal, Form, Input, Upload, message, Select } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { getAllCategories } from '../../services/manager/category/ManagerCategoryService';
import Button from '../../components/Button';
import { createNews, getNews, deleteNews, updateNews } from '../../services/manager/posts/ManagerPostsService';

const ManagerPostsPage = () => {
  const [posts, setPosts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [editingPost, setEditingPost] = useState(null);
  const [form] = Form.useForm();
  const [fileList, setFileList] = useState([]);

  const fetchPosts = async () => {
    setLoading(true);
    try {
      const data = await getNews();
      setPosts(data);
    } catch (error) {
      message.error('Error fetching posts');
    } finally {
      setLoading(false);
    }
  };


  const fetchCategories = async () => {
    try {
      const data = await getAllCategories();
      setCategories(data || []);
    } catch (err) {
      message.error('Error fetching categories');
    }
  };

  useEffect(() => {
    fetchPosts();
    fetchCategories();
  }, []);

  const openModal = (post) => {
    setEditingPost(post);
    if (post) {
      form.setFieldsValue({
        category_id: post.category_id,
        title: post.title,
        description: post.description,
      });
    } else {
      form.resetFields();
      setFileList([]);
    }
    setIsModalVisible(true);
  };

  const handleOk = async () => {
    try {
      const values = await form.validateFields();
      const formData = new FormData();
      formData.append('category_id', values.category_id);
      formData.append('title', values.title);
      formData.append('description', values.description);
      fileList.forEach(file => {
        formData.append('images[]', file.originFileObj);
      });
      if (editingPost) {
        await updateNews(editingPost.id, formData);
        message.success('Post updated');
      } else {
        await createNews(formData);
        message.success('Post created');
      }
      setIsModalVisible(false);
      fetchPosts();
    } catch (error) {
      message.error('Error saving post');
    }
  };

  const handleDelete = async (postId) => {
    try {
      await deleteNews(postId);
      message.success('Post deleted');
      fetchPosts();
    } catch (error) {
      message.error('Error deleting post');
    }
  };

  const handleUploadChange = ({ fileList }) => {
    setFileList(fileList);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Manager Posts</h1>
      <Button size="rg" variant="primary" onClick={() => openModal(null)}>
        Create Post
      </Button>
      <table className="min-w-full mt-4 border">
        <thead className="bg-gray-100">
          <tr>
            <th className="px-4 py-2 border">ID</th>
            <th className="px-4 py-2 border">Category ID</th>
            <th className="px-4 py-2 border">Title</th>
            <th className="px-4 py-2 border">Description</th>
            <th className="px-4 py-2 border">Actions</th>
          </tr>
        </thead>
        <tbody>
          {posts.map((post) => (
            <tr key={post.id} className="border-b">
              <td className="px-4 py-2 border">{post.id}</td>
              <td className="px-4 py-2 border">{post.category_id}</td>
              <td className="px-4 py-2 border">{post.title}</td>
              <td className="px-4 py-2 border">{post.description}</td>
              <td className="px-4 py-2 border">
                <Button onClick={() => openModal(post)}>Edit</Button>
                <Button danger onClick={() => handleDelete(post.id)} className="ml-2">
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <Modal
        title={editingPost ? "Edit Post" : "Create Post"}
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={() => setIsModalVisible(false)}
        width={600}
      >
        <Form form={form} layout="vertical">
          <Form.Item
            label="Category ID"
            name="category_id"
            rules={[{ required: true, message: 'Please input category ID' }]}
          >
            <Select>
              <Select.Option value="">Select a category</Select.Option>
              {(categories || []).map((category) => (
                <Select.Option key={category.id} value={category.id}>
                  {category.title}
                </Select.Option>
              ))}
            </Select>
          </Form.Item>
          <Form.Item
            label="Title"
            name="title"
            rules={[{ required: true, message: 'Please input title' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Description"
            name="description"
            rules={[{ required: true, message: 'Please input description' }]}
          >
            <Input.TextArea rows={4} />
          </Form.Item>
          <Form.Item label="Images">
            <Upload 
              fileList={fileList} 
              onChange={handleUploadChange} 
              beforeUpload={() => false} // предотвращает автоматическую загрузку
              multiple
            >
              <Button icon={<UploadOutlined />}>Select Images</Button>
            </Upload>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default ManagerPostsPage;

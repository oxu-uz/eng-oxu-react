import React, { useState, useEffect } from 'react';
import {Modal, Form,Button, Input, Upload, message, Select, Card, List, Typography, Skeleton, Divider, Tooltip} from 'antd';
import {DownOutlined, UploadOutlined, UpOutlined} from '@ant-design/icons';
import { getAllCategories } from '../../services/manager/category/ManagerCategoryService';
import { createNews, getNews, deleteNews, updateNews } from '../../services/manager/posts/ManagerPostsService';

const { Text, Title } = Typography;

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
        category_id: post.category?.id,
        title: post.title,
        description: post.description,
      });

      // Set existing images to fileList for edit mode
      const existingFiles = post.images.map((image, index) => ({
        uid: `-${index}`,
        name: `image_${index}.jpg`,
        status: 'done',
        url: image.image_path,
      }));
      setFileList(existingFiles);
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

      // Only append new files (filter out existing URLs)
      fileList.forEach(file => {
        if (file.originFileObj) {
          formData.append('images[]', file.originFileObj);
        }
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
      console.error('Error saving post:', error);
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

  // Mobile post card renderer
  const renderMobilePost = (post) => {
    const [expanded, setExpanded] = useState(false);
    const maxLength = 100;
    const shouldTruncate = post.description.length > maxLength;
    const displayText = expanded
        ? post.description
        : shouldTruncate
            ? `${post.description.substring(0, maxLength)}`
            : post.description;

    return (
        <Card className="mb-4 shadow-sm">
          <div className="space-y-3">
            <div className="flex justify-between">
              <Text strong>ID:</Text>
              <Text>{post.id}</Text>
            </div>
            <Divider className="my-2" />

            <div className="flex justify-between">
              <Text strong>Category:</Text>
              <Text>{post.category?.title}</Text>
            </div>
            <Divider className="my-2" />

            <div className="flex flex-col">
              <Text strong>Title:</Text>
              <Text className="mt-1">{post.title}</Text>
            </div>
            <Divider className="my-2" />

            <div className="flex flex-col">
              <Text strong>Description:</Text>
              <Text className="mt-1">
                {displayText}
                {shouldTruncate && (
                    <Button
                        type="link"
                        size="small"
                        onClick={() => setExpanded(!expanded)}
                        className="p-1 ml-1"
                    >
                      {expanded ? 'View Less' : 'View More'}
                    </Button>
                )}
              </Text>
            </div>

            <div className="flex space-x-2 pt-2">
              <Button
                  size="small"
                  onClick={() => openModal(post)}
                  block
              >
                Edit
              </Button>
              <Button
                  size="small"
                  className="border-red-600 text-red-600"
                  onClick={() => handleDelete(post.id)}
                  block
              >
                Delete
              </Button>
            </div>
          </div>
        </Card>
    );
  };

  return (
      <div className="container mx-auto p-2 md:p-4">
        <Title level={3} className="mb-4">Manager Posts</Title>

        <div className="mb-4">
          <Button
              size="large"
              type="primary"
              onClick={() => openModal(null)}
          >
            Create Post
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
                    <th className="px-4 py-2 border">Photo</th>
                    <th className="px-4 py-2 border">Category</th>
                    <th className="px-4 py-2 border">Title</th>
                    <th className="px-4 py-2 border">Description</th>
                    <th className="px-4 py-2 border">Actions</th>
                  </tr>
                  </thead>
                  <tbody>
                  {posts.map((post) => (
                      <tr key={post.id} className="border-b hover:bg-gray-50">
                        <td className="px-4 py-2 border">{post.id}</td>
                        <td className="px-4 py-2 border">
                          <img
                              src={post.images[0]?.image_path}
                              alt="post"
                              style={{ maxWidth: '100px', maxHeight: '100px' }}
                          />
                        </td>
                        <td className="px-4 py-2 border">{post.category?.title}</td>
                        <td className="px-4 py-2 border">{post.title}</td>
                        <td className="px-4 py-2 border">
                          <Tooltip title={post.description}>
                            <span className="line-clamp-2 cursor-help">{post.description}</span>
                          </Tooltip>
                        </td>
                        <td className="px-4 py-2 border">
                          <div className="flex justify-between items-center">
                            <Button size="rg" onClick={() => openModal(post)}>
                              Edit
                            </Button>
                            <Button
                                size="rg"
                                onClick={() => handleDelete(post.id)}
                                className="ml-2 border-red-600 text-red-600"
                            >
                              Delete
                            </Button>
                          </div>
                        </td>
                      </tr>
                  ))}
                  </tbody>
                </table>
              </div>

              {/* Mobile List (visible only on mobile) */}
              <div className="md:hidden">
                <List
                    dataSource={posts}
                    renderItem={renderMobilePost}
                    locale={{ emptyText: 'No posts found' }}
                />
              </div>
            </>
        )}

        <Modal
            title={editingPost ? "Edit Post" : "Create Post"}
            visible={isModalVisible}
            onOk={handleOk}
            onCancel={() => setIsModalVisible(false)}
            width="90%"
            style={{ maxWidth: '600px' }}
        >
          <Form form={form} layout="vertical">
            <Form.Item
                label="Category"
                name="category_id"
                rules={[{ required: true, message: 'Please select a category' }]}
            >
              <Select size="large">
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
              <Input size="large" />
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
                  beforeUpload={() => false}
                  multiple
                  listType="picture-card"
              >
                {fileList.length >= 8 ? null : (
                    <div>
                      <UploadOutlined />
                      <div style={{ marginTop: 8 }}>Upload</div>
                    </div>
                )}
              </Upload>
            </Form.Item>
          </Form>
        </Modal>
      </div>
  );
};

export default ManagerPostsPage;
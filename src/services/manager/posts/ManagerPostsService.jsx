import axiosInstance from "../../../api/axiosInstance";


// POST: Create a new news post (with form data)
export const createNews = async (formData) => {
  try {
    const response = await axiosInstance.post("/manager/create-news", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error creating news:", error);
    throw error;
  }
};

// GET: Get all news posts
export const getNews = async () => {
  try {
    const response = await axiosInstance.get("/manager/news");
    return response.data.data; // предположим, что новости приходят в data.data
  } catch (error) {
    console.error("Error getting news:", error);
    throw error;
  }
};

// GET: Get a news post by ID
export const getNewsById = async (newsId) => {
  try {
    const response = await axiosInstance.get(`/manager/news/${newsId}`);
    return response.data.data;
  } catch (error) {
    console.error(`Error getting news with id ${newsId}:`, error);
    throw error;
  }
};

// DELETE: Delete a news post by ID
export const deleteNews = async (newsId) => {
  try {
    const response = await axiosInstance.delete(`/manager/delete-news/${newsId}`);
    return response.data;
  } catch (error) {
    console.error(`Error deleting news with id ${newsId}:`, error);
    throw error;
  }
};

// POST: Update a news post by ID (используем POST как указано)
export const updateNews = async (newsId, formData) => {
  try {
    const response = await axiosInstance.post(`/manager/update-news/${newsId}`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return response.data;
  } catch (error) {
    console.error(`Error updating news with id ${newsId}:`, error);
    throw error;
  }
};

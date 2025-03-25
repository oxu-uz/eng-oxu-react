import axiosInstance from "../../../api/axiosInstance";


// POST: Create a new category
export const createCategory = async (categoryData) => {
  try {
    const response = await axiosInstance.post("/manager/category", categoryData);
    return response.data;
  } catch (error) {
    console.error("Error creating category:", error);
    throw error;
  }
};

export const getAllCategories = async () => {
    try {
      const response = await axiosInstance.get("/manager/category");
      return response.data.data; // Предполагается, что API возвращает объект вида { data: [...] }
    } catch (error) {
      console.error("Error getting categories:", error);
      throw error;
    }
  };


// GET: Get category by ID
export const getCategory = async (categoryId) => {
  try {
    const response = await axiosInstance.get(`/manager/category/${categoryId}`);
    return response.data;
  } catch (error) {
    console.error(`Error getting category with id ${categoryId}:`, error);
    throw error;
  }
};

// PUT: Update category by ID
export const updateCategory = async (categoryId, categoryData) => {
  try {
    const response = await axiosInstance.post(`/manager/category/${categoryId}`, categoryData);
    return response.data;
  } catch (error) {
    console.error(`Error updating category with id ${categoryId}:`, error);
    throw error;
  }
};

// DELETE: Delete category by ID
export const deleteCategory = async (categoryId) => {
  try {
    const response = await axiosInstance.delete(`/manager/category/${categoryId}`);
    return response.data;
  } catch (error) {
    console.error(`Error deleting category with id ${categoryId}:`, error);
    throw error;
  }
};

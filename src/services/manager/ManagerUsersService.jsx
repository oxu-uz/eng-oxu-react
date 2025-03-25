import axiosInstance from "../../api/axiosInstance";

// GET: Retrieve all users
export const getAllUsers = async () => {
  try {
    const response = await axiosInstance.get("/admin/all-users");
    return response.data.data; // returns the array of users
  } catch (error) {
    console.error("Error getting all users:", error);
    throw error;
  }
};

// GET: Retrieve user-added students by user ID
export const getUserAddedStudents = async (userId) => {
  try {
    const response = await axiosInstance.get(`/admin/user-added-students/${userId}`);
    return response.data.data; // returns the array of students added by the specified user
  } catch (error) {
    console.error(`Error getting user added students for user ${userId}:`, error);
    throw error;
  }
};

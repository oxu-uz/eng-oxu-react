import axiosInstance from "../api/axiosInstance";

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

// PUT: Update user role by ID
export const updateUserRole = async (userId, rolePayload) => {
  try {
    const response = await axiosInstance.put(`/admin/user-role/${userId}`, rolePayload);
    return response.data;
  } catch (error) {
    console.error(`Error updating user role for user ${userId}:`, error);
    throw error;
  }
};

// GET: Retrieve all available roles
export const getAllRoles = async () => {
    try {
      const response = await axiosInstance.get("/admin/roles");
      // Теперь API возвращает объект вида { "roles": ["admin", "agent", "manager", "student"] }
      return response.data.roles; // возвращаем массив ролей
    } catch (error) {
      console.error("Error getting roles:", error);
      throw error;
    }
  };
  

// POST: Create a new agent
export const createAgent = async (agentData) => {
  try {
    const response = await axiosInstance.post("/admin/agent/create", agentData);
    return response.data;
  } catch (error) {
    console.error("Error creating agent:", error);
    throw error;
  }
};

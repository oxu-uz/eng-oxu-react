import axiosInstance from "../api/axiosInstance";

// POST: Add a new student (agent)
export const addStudent = async (studentData) => {
  try {
    const response = await axiosInstance.post("/add-student", studentData);
    return response.data;
  } catch (error) {
    console.error("Error adding student:", error);
    throw error;
  }
};

// GET: Retrieve user-added students
export const getUserAddedStudents = async () => {
  try {
    const response = await axiosInstance.get("/user-added-students");
    return response.data.data; // возвращает массив добавленных студентов
  } catch (error) {
    console.error("Error getting user-added students:", error);
    throw error;
  }
};

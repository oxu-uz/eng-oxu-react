import axiosInstance from "../../api/axiosInstance";

// GET: Retrieve all students
export const getAllStudents = async () => {
  try {
    const response = await axiosInstance.get("/admin/all-students");
    return response.data.data; // returns the array of all students
  } catch (error) {
    console.error("Error getting all students:", error);
    throw error;
  }
};

// GET: Retrieve registered students
export const getRegisteredStudents = async () => {
  try {
    const response = await axiosInstance.get("/admin/registered-students");
    return response.data.data; // returns the array of registered students
  } catch (error) {
    console.error("Error getting registered students:", error);
    throw error;
  }
};

// GET: Retrieve all deleted students
export const getAllDeletedStudents = async () => {
  try {
    const response = await axiosInstance.get("/admin/all-deleted-students");
    return response.data.data; // returns the array of deleted students
  } catch (error) {
    console.error("Error getting deleted students:", error);
    throw error;
  }
};

// GET: Retrieve detailed info of a student by ID
export const getStudentInfos = async (studentId) => {
  try {
    const response = await axiosInstance.get(`/admin/student-infos/${studentId}`);
    return response.data.data; // returns detailed info for the student
  } catch (error) {
    console.error(`Error getting student infos for ${studentId}:`, error);
    throw error;
  }
};

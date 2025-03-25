import axiosInstance from "../api/axiosInstance";

// GET: Retrieve all students
export const getAllStudents = async () => {
  try {
    const response = await axiosInstance.get("/admin/all-students");
    return response.data.data; // returns the array of students
  } catch (error) {
    console.error("Error getting all students:", error);
    throw error;
  }
};

// DELETE: Delete a student by ID
export const deleteStudent = async (studentId) => {
  try {
    const response = await axiosInstance.delete(`/admin/delete/${studentId}`);
    return response.data;
  } catch (error) {
    console.error(`Error deleting student ${studentId}:`, error);
    throw error;
  }
};

export const getAllDeletedStudents = async () => {
    try {
      const response = await axiosInstance.get("/admin/all-deleted-students");
      return response.data.data; // returns an array of deleted students
    } catch (error) {
      console.error("Error fetching deleted students:", error);
      throw error;
    }
  };

// GET: Restore a student by ID
export const restoreStudent = async (studentId) => {
  try {
    const response = await axiosInstance.get(`/admin/restore/${studentId}`);
    return response.data;
  } catch (error) {
    console.error(`Error restoring student ${studentId}:`, error);
    throw error;
  }
};

// GET: Retrieve detailed infos of a student by ID
export const getStudentInfos = async (studentId) => {
  try {
    const response = await axiosInstance.get(`/admin/student-infos/${studentId}`);
    return response.data.data;
  } catch (error) {
    console.error(`Error getting student infos for ${studentId}:`, error);
    throw error;
  }
};

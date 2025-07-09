import axiosInstance from "../../api/axiosInstance.jsx";

export const getApplicants = async () => {
    try {
        const response = await axiosInstance.get("/applicant");
        return response?.data;
    }catch (error){
        console.error("Error getting all applicants for user:", error);
        throw error;
    }
}
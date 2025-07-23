import axiosInstance from "../../api/axiosInstance.jsx";

export const getApplicants = async () => {
    try {
        const response = await axiosInstance.get("/applicant");
        return response?.data;
    } catch (error) {
        console.error("Error getting all applicants for user:", error);
        throw error;
    }
}

export const updateApplicant = async (applicantId, applicantData) => {
    try {
        const response = await axiosInstance.put(`/applicant_update/${applicantId}`, applicantData);
        return response?.data;
    } catch (error) {
        console.error("Error updating applicant:", error);
        throw error;
    }
}

export const deleteApplicant = async (applicantId) => {
    try {
        const response = await axiosInstance.delete(`/applicant_destroy/${applicantId}`);
        return response?.data;
    } catch (error) {
        console.error("Error deleting applicant:", error);
    }
}
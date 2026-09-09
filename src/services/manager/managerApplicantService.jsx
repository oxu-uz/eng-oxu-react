import axiosInstance from "../../api/axiosInstance.jsx";

export const getApplicants = async (page = 1, pageSize = 30, filters = {}) => {
    try {
        const params = {
            page,
            per_page: pageSize,
        };

        if (filters.search) params.search = filters.search;
        if (filters.gender) params.gender = filters.gender;
        if (filters.nationality) params.nationality = filters.nationality;
        if (filters.study_status) params.study_status = filters.study_status;

        const response = await axiosInstance.get("/applicant", {
            params
        });
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

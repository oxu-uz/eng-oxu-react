import axiosInstance from "../../api/axiosInstance.jsx";

export const getMous = async (page, pageSize = 30) => {
    try {
        const params = {};
        if (page) params.page = page;
        if (pageSize) params.pagination = pageSize;
        const response = await axiosInstance.get("/mou", { params });
        return response?.data;
    } catch (error) {
        console.error("Error getting MoU list:", error);
        throw error;
    }
};

export const getMouById = async (id) => {
    try {
        const response = await axiosInstance.get(`/mou/${id}`);
        return response?.data;
    } catch (error) {
        console.error("Error getting MoU:", error);
        throw error;
    }
};

export const generateMou = async (data) => {
    try {
        const response = await axiosInstance.post("/mou", data);
        return response?.data;
    } catch (error) {
        console.error("Error generating MoU:", error);
        throw error;
    }
};

export const downloadMou = async (id) => {
    try {
        const response = await axiosInstance.get(`/mou/${id}/download`, {
            responseType: "blob",
        });
        return response;
    } catch (error) {
        console.error("Error downloading MoU:", error);
        throw error;
    }
};

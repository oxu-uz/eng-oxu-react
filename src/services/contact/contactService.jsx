import axiosInstance from "../../api/axiosInstance.jsx";

export const createContact = async (contact) => {
    try {
        const response = await axiosInstance.post("/main_contacts", contact);
        return response.data;
    } catch (error) {
        console.error("Error while creating contact:", error.response?.data || error.message);
        throw error;
    }
};

// contactService.jsx
export const internationalRelationsContact = async (contactData) => {
    try {
        const response = await axiosInstance.post("/admissions", contactData);
        return {
            success: true,
            data: response.data,
            message: response.data.message || "Your submission was successful!"
        };
    } catch (error) {
        console.error("API Error:", error.response?.data || error.message);
        return {
            success: false,
            message: error.response?.data?.message || "Failed to submit the form. Please try again later."
        };
    }
};

export const applicationForm = async (contactData) => {
    try {
        const response = await axiosInstance.post("/applicant", contactData);
        return response?.data;
    } catch (error) {
        console.error("Error while creating applicationForm:", error.response?.data || error.message);
        throw error;
    }
}

export const generateLetter = async (data) => {
    try {
        const response = await axiosInstance.post("/admission_letter", data);
        return response?.data;
    } catch (error) {
        console.error("Error while generating letter:", error.response?.data || error.message);
        throw error;
    }
}
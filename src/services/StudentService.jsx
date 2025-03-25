// src/services/StudentService.js
import axiosInstance from "../api/axiosInstance";

// GET: Получение информации о студенте
export const getStudentAboutInfo = async () => {
  try {
    const response = await axiosInstance.get("/student/about-student");
    return response.data.data;
  } catch (error) {
    console.error("Ошибка получения информации о студенте:", error);
    throw error;
  }
};

// POST: Создание данных семьи студента
// Ожидаемый payload:
// {
//   "father_name": "John Doe dad ddd",
//   "father_phone": 14548434444,
//   "mather_name": "John Does",
//   "mather_phone": 1434538474444
// }
export const createStudentFamily = async (familyData) => {
  try {
    const response = await axiosInstance.post("/student/family", familyData);
    return response.data;
  } catch (error) {
    console.error("Ошибка создания семейных данных:", error);
    throw error;
  }
};

// POST: Создание информации о студенте
// Ожидаемый payload:
// {
//   "hobbies": "futbol, vollleybol",
//   "events": "Qanaqadir eslatjdjjvnjndjnvdfjjmalar"
// }
export const createStudentInfos = async (infosData) => {
  try {
    const response = await axiosInstance.post("/student/infos", infosData);
    return response.data;
  } catch (error) {
    console.error("Ошибка создания информации о студенте:", error);
    throw error;
  }
};

// POST: Создание профиля студента
// Ожидаемый payload:
// {
//    "gender": 1,
//    "nationaly_id": 23,
//    "country_id": 4,
//    "address": "Bukhara 1-1 Nizomiy",
//    "birth_at": "2025-02-03"
// }
export const createStudentProfile = async (profileData) => {
  try {
    const response = await axiosInstance.post("/student/student-profile", profileData);
    return response.data;
  } catch (error) {
    console.error("Ошибка создания профиля студента:", error);
    throw error;
  }
};

// POST: Создание данных об образовании (старое обучение)
// Ожидаемый payload:
// {
//   "old_school": "34-maktab",
//   "address": "buxoro sharq 1445 uy",
//   "language": "uzbek",
//   "fav_lessons": "ingliz tili"
// }
export const createStudentOldLearn = async (oldLearnData) => {
  try {
    const response = await axiosInstance.post("/student/old-learn", oldLearnData);
    return response.data;
  } catch (error) {
    console.error("Ошибка создания данных об образовании:", error);
    throw error;
  }
};

// POST: Загрузка файлов студента
// Для загрузки файлов используется FormData
// file - объект File, fileType - строка (например, 'certificate')
export const uploadStudentFile = async (file, fileType) => {
  try {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("file_type", fileType);

    const response = await axiosInstance.post("/student/uploads", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return response.data;
  } catch (error) {
    console.error("Ошибка загрузки файла студента:", error);
    throw error;
  }
};

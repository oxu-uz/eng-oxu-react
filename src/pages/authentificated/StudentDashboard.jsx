import React, { useEffect, useState } from "react";
import {
  getStudentAboutInfo,
  createStudentFamily,
  createStudentInfos,
  createStudentProfile,
  createStudentOldLearn,
  uploadStudentFile,
} from "../../services/StudentService";
import Input from "../../components/Input"; // Your custom Input component
import Button from "../../components/Button"; // Your custom Button component
import File from "../../components/File";
import Avatar from "../../components/Avatar";
import Select from "../../components/Select";

const StudentDashboard = () => {
  const [studentData, setStudentData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Family Information Form State
  const [familyForm, setFamilyForm] = useState({
    father_name: "",
    father_phone: "",
    mather_name: "",
    mather_phone: "",
  });
  const [familyMessage, setFamilyMessage] = useState("");

  // Additional Information Form State
  const [infosForm, setInfosForm] = useState({
    hobbies: "",
    events: "",
  });
  const [infosMessage, setInfosMessage] = useState("");

  // Student Profile Form State
  const [profileForm, setProfileForm] = useState({
    gender: "",
    nationaly_id: "",
    country_id: "",
    address: "",
    birth_at: "",
  });
  const [profileMessage, setProfileMessage] = useState("");

  // Old Learning Data Form State
  const [oldLearnForm, setOldLearnForm] = useState({
    old_school: "",
    address: "",
    language: "",
    fav_lessons: "",
  });
  const [oldLearnMessage, setOldLearnMessage] = useState("");

  // File Upload Form State
  const [file, setFile] = useState(null);
  const [fileType, setFileType] = useState("");
  const [fileUploadMessage, setFileUploadMessage] = useState("");

  useEffect(() => {
    const fetchStudentData = async () => {
      try {
        const data = await getStudentAboutInfo();
        setStudentData(data);

        // Pre-populate Family Information if available
        if (data?.family && data.family.length > 0) {
          const fam = data.family[0] || {};
          setFamilyForm({
            father_name: fam.father_name || "",
            father_phone: fam.father_phone || "",
            mather_name: fam.mather_name || "",
            mather_phone: fam.mather_phone || "",
          });
        }
        // Pre-populate Additional Information if available
        if (data?.infos && data.infos.length > 0) {
          const infos = data.infos[0] || {};
          setInfosForm({
            hobbies: infos.hobbies || "",
            events: infos.events || "",
          });
        }
        // Pre-populate Profile if available
        if (data?.profile && data.profile.length > 0) {
          const prof = data.profile[0] || {};
          setProfileForm({
            gender: prof.gender || "",
            nationaly_id: prof.nationaly_id || "",
            country_id: prof.country_id || "",
            address: prof.address || "",
            birth_at: prof.birth_at || "",
          });
        }
        // Pre-populate Old Learning Data if available
        if (data?.old_school && data.old_school.length > 0) {
          const oldLearn = data.old_school[0] || {};
          setOldLearnForm({
            old_school: oldLearn.old_school || "",
            address: oldLearn.address || "",
            language: oldLearn.language || "",
            fav_lessons: oldLearn.fav_lessons || "",
          });
        }
      } catch (err) {
        setError("Error loading student data");
      } finally {
        setLoading(false);
      }
    };

    fetchStudentData();
  }, []);

  // Handlers for form submissions
  const handleFamilySubmit = async (e) => {
    e.preventDefault();
    try {
      await createStudentFamily(familyForm);
      setFamilyMessage("Family data saved successfully");
    } catch (err) {
      setFamilyMessage("Error saving family data");
    }
  };

  const handleInfosSubmit = async (e) => {
    e.preventDefault();
    try {
      await createStudentInfos(infosForm);
      setInfosMessage("Additional info saved successfully");
    } catch (err) {
      setInfosMessage("Error saving additional info");
    }
  };

  const handleProfileSubmit = async (e) => {
    e.preventDefault();
    try {
      await createStudentProfile(profileForm);
      setProfileMessage("Profile saved successfully");
    } catch (err) {
      setProfileMessage("Error saving profile");
    }
  };

  const handleOldLearnSubmit = async (e) => {
    e.preventDefault();
    try {
      await createStudentOldLearn(oldLearnForm);
      setOldLearnMessage("Old learning data saved successfully");
    } catch (err) {
      setOldLearnMessage("Error saving old learning data");
    }
  };

  const handleFileUpload = async (e) => {
    e.preventDefault();
    if (!file || !fileType) {
      setFileUploadMessage("Please select a file and specify its type");
      return;
    }
    try {
      await uploadStudentFile(file, fileType);
      setFileUploadMessage("File uploaded successfully");
    } catch (err) {
      setFileUploadMessage("Error uploading file");
    }
  };

  const getInitials = (name) => {
    if (!name) return "";
    const words = name.trim().split(" ");
    let initials = "";
    for (let i = 0; i < Math.min(words.length, 2); i++) {
      initials += words[i][0];
    }
    return initials.toUpperCase();
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        Loading...
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center text-red-500">
        {error}
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f7fafc] p-4 space-y-6">
      {/* Student Information */}
      <div className="max-w-3xl mx-auto bg-white dark:bg-gray-800 rounded-lg border border-gray-100 p-6">
        {/* Header with Avatar and Name */}
        <div className="flex items-center space-x-4 border-b border-gray-200 dark:border-gray-700 pb-4 mb-4">
          <Avatar 
            variant="blue" 
            size="rg" 
            rounded 
            text={getInitials(studentData?.full_name) || "NA"} 
            status="active"
          />
          <div>
            <h2 className="text-xl font-bold text-gray-800 dark:text-white">
              {studentData?.full_name || "N/A"}
            </h2>
            <p className="text-sm text-gray-500 dark:text-gray-300">
              {studentData?.user?.email || "N/A"}
            </p>
          </div>
        </div>

        {/* Details Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <p className="text-gray-600 dark:text-gray-300">
              <span className="inline-block font-medium text-slate-700 dark:text-white">Phone:</span> {studentData?.phone || "N/A"}
            </p>
          </div>
          <div>
            <p className="text-gray-600 dark:text-gray-300">
              <span className="inline-block font-medium text-slate-700 dark:text-white">User:</span> {studentData?.user?.name || "N/A"}
            </p>
          </div>
          <div className="sm:col-span-2">
            <p className="text-gray-600 dark:text-gray-300">
              <span className="inline-block font-medium text-slate-700 dark:text-white">Role:</span> {studentData?.user?.role?.join(", ") || "N/A"}
            </p>
          </div>
        </div>
      </div>

      {/* Family Information Form */}
      <div className="max-w-3xl mx-auto bg-white rounded shadow p-6">
        <h2 className="text-xl font-bold mb-5">Family Information</h2>
        <form onSubmit={handleFamilySubmit}>
          <div className="mb-4">
            <label className="inline-block text-sm font-medium text-slate-700 dark:text-white mb-2">Father's Name</label>
            <Input
              type="text"
              name="father_name"
              value={familyForm.father_name}
              onChange={(e) => setFamilyForm({ ...familyForm, father_name: e.target.value })}
              placeholder="Enter father's name"
            />
          </div>
          <div className="mb-4">
            <label className="inline-block text-sm font-medium text-slate-700 dark:text-white mb-2">Father's Phone</label>
            <Input
              type="text"
              name="father_phone"
              value={familyForm.father_phone}
              onChange={(e) => setFamilyForm({ ...familyForm, father_phone: e.target.value })}
              placeholder="Enter father's phone"
            />
          </div>
          <div className="mb-4">
            <label className="inline-block text-sm font-medium text-slate-700 dark:text-white mb-2">Mother's Name</label>
            <Input
              type="text"
              name="mather_name"
              value={familyForm.mather_name}
              onChange={(e) => setFamilyForm({ ...familyForm, mather_name: e.target.value })}
              placeholder="Enter mother's name"
            />
          </div>
          <div className="mb-4">
            <label className="inline-block text-sm font-medium text-slate-700 dark:text-white mb-2">Mother's Phone</label>
            <Input
              type="text"
              name="mather_phone"
              value={familyForm.mather_phone}
              onChange={(e) => setFamilyForm({ ...familyForm, mather_phone: e.target.value })}
              placeholder="Enter mother's phone"
            />
          </div>
          <Button variant="primary" size="rg" type="submit">
            Save Family Information
          </Button>
        </form>
        {familyMessage && <p className="mt-2 text-green-500">{familyMessage}</p>}
      </div>

      {/* Additional Information Form */}
      <div className="max-w-3xl mx-auto bg-white rounded shadow p-6">
        <h2 className="text-xl font-bold mb-5">Additional Information</h2>
        <form onSubmit={handleInfosSubmit}>
          <div className="mb-4">
            <label className="inline-block text-sm font-medium text-slate-700 dark:text-white mb-2">Hobbies</label>
            <Input
              type="text"
              name="hobbies"
              value={infosForm.hobbies}
              onChange={(e) => setInfosForm({ ...infosForm, hobbies: e.target.value })}
              placeholder="Enter hobbies"
            />
          </div>
          <div className="mb-4">
            <label className="inline-block text-sm font-medium text-slate-700 dark:text-white mb-2">Events</label>
            <Input
              type="text"
              name="events"
              value={infosForm.events}
              onChange={(e) => setInfosForm({ ...infosForm, events: e.target.value })}
              placeholder="Enter events"
            />
          </div>
          <Button variant="primary" size="rg" type="submit">
            Save Additional Information
          </Button>
        </form>
        {infosMessage && <p className="mt-2 text-green-500">{infosMessage}</p>}
      </div>

      {/* Student Profile Form */}
      <div className="max-w-3xl mx-auto bg-white rounded shadow p-6">
        <h2 className="text-xl font-bold mb-5">Student Profile</h2>
        <form onSubmit={handleProfileSubmit}>
          <div className="mb-4">
            <label className="inline-block text-sm font-medium text-slate-700 dark:text-white mb-2">Gender (1 - Male, 2 - Female)</label>
            <Input
              type="number"
              name="gender"
              value={profileForm.gender}
              onChange={(e) => setProfileForm({ ...profileForm, gender: e.target.value })}
              placeholder="Enter gender"
            />
          </div>
          <div className="mb-4">
            <label className="inline-block text-sm font-medium text-slate-700 dark:text-white mb-2">Nationality ID</label>
            <Input
              type="number"
              name="nationaly_id"
              value={profileForm.nationaly_id}
              onChange={(e) => setProfileForm({ ...profileForm, nationaly_id: e.target.value })}
              placeholder="Enter nationality ID"
            />
          </div>
          <div className="mb-4">
            <label className="inline-block text-sm font-medium text-slate-700 dark:text-white mb-2">Country ID</label>
            <Input
              type="number"
              name="country_id"
              value={profileForm.country_id}
              onChange={(e) => setProfileForm({ ...profileForm, country_id: e.target.value })}
              placeholder="Enter country ID"
            />
          </div>
          <div className="mb-4">
            <label className="inline-block text-sm font-medium text-slate-700 dark:text-white mb-2">Address</label>
            <Input
              type="text"
              name="address"
              value={profileForm.address}
              onChange={(e) => setProfileForm({ ...profileForm, address: e.target.value })}
              placeholder="Enter address"
            />
          </div>
          <div className="mb-4">
            <label className="inline-block text-sm font-medium text-slate-700 dark:text-white mb-2">Date of Birth (YYYY-MM-DD)</label>
            <Input
              type="date"
              name="birth_at"
              value={profileForm.birth_at}
              onChange={(e) => setProfileForm({ ...profileForm, birth_at: e.target.value })}
              placeholder="Enter date of birth"
            />
          </div>
          <Button variant="primary" size="rg" type="submit">
            Save Profile
          </Button>
        </form>
        {profileMessage && <p className="mt-2 text-green-500">{profileMessage}</p>}
      </div>

      {/* Old Learning Data Form */}
      <div className="max-w-3xl mx-auto bg-white rounded shadow p-6">
        <h2 className="text-xl font-bold mb-5">Old Learning Data</h2>
        <form onSubmit={handleOldLearnSubmit}>
          <div className="mb-4">
            <label className="inline-block text-sm font-medium text-slate-700 dark:text-white mb-2">Old School</label>
            <Input
              type="text"
              name="old_school"
              value={oldLearnForm.old_school}
              onChange={(e) => setOldLearnForm({ ...oldLearnForm, old_school: e.target.value })}
              placeholder="Enter old school"
            />
          </div>
          <div className="mb-4">
            <label className="inline-block text-sm font-medium text-slate-700 dark:text-white mb-2">Address</label>
            <Input
              type="text"
              name="address"
              value={oldLearnForm.address}
              onChange={(e) => setOldLearnForm({ ...oldLearnForm, address: e.target.value })}
              placeholder="Enter address"
            />
          </div>
          <div className="mb-4">
            <label className="inline-block text-sm font-medium text-slate-700 dark:text-white mb-2">Language</label>
            <Input
              type="text"
              name="language"
              value={oldLearnForm.language}
              onChange={(e) => setOldLearnForm({ ...oldLearnForm, language: e.target.value })}
              placeholder="Enter language"
            />
          </div>
          <div className="mb-4">
            <label className="inline-block text-sm font-medium text-slate-700 dark:text-white mb-2">Favorite Lessons</label>
            <Input
              type="text"
              name="fav_lessons"
              value={oldLearnForm.fav_lessons}
              onChange={(e) => setOldLearnForm({ ...oldLearnForm, fav_lessons: e.target.value })}
              placeholder="Enter favorite lessons"
            />
          </div>
          <Button variant="primary" size="rg" type="submit">
            Save Old Learning Data
          </Button>
        </form>
        {oldLearnMessage && <p className="mt-2 text-green-500">{oldLearnMessage}</p>}
      </div>

      {/* File Upload Form */}
      <div className="max-w-3xl mx-auto bg-white rounded shadow p-6">
        <h2 className="text-xl font-bold mb-5">File Upload</h2>
        <form onSubmit={handleFileUpload}>
          <div className="mb-4">
            <label className="inline-block text-sm font-medium text-slate-700 dark:text-white mb-2">Select File</label>
            <File onChange={(e) => setFile(e.target.files[0])} />
          </div>
          <div className="mb-4">
            <label className="inline-block text-sm font-medium text-slate-700 dark:text-white mb-2">File Type</label>
            <Select
              value={fileType}
              onChange={(e) => setFileType(e.target.value)}
              placeholder="Select file type"
            >
              <Select.Option value="">Select file type</Select.Option>
              <Select.Option value="photo">Photo</Select.Option>
              <Select.Option value="passport">Passport</Select.Option>
              <Select.Option value="certificate">Certificate</Select.Option>
              <Select.Option value="transcript">Transcript</Select.Option>
              <Select.Option value="others">Others</Select.Option>
            </Select>
          </div>
          <Button variant="primary" size="rg" type="submit">
            Upload File
          </Button>
        </form>
        {fileUploadMessage && <p className="mt-2 text-green-500">{fileUploadMessage}</p>}
      </div>
    </div>
  );
};

export default StudentDashboard;

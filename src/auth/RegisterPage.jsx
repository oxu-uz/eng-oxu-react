import React, { useState } from "react";
import { register } from "../services/AuthService";
import { Link, useNavigate } from "react-router-dom";
import Input from "../components/Input";
import Button from "../components/Button";

const RegisterPage = () => {
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [successMsg, setSuccessMsg] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setSuccessMsg("");
    try {
      // Register is for students only.
      const token = await register(fullName, phone, password);
      const userData = { token, role: "student" };
      localStorage.setItem("user", JSON.stringify(userData));
      setSuccessMsg("Registration successful! Redirecting...");
      // Redirect after a short delay
      setTimeout(() => navigate("/"), 1500);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gray-100">
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded w-full max-w-md">
        {/* <img className="h-[100px] m-5" src="/aiu_logo_blue.svg" alt="Logo" /> */}
        <h2 className="text-xl font-bold mb-6 text-center">Register as a Student</h2>
        {error && <p className="text-red-500 mb-4 text-center">{error}</p>}
        {successMsg && <p className="text-green-500 mb-4 text-center">{successMsg}</p>}

        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Full Name</label>
          <Input
            type="text"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            placeholder="Enter full name"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Phone</label>
          <Input
            type="text"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="Enter phone number"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Password</label>
          <Input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter password"
          />
        </div>

        <Button size="rg" variant="primary" type="submit" className="w-full text-center">
          Register
        </Button>

        <p className="text-center lgn-link js-registration-link mt-4">
          Already have an account?{" "}
          <Link className="text-blue-500 hover:underline" to="/login">
            Login
          </Link>
        </p>
      </form>
      <p className="support-info__text text-sm text-center mt-4">
        If you're having technical issues with registration, please contact us:{" "}
        <a href="mailto:info@oxu.uz" className="text-blue-600 hover:underline">
          info@oxu.uz
        </a>
      </p>
      <Link to='/'>
      <img className="h-[80px] mx-auto mt-4" src="/aiu_logo_blue.svg" alt="Logo" />
      </Link>
    </div>
  );
};

export default RegisterPage;

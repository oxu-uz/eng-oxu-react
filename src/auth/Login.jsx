import React, { useState, useEffect } from "react";
import { login } from "../services/AuthService";
import { Link, useNavigate } from "react-router-dom";
import Input from "../components/Input";
import Button from "../components/Button";
import Select from "../components/Select";

const LoginPage = () => {
  // Using "identifier" so it can represent either a phone or a login
  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");
  const [registerType, setRegisterType] = useState("student"); // Default: student
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  // Clear identifier when registerType changes
  useEffect(() => {
    setIdentifier("");
  }, [registerType]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null); // Reset error

    try {
      const token = await login(identifier, password, registerType);
      const userData = { token, role: registerType };
      localStorage.setItem("user", JSON.stringify(userData));
      console.log("User saved:", userData);
      navigate("/");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gray-100">
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded w-full max-w-md">
        <h2 className="text-xl font-bold mb-6 text-center">Please Login</h2>
        {error && <p className="text-red-500 mb-4 text-center">{error}</p>}

        <div className="mb-4">
          <label className="block text-gray-700 mb-2">
            {registerType === "student" ? "Phone" : "Login"}
          </label>
          <Input
            type="text"
            value={identifier}
            onChange={(e) => setIdentifier(e.target.value)}
            placeholder={registerType === "student" ? "Enter phone number" : "Enter login"}
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

        <div className="mb-4">
          <label className="block text-gray-700 mb-2">User Type</label>
          <Select
            value={registerType}
            onChange={(e) => setRegisterType(e.target.value)}
          >
            <Select.Option value="student">Student</Select.Option>
            <Select.Option value="manager">Manager</Select.Option>
            <Select.Option value="agent">Agent</Select.Option>
            <Select.Option value="admin">Admin</Select.Option>
          </Select>
        </div>

        <Button size="rg" variant="primary" type="submit" className="w-full text-center">
          Login
        </Button>

        <p className="lgn-form__links text-center mt-4">
          <Link className="lgn-link js-registration-link" to="/register">
            Sign up
          </Link>
          <span className="lgn-separator mx-2"></span>
          <a className="lgn-link" href="">
            Forgot password?
          </a>
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

export default LoginPage;

import React, { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";


const Signup = () => {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

const handleSignup = async (e) => {
  e.preventDefault();
  try {
    const res = await axios.post("https://thinkfashion.onrender.com/signup", form);
       toast.success('signup successful!');
    console.log(res.data);
     navigate("/login");
  } catch (err) {
  console.error("Signup error:", err);

  // If server sends back a message like { message: "Email already exists" }
  const message = err.response?.data?.message || "Signup failed!";
  toast.error(message);
}
   
          

  
};

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
      <form onSubmit={handleSignup} className="bg-gray-800 p-8 rounded-lg w-full max-w-sm shadow-lg">
        <h2 className="text-2xl font-bold mb-6 text-center">Sign Up</h2>

        <input
          type="text"
          name="name"
          placeholder="Name"
          value={form.name}
          onChange={handleChange}
          className="w-full p-3 mb-4 rounded bg-gray-700 placeholder-gray-400"
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          className="w-full p-3 mb-4 rounded bg-gray-700 placeholder-gray-400"
          required
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
          className="w-full p-3 mb-4 rounded bg-gray-700 placeholder-gray-400"
          required
        />

        <button type="submit" className="w-full bg-blue-500 hover:bg-blue-600 p-3 rounded font-semibold">
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default Signup;

import { Button } from "@/Components/ui/button";
import { Input } from "@/Components/ui/input";
import { useState } from "react";
import axios from "axios";

export default function Login() {
  const [form, setForm] = useState({ email: "", password: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    try {
      const res = await axios.post("http://localhost:3000/api/login", form);
      localStorage.setItem("token", res.data.token);
      alert("Login successful");
    } catch (err) {
      alert("Login failed");
    }
  };

  return (
    <div className="p-4 max-w-md mx-auto">
      <Input className="mb-2 p-2 w-96 border rounded-md" placeholder="Email" name="email" onChange={handleChange} />
      <Input className="mb-2 p-2 w-96 border rounded-md" type="password" placeholder="Password" name="password" onChange={handleChange} />
      <Button className="p-2 bg-indigo-500 hover:bg-indigo-700 text-white w-full shadow-lg shadow-indigo-500/50" onClick={handleSubmit}>Login</Button>
    </div>
  );
}

import { Button } from "@/Components/ui/button";
import { Input } from "@/Components/ui/input";
import { useState } from "react";
import axios from "axios";

export default function Signup() {
  const [form, setForm] = useState({ name: "", email: "", password: "", role: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    try {
      await axios.post("http://localhost:3000/api/signup", form);
      alert("Signup successful");
    } catch (err) {
      alert("Signup failed");
    }
  };

  return (
    <div className="p-4 max-w-md mx-auto">
      <Input className="mb-2 p-2 w-96 border rounded-md" placeholder="Name" name="name" onChange={handleChange} />
      <Input className="mb-2 p-2 w-96 border rounded-md" placeholder="Email" name="email" onChange={handleChange} />
      <Input className="mb-2 p-2 w-96 border rounded-md" type="password" placeholder="Password" name="password" onChange={handleChange} />
      <Input className="mb-2 p-2 w-96 border rounded-md" placeholder="Role" name="role" onChange={handleChange} />
      <Button className="p-2 bg-indigo-500 hover:bg-indigo-700 text-white w-96 shadow-lg shadow-indigB-500/50" onClick={handleSubmit}>Signup</Button>
    </div>
  );
}

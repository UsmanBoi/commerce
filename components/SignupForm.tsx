'use client';
import { useState } from 'react';

export default function SignupForm() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    firstName: '',
    lastName: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const res = await fetch('/api/signup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    });

    const data = await res.json();
    console.log(data);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex w-[40vw] flex-col space-y-4 border-2 border-black px-10 py-2"
    >
      <input
        type="text"
        name="firstName"
        placeholder="First Name"
        onChange={handleChange}
        className="border border-olive/50"
      />
      <input
        type="text"
        name="lastName"
        placeholder="Last Name"
        onChange={handleChange}
        className="border border-olive/50"
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        onChange={handleChange}
        className="border border-olive/50"
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        onChange={handleChange}
        className="border border-olive/50"
      />
      <button type="submit">Sign Up</button>
    </form>
  );
}

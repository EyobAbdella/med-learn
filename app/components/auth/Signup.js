"use client";
import { useState } from "react";
import { Lock, User, Mail, UserCircle, MapPin, Flag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";

export default function SignupPage() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    first_name: "",
    last_name: "",
    city: "",
    country: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Signup data:", formData);
    // Add your signup logic here
  };

  return (
    <section className='bg-slate-50 min-h-screen flex items-center justify-center p-4'>
      <div className='bg-white border border-slate-100 shadow-inner rounded-xl w-full max-w-md p-8'>
        <div className='text-center mb-8'>
          <h1 className='text-3xl font-semibold text-gray-800 mb-2'>
            Create Account
          </h1>
          <p className='text-gray-600'>Join our medical education platform</p>
        </div>

        <form onSubmit={handleSubmit} className='space-y-4'>
          <div className='grid grid-cols-2 gap-4'>
            <div className='relative'>
              <UserCircle className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5' />
              <Input
                name='first_name'
                placeholder='First Name'
                value={formData.first_name}
                onChange={handleChange}
                className='pl-10'
                required
              />
            </div>
            <div className='relative'>
              <UserCircle className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5' />
              <Input
                name='last_name'
                placeholder='Last Name'
                value={formData.last_name}
                onChange={handleChange}
                className='pl-10'
                required
              />
            </div>
          </div>

          <div className='relative'>
            <User className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5' />
            <Input
              name='username'
              placeholder='Username'
              value={formData.username}
              onChange={handleChange}
              className='pl-10'
              required
            />
          </div>

          <div className='relative'>
            <Mail className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5' />
            <Input
              type='email'
              name='email'
              placeholder='Email'
              value={formData.email}
              onChange={handleChange}
              className='pl-10'
              required
            />
          </div>

          <div className='relative'>
            <Lock className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5' />
            <Input
              type='password'
              name='password'
              placeholder='Password'
              value={formData.password}
              onChange={handleChange}
              className='pl-10'
              required
            />
          </div>

          <div className='grid grid-cols-2 gap-4'>
            <div className='relative'>
              <MapPin className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5' />
              <Input
                name='city'
                placeholder='City'
                value={formData.city}
                onChange={handleChange}
                className='pl-10'
                required
              />
            </div>
            <div className='relative'>
              <Flag className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5' />
              <Input
                name='country'
                placeholder='Country'
                value={formData.country}
                onChange={handleChange}
                className='pl-10'
                required
              />
            </div>
          </div>

          <Button
            type='submit'
            className='w-full bg-[#04212C] hover:bg-[#04212ce7] duration-200'>
            Sign Up
          </Button>

          <p className='text-center text-sm text-gray-600 mt-4'>
            Already have an account?{" "}
            <Link href='/login' className='text-blue-600 hover:underline'>
              Log in
            </Link>
          </p>
        </form>
      </div>
    </section>
  );
}

"use client";
import { useState } from "react";
import { User, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";

export default function LoginPage() {
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login data:", credentials);
    // Add your login logic here
  };

  return (
    <section className='bg-slate-50 min-h-screen flex items-center justify-center p-4'>
      <div className='bg-white border border-slate-100 shadow-inner rounded-xl w-full max-w-md p-8'>
        <div className='text-center mb-8'>
          <h1 className='text-3xl font-semibold text-gray-800 mb-2'>
            Welcome Back
          </h1>
          <p className='text-gray-600'>
            Log in to your medical education account
          </p>
        </div>

        <form onSubmit={handleSubmit} className='space-y-4'>
          <div className='relative'>
            <User className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5' />
            <Input
              name='username'
              placeholder='Username'
              value={credentials.username}
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
              value={credentials.password}
              onChange={handleChange}
              className='pl-10'
              required
            />
          </div>

          <div className='flex justify-end'>
            <Link
              href='/forgot-password'
              className='text-sm text-blue-600 hover:underline'>
              Forgot password?
            </Link>
          </div>

          <Button
            type='submit'
            className='w-full bg-[#04212C] hover:bg-[#04212cdf]'>
            Log In
          </Button>

          <p className='text-center text-sm text-gray-600 mt-4'>
            Don't have an account?{" "}
            <Link href='/signup' className='text-blue-600 hover:underline'>
              Sign up
            </Link>
          </p>
        </form>
      </div>
    </section>
  );
}

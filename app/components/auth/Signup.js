"use client";

import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { registerUser } from "@/lib/utils";

import {
  Lock,
  User,
  Mail,
  UserCircle,
  MapPin,
  Flag,
  IdCard,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";

export default function SignupPage({ title, subtitle, role }) {
  const router = useRouter();

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    first_name: "",
    last_name: "",
    scfhs_id: "",
    city: "",
    country: "",
  });

  const mutation = useMutation({
    mutationFn: () => registerUser(role, formData),
    onSuccess: () => router.push(`/dashboard/${role}`),
    onError: (err) => {
      console.error(err);
    },
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    mutation.mutate();
  };

  return (
    <section className='bg-slate-50 min-h-screen flex items-center justify-center p-4'>
      <div className='bg-white border border-slate-100 shadow-inner rounded-xl w-full max-w-md p-8'>
        <div className='text-center mb-8'>
          <h1 className='text-3xl font-semibold text-gray-800 mb-2'>{title}</h1>
          <p className='text-gray-600'>{subtitle}</p>
        </div>

        <form onSubmit={handleSubmit} className='space-y-4'>
          <div className='grid grid-cols-2 gap-4'>
            <InputWithIcon
              icon={UserCircle}
              name='first_name'
              value={formData.first_name}
              onChange={handleChange}
              placeholder='First Name'
            />
            <InputWithIcon
              icon={UserCircle}
              name='last_name'
              value={formData.last_name}
              onChange={handleChange}
              placeholder='Last Name'
            />
          </div>

          <InputWithIcon
            icon={IdCard}
            name='scfhs_id'
            value={formData.scfhs_id}
            onChange={handleChange}
            placeholder='SCFHS Number'
          />
          <InputWithIcon
            icon={User}
            name='username'
            value={formData.username}
            onChange={handleChange}
            placeholder='Username'
          />
          <InputWithIcon
            icon={Mail}
            type='email'
            name='email'
            value={formData.email}
            onChange={handleChange}
            placeholder='Email'
          />
          <InputWithIcon
            icon={Lock}
            type='password'
            name='password'
            value={formData.password}
            onChange={handleChange}
            placeholder='Password'
          />

          <div className='grid grid-cols-2 gap-4'>
            <InputWithIcon
              icon={MapPin}
              name='city'
              value={formData.city}
              onChange={handleChange}
              placeholder='City'
            />
            <InputWithIcon
              icon={Flag}
              name='country'
              value={formData.country}
              onChange={handleChange}
              placeholder='Country'
            />
          </div>

          {mutation.isError && (
            <p className='text-red-600 text-sm'>{mutation.error.message}</p>
          )}

          <Button
            type='submit'
            className='w-full bg-[#04212C] hover:bg-[#04212ce7] duration-200'
            disabled={mutation.isPending}>
            {mutation.isPending ? "Signing up..." : "Sign Up"}
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

function InputWithIcon({ icon: Icon, ...props }) {
  return (
    <div className='relative'>
      <Icon className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5' />
      <Input className='pl-10' required {...props} />
    </div>
  );
}

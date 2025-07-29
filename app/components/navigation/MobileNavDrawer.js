"use client";

import React, { useRef } from "react";
import {
  Home,
  Tag,
  BookOpen,
  Newspaper,
  Users,
  Search,
  LogIn,
  UserPlus,
} from "lucide-react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
} from "@/components/ui/sheet";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const navItems = [
  { title: "Home", icon: Home, url: "#" },
  { title: "Courses", icon: BookOpen, url: "#" },
  { title: "Limited Time Offer", icon: Tag, url: "#" },
  { title: "Blog", icon: Newspaper, url: "#" },
  { title: "About Us", icon: Users, url: "#" },
];

export default function MobileNavDrawer({ open, onClose }) {
  const inputRef = useRef(null);
  const [search, setSearch] = React.useState("");

  return (
    <Sheet open={open} onOpenChange={onClose}>
      <SheetContent side='left' className='w-80 max-w-[80vw] p-0'>
        <SheetHeader className='border-b px-4 py-3'>
          <div className='relative w-64 flex-1'>
            <span className='absolute left-3 top-1/2 -translate-y-1/2 text-gray-400'>
              <Search size={20} />
            </span>
            <Input
              ref={inputRef}
              type='text'
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder='Search...'
              className='pl-10 h-10 border-b !focus:border-none !active:border-none !ring-0 !focus:ring-0 !outline-none !focus:outline-none shadow-none bg-transparent'
            />
          </div>
        </SheetHeader>
        <nav className='flex-1 px-2 py-4 space-y-2'>
          {navItems.map((item) => (
            <SheetClose asChild key={item.title}>
              <a
                href={item.url}
                className='flex items-center gap-3 px-3 py-2 rounded-md hover:bg-gray-100 transition'
                onClick={onClose}>
                <item.icon size={22} />
                <span>{item.title}</span>
              </a>
            </SheetClose>
          ))}
        </nav>
        <div className='border-t px-4 py-4 bg-white flex flex-col gap-3'>
          <Button
            variant='outline'
            className='w-full flex items-center gap-2 justify-center font-medium'>
            <LogIn size={18} />
            Login
          </Button>
          <Button
            variant='outline'
            className='w-full flex items-center gap-2 justify-center font-medium'>
            <UserPlus size={18} />
            Register
          </Button>
          <Button
            variant='outline'
            className='w-full flex items-center gap-2 justify-center font-medium'>
            <Image
              src='/saudi-arabia.png'
              alt='Arabic'
              width={22}
              height={16}
              className='inline-block'
            />
            <span className='font-semibold'>العربية</span>
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  );
}

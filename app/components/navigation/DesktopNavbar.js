"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Globe, Search, ShoppingCart } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import Link from "next/link";

export default function DesktopNavbar() {
  const inputRef = useRef(null);
  const [search, setSearch] = useState("");
  const [lang, setLang] = useState("en");

  useEffect(() => {
    const storedLang = localStorage.getItem("lang") || "en";
    setLang(storedLang);
    document.documentElement.setAttribute("lang", storedLang);
    document.documentElement.setAttribute(
      "dir",
      storedLang === "ar" ? "rtl" : "ltr"
    );
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
  };

  const changeLanguage = (selectedLang) => {
    localStorage.setItem("lang", selectedLang);
    setLang(selectedLang);
    document.documentElement.setAttribute("lang", selectedLang);
    document.documentElement.setAttribute(
      "dir",
      selectedLang === "ar" ? "rtl" : "ltr"
    );
    location.reload();
  };

  const languageLabel = lang === "ar" ? "🇸🇦 AR" : "🇺🇸 EN";

  return (
    <nav className='px-4 py-2 flex items-center justify-between'>
      {/* Logo */}
      <div className='flex items-center'>
        <Image src='/logo.png' width={100} height={100} alt='logo' />
        <span
          className='ml-0.5 font-semibold text-xl'
          style={{ fontFamily: '"Times New Roman", Times, serif' }}>
          Mulhim
        </span>
      </div>

      {/* Center Menu */}
      <ul className='flex items-center space-x-8 list-none m-0 p-0'>
        <li>Home</li>
        <li>Course</li>
        <li>
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Explorer</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className='flex flex-col gap-2 p-1 min-w-40'>
                    <li>
                      <NavigationMenuLink asChild>
                        <a
                          href='#'
                          className='block px-3 py-1 rounded hover:bg-gray-100 transition text-gray-700'>
                          Limited Time Offer
                        </a>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <a
                          href='#'
                          className='block px-3 py-1 rounded hover:bg-gray-100 transition text-gray-700'>
                          Blog
                        </a>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <a
                          href='#'
                          className='block px-3 py-1 rounded hover:bg-gray-100 transition text-gray-700'>
                          About Us
                        </a>
                      </NavigationMenuLink>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </li>
        <li>
          <Dialog>
            <form>
              <DialogTrigger asChild>
                <Button variant='outline' className='px-4'>
                  <Search />
                  <Label>Search Courses</Label>
                </Button>
              </DialogTrigger>
              <DialogContent className='sm:max-w-[425px]'>
                <div className='grid gap-4'>
                  <div className='grid gap-3'>
                    <Label>Search Courses</Label>
                    <Input defaultValue='Infection Threats' />
                  </div>
                </div>
              </DialogContent>
            </form>
          </Dialog>
        </li>
      </ul>

      {/* Right Side: Cart, Auth, Language */}
      <div className='flex h-5 items-center space-x-4 text-sm'>
        {/* Cart */}
        <div className='relative'>
          <ShoppingCart size={24} className='text-gray-700' />
          <span className='absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full px-1.5 py-0.5'>
            0
          </span>
        </div>
        <Separator orientation='vertical' />
        <Button variant='outline'>
          <Link href='/student/login'>Login</Link>
        </Button>
        <Separator orientation='vertical' />
        <Button>
          <Link href='/student/signup'>Register</Link>
        </Button>
        <Separator orientation='vertical' />

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant='outline' size='sm' className='px-2'>
              {languageLabel}
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align='end' className='w-24 text-center'>
            <DropdownMenuItem onClick={() => changeLanguage("en")}>
              🇺🇸 EN
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => changeLanguage("ar")}>
              🇸🇦 AR
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </nav>
  );
}

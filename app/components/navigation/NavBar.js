"use client";

import React, { useState } from "react";
import MobileNavDrawer from "./MobileNavDrawer";
import DesktopNavbar from "./DesktopNavbar";
import Image from "next/image";
import { AlignJustify, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* Mobile Navbar */}
      <nav className='block md:hidden px-2.5 py-1'>
        <div className='flex items-center justify-between min-h-14 px-4 py-2 shadow-lg rounded-lg'>
          <div className='flex items-center'>
            <Image
              src='/logo.png'
              alt='Logo'
              width={50}
              height={50}
              className='rounded-full'
            />
          </div>
          <div className='flex items-center gap-5'>
            <div className='relative'>
              <ShoppingCart size={24} className='text-gray-700' />
              <span className='absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full px-1.5 py-0.5'>
                0
              </span>
            </div>
            <Button
              variant='ghost'
              size='icon'
              onClick={() => setMenuOpen(true)}
              aria-label='Open menu'
              className='p-0'
              disabled={menuOpen}>
              <AlignJustify className='text-gray-700 !w-7 !h-7' />
            </Button>
          </div>
        </div>
        <MobileNavDrawer open={menuOpen} onClose={() => setMenuOpen(false)} />
      </nav>
      {/* Desktop Navbar */}
      <div className='px-4 hidden md:block py-2'>
        <DesktopNavbar />
      </div>
    </>
  );
};

export default NavBar;

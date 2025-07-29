"use client";

import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";

export default function CourseSearchFilter() {
  const [searchTerm, setSearchTerm] = useState("");
  const [priceRange, setPriceRange] = useState("");
  const [cmeHours, setCmeHours] = useState("");
  const [sortBy, setSortBy] = useState("newest");

  const handleSearch = () => {
    console.log({ searchTerm, priceRange, cmeHours, sortBy });
  };

  return (
    <div className='rounded-xl bg-[#fdfdfd] shadow-[25px_25px_50px_#ababab,-25px_-25px_50px_#ffffff] max-w-5xl mx-auto p-4 my-10'>
      {/* Search Input */}
      <div className='flex flex-col sm:flex-row items-stretch gap-2'>
        <Input
          type='text'
          placeholder='Search courses by keyword...'
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className='w-full'
        />
        <Button
          onClick={handleSearch}
          className='flex items-center justify-center gap-2 w-full sm:w-auto'>
          <Search className='w-4 h-4' />
          Search
        </Button>
      </div>

      {/* Filter Section */}
      <div className='p-4 mb-4'>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
          {/* Price Range Dropdown */}
          <div>
            <label className='block text-sm font-medium text-gray-700'>
              Price Range
            </label>
            <Select value={priceRange} onValueChange={setPriceRange}>
              <SelectTrigger className='mt-1 w-full'>
                <SelectValue placeholder='Any Price' />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value='0-50'>$0 - $50</SelectItem>
                <SelectItem value='50-100'>$50 - $100</SelectItem>
                <SelectItem value='100+'>$100+</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* CME Hours Dropdown */}
          <div>
            <label className='block text-sm font-medium text-gray-700'>
              CME Hours
            </label>
            <Select value={cmeHours} onValueChange={setCmeHours}>
              <SelectTrigger className='mt-1 w-full'>
                <SelectValue placeholder='Any Hours' />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value='1-5'>1-5 Hours</SelectItem>
                <SelectItem value='5-10'>5-10 Hours</SelectItem>
                <SelectItem value='10+'>10+ Hours</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Sort By Dropdown */}
          <div>
            <label className='block text-sm font-medium text-gray-700'>
              Sort by
            </label>
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className='mt-1 w-full'>
                <SelectValue placeholder='Newest' />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value='newest'>Newest</SelectItem>
                <SelectItem value='popular'>Popular</SelectItem>
                <SelectItem value='price'>Price</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>
    </div>
  );
}

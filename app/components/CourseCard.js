"use client";

import { useState } from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { Flame, ShoppingCart } from "lucide-react";
import { cn } from "@/lib/utils";

export default function CourseCard({
  title = "Concepts of Infection and Applied Prevention...",
  description = "This accredited course offers 4 CME credit hours and is officially recognized by the Saudi Commission for Health Specialties (SCFHS)....",
  price = 49.99,
  cmeHours = 5,
  imageUrl = "/6830b81142f76_5.jpg",
}) {
  const [inCart, setInCart] = useState(false);

  const handleAddToCart = () => {
    setInCart(true);
    // Add to cart logic here (e.g., API call)
    console.log(`${title} added to cart!`);
    setTimeout(() => setInCart(false), 2000); // Reset after 2 seconds
  };

  return (
    <Card className='w-full max-w-72 overflow-hidden shadow-lg hover:shadow-xl py-0 duration-500 gap-2 hover:-translate-y-5 transition-transform'>
      {/* Card Header with Image */}
      <CardHeader className='p-0'>
        <Image
          src={imageUrl}
          alt={title}
          width={400}
          height={200}
          className='w-full h-48 object-cover'
        />
      </CardHeader>

      {/* Card Content */}
      <CardContent className='px-4'>
        <h3 className='text-lg font-semibold mb-2'>{title}</h3>
        <p className='text-gray-600 text-sm mb-2 line-clamp-3'>{description}</p>
        <div className='flex items-center justify-between mb-2 mt-1'>
          <div className='flex justify-between items-center'>
            <span className='text-lg font-semibold text-[#066158]'>
              ${price.toFixed(2)}
            </span>
          </div>
          {/* <Badge className='h-6 min-w-7  px-1 font-mono tabular-nums'>
            ${price.toFixed(2)}
          </Badge> */}

          <Badge variant='secondary'>CME: 5 hrs</Badge>
        </div>
      </CardContent>

      {/* Card Footer with Add to Cart Button */}
      <CardFooter className='p-4 pt-0'>
        <Button
          onClick={handleAddToCart}
          className='w-full h-11 transition-colors'
          disabled={inCart}>
          {inCart ? "Added!" : "Add to Cart"}
          <ShoppingCart size={24} />
        </Button>
      </CardFooter>
    </Card>
  );
}

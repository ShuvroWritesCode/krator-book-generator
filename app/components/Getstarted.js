"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import { getUserSession } from "@/session";
import Image from "next/image";


const Getstarted = async () => {
  const router = useRouter();
  const user = await getUserSession();
  var name = "Richard";

  if (user) {
    name = user.name;
  }

  return (
    <div className="bg-primary max-w-full h-screen max-h-full flex flex-col justify-start items-center py-20 space-y-6">
      <h4 className="font-bold text-3xl">
        🎉Hi {name}, what exactly do you have in mind?
      </h4>
      <div className="text-center">
        Generate Book Designs, Book Covers & Illustrations with
        <br /> AI Technology!
      </div>
      <div className="pb-4">Click below to get started</div>
      <Link
        className="bg-btn-blue lg:w-1/4 md:w-1/3 sm:w-full h-24 rounded-lg pl-8 text-black"
        href="/writebookcontent"
      >
        <div className="flex flex-col h-full justify-center">
          <div className="flex flex-row items-center">
          <div className="relative w-12 h-12"> 
              <Image 
                src="/images/logo1.png" 
                alt="Logo" 
                layout="fill" 
                objectFit="contain" 
                className="w-full h-full" 
              />
            </div>
            <div className="flex flex-col pl-4 items-start">
              <div className="font-bold ">Write a book</div>
              <div className="text-sm opacity-70">
                Explore feature by clicking it
              </div>
            </div>
          </div>
        </div>
      </Link>
      <Link
        className="bg-btn-green lg:w-1/4 md:w-1/3 sm:w-full h-24 rounded-lg pl-8 text-black"
        href="/bookcoverdesign"
      >
        <div className="flex flex-col h-full justify-center">
          <div className="flex flex-row items-center">
          <div className="relative w-12 h-12"> 
              <Image 
                src="/images/logo1.png" 
                alt="Logo" 
                layout="fill" 
                objectFit="contain" 
                className="w-full h-full" 
              />
            </div>
            <div className="flex flex-col pl-4 items-start">
              <div className="font-bold">Design a Book Cover</div>
              <div className="text-sm opacity-70">
                Explore feature by clicking it
              </div>
            </div>
          </div>
        </div>
      </Link>

      <Link
        className="bg-btn-purple lg:w-1/4 md:w-1/3 sm:w-full h-24 rounded-lg pl-8 text-black"
        href="/createillustration"
      >
        <div className="flex flex-col h-full justify-center">
          <div className="flex flex-row items-center">
          <div className="relative w-12 h-12"> 
              <Image 
                src="/images/logo2.png" 
                alt="Logo" 
                layout="fill" 
                objectFit="contain" 
                className="w-full h-full" 
              />
            </div>
            <div className="flex flex-col pl-4 items-start">
              <div className="font-bold">Create Illustrations</div>
              <div className="text-sm opacity-70">
                Explore feature by clicking it
              </div>
            </div>
          </div>
        </div>
      </Link>

      <Link
        className="bg-btn-orange lg:w-1/4 md:w-1/3 sm:w-full h-24 rounded-lg pl-8 text-black"
        href="/createillustration"
      >
        <div className="flex flex-col h-full justify-center">
          <div className="flex flex-row items-center">
          <div className="relative w-12 h-12"> 
              <Image 
                src="/images/logo2.png" 
                alt="Logo" 
                layout="fill" 
                objectFit="contain" 
                className="w-full h-full" 
              />
            </div>
            <div className="flex flex-col pl-4 items-start">
              <div className="font-bold">Design a Logo</div>
              <div className="text-sm opacity-70">
                Explore feature by clicking it
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Getstarted;

"use client";
import React from "react";
import Listing from "@/components/listing/Table";

export default function Lists() {
  return (
    <div className="h-screen w-screen flex md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
      <div className=" p-4 max-w-7xl  mx-auto relative z-10  w-full pt-20 md:pt-0">
        <h1 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
          Listing
        </h1>
        <p className="mt-4 font-normal text-base text-neutral-300 max-w-lg text-center mx-auto">
          Disclaimer: This is very tentative. Only verified facilities are more
          likely to not have drastic changes in schedule, meanwhile other
          facilities may make last minute schedule changes and it may not get
          reflected on the site
        </p>

        <div className="mt-12 flex items-center flex-col lg:flex-row md:flex-row justify-center gap-7 ">
          <Listing />
        </div>
      </div>
    </div>
  );
}
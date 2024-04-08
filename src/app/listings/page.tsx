"use client";
import React from "react";
import { useState, useEffect } from "react";
// import Listing from "@/components/listing/Table";
import { DataTable } from "./data-table";
import { columns } from "./columns";
// import { availableDoctors } from "@/lib/data";

export default function Lists() {
  const [listing, setListing] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      console.log("fetch exectuted");
      const response = await fetch("./api/data");
      const data = await response.json();
      console.log(`this is the data: ${JSON.stringify(data, null, 2)}`);
      setListing(data.results);
      setLoading(false);
    };
    fetchData();
  }, []);

  if (loading) {
    return <div>loading....</div>;
  }

  return (
    <div className="h-screen w-screen flex justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-y-auto overflow-x-hidden">
      <div className=" p-2 max-w-7xl  mx-auto relative z-10  w-full pt-12 md:pt-20">
        <h1 className="text-4xl md:text-6xl leading-16 font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
          Listing
        </h1>
        <p className="mt-4 font-normal text-base text-neutral-300 max-w-lg text-center mx-auto">
          Disclaimer: This is very tentative. Only verified facilities are more
          likely to not have drastic changes in schedule, meanwhile other
          facilities may make last minute schedule changes and it may not get
          reflected on the site
        </p>

        <div className="mt-12 flex items-center flex-col lg:flex-row md:flex-row justify-center gap-7 ">
          <DataTable columns={columns} data={listing} />
        </div>
      </div>
    </div>
  );
}

"use client";
import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

// import Link from "next/link";
// import { Button } from "@/components/ui/button";

export default function Lists() {
    // use state hooks + something
  return (
    <div className="h-screen bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
      <div>
        <div className=" p-4 max-w-7xl  mx-auto relative z-10  w-full pt-20 md:pt-0">
          <h1 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
            Listing
          </h1>
          <p className="mt-4 font-normal text-base text-neutral-300 max-w-lg text-center mx-auto">
            Disclaimer: This is very tentative. Only verified facilities are
            more likely to not have drastic changes in schedule, meanwhile other
            facilities may make alst minute schedule changes and it may not get
            reflected on the site
          </p>

          <div className="mt-12 flex items-center flex-row-2 sm:flex-col justify-center gap-7 text-white">
            <Table>
              <TableCaption>Updated list for today</TableCaption>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[100px] text-white">
                    ID
                  </TableHead>
                  <TableHead className="text-white">Doctor</TableHead>
                  <TableHead className="text-white">Specialisation</TableHead>
                  <TableHead className="text-right text-white">
                    Facility
                  </TableHead>
                  <TableHead className="text-white">Address</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {/* Mapping function will be here */}
                <TableRow>
                  <TableCell className="font-medium">#1</TableCell>
                  <TableCell>Arghya</TableCell>
                  <TableCell>Mathematics</TableCell>
                  <TableCell className="text-right">Some IIT</TableCell>
                  <TableCell className="text-right">[Link]</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">#2</TableCell>
                  <TableCell>Nauf</TableCell>
                  <TableCell>Archives</TableCell>
                  <TableCell className="text-right">Fuckin Goverment</TableCell>
                  <TableCell className="text-right">[Link]</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">#3</TableCell>
                  <TableCell>Elgius</TableCell>
                  <TableCell>Hustling</TableCell>
                  <TableCell className="text-right">Gonna get fired soon lol</TableCell>
                  <TableCell className="text-right">[Link]</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </div>
      </div>
    </div>
  );
}

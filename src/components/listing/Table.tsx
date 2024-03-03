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

import { availableDoctors } from "@/lib/data";

const Listing = () => {
  return (
    <div className="mt-12 flex items-center flex-row-2 sm:flex-col justify-center gap-3 text-white">
      <Table>
        <TableCaption>Updated list for today</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="text-white">Doctor</TableHead>
            <TableHead className="text-white">Specialization</TableHead>
            <TableHead className="text-right text-white">Facility</TableHead>
            <TableHead className="text-white">Address</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {/* Mapping function will be here */}
          {availableDoctors.map((doctor, index) => (
            <TableRow key={index}>
              <TableCell>{doctor.name}</TableCell>
              <TableCell>{doctor.field}</TableCell>
              <TableCell className="text-right">{doctor.clinic}</TableCell>
              <TableCell className="text-right">{doctor.address}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default Listing;

// name: String;
// field: String;
// clinic: String;
// address?: String;

{
  /* <Table>
{avalableDoctors.map((doctor, index) => (
  <TableRow key={index}>
    <TableCell>{doctor.name}</TableCell>
    <TableCell>{doctor.field}</TableCell>
    <TableCell className="text-right">{doctor.clinic}</TableCell>
    <TableCell className="text-right">[Link]</TableCell>
  </TableRow>
))}
</Table> */
}

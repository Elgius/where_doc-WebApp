"use client"

import React from 'react'
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table";

const Listing = () => {
  return (
    <div className="mt-12 flex items-center flex-row-2 sm:flex-col justify-center gap-3 text-white">
    <Table>
      <TableCaption>Updated list for today</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px] text-white">ID</TableHead>
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
          <TableCell className="text-right">
            Gonna get fired soon lol
          </TableCell>
          <TableCell className="text-right">[Link]</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  </div>
  )
}

export default Listing
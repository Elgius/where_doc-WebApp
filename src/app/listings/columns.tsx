"use client";

import { ColumnDef } from "@tanstack/react-table";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
type Doctor = {
  name: String;
  department: String;
  clinic?: String;
  address?: String;
  duty: String;
  //   room: String;
};

export const columns: ColumnDef<Doctor>[] = [
  {
    accessorKey: "name",
    cell: (info) => info.getValue(),
    header: "Name",
    filterFn: "fuzzy",
  },
  {
    accessorKey: "department",
    cell: (info) => info.getValue(),
    header: "Department",
    filterFn: "fuzzy",
  },
  {
    accessorKey: "clinic",
    cell: (info) => info.getValue(),
    header: "Clinic",
    filterFn: "fuzzy",
  },
  {
    accessorKey: "address",
    cell: (info) => info.getValue(),
    header: "Address",
    filterFn: "fuzzy",
  },
  {
    accessorKey: "duty",
    cell: (info) => info.getValue(),
    header: "Timings",
    filterFn: "fuzzy",
  },
];

"use client";

import { ColumnDef } from "@tanstack/react-table";
import Link from "next/link";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
type Doctor = {
  name: String;
  field: String;
  clinic: String;
  address?: String;
  //   shift: String;
  //   room: String;
};

export const columns: ColumnDef<Doctor>[] = [
  {
    accessorKey: "name",
    cell: (info) => (
      <Link href={`/doctors/${info.row.original.name}`}>
        {info.getValue() as string}
      </Link>
    ),
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
];

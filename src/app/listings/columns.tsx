"use client";

import { ColumnDef } from "@tanstack/react-table";

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
    cell: (info) => info.getValue(),
    header: "Name",
    filterFn: "fuzzy",
  },
  {
    accessorKey: "field",
    cell: (info) => info.getValue(),
    header: "Field",
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

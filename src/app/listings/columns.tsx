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
    header: "Name",
  },
  {
    accessorKey: "field",
    header: "Field",
  },
  {
    accessorKey: "clinic",
    header: "Clinic",
  },
  {
    accessorKey: "address",
    header: "Address",
  },
];

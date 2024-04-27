"use client";

import { useState, useEffect } from "react";
import { availableDoctors } from "@/lib/data";
import type { Doctor } from "@/lib/data";
import Link from "next/link";
import { convertNametoURLParam } from "@/lib/utils";
import { BadgeCheck, Home, ChevronRight } from "lucide-react";

function Data({ params }: { params: { name: string } }) {
  const [doctor, setDoctor] = useState<Doctor>({
    name: '',
    field: '',
    clinic: '',
    address: ''
    //   shift: '',
    //   room: ''
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const findDoc = () => {
      availableDoctors.filter((data: Doctor, index: Number) => {
        if (convertNametoURLParam(data.name) === params.name){
          console.log(data);
          setDoctor(data);
          setLoading(false);
          return data;
        }
      })
    }

    if (doctor.name === "") findDoc();
  }, [doctor, params])

  if (loading) {
    return <div>loading....</div>;
  }

  return (
    <div className="relative w-full bg-white">
      <div className="mx-auto max-w-7xl lg:px-8">
        {/* Some sort of Navigation */}
        <div className="mt-12 flex gap-2 my-auto">
          <Home className="size-5 hover:cursor-pointer" />
          <ChevronRight className="" />
          <Link href={"/listings"} className="hover:cursor-pointer">Doctors</Link>
          <ChevronRight className="" />
          <span>{doctor.name}</span>
        </div>

        <h1 className="mt-14 max-w-4xl text-3xl font-bold tracking-tight text-black md:text-3xl lg:text-5xl">{doctor.name}</h1>

        <div className="mt-5 p-5 flex flex-col gap-3 max-w-2xl text-white bg-gray-500 rounded-2xl">
          <div><span className="font-bold">Field: </span>{doctor.field}</div>
          <div><span className="font-bold">Clinic: </span>{doctor.clinic}</div>
        </div>

        <div className="mt-8 flex flex-col gap-2 max-w-2xl">
          <h2 className="font-bold text-2xl">About Doctor:</h2>
          <p className="text-justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent commodo tristique odio sed eleifend. Praesent hendrerit vulputate bibendum. Proin pellentesque quam eu velit luctus, quis sagittis neque lobortis. Nullam maximus mattis nisl. Praesent velit velit, vestibulum sed rutrum ac, interdum at diam. Sed varius nisi ex, id tincidunt justo vehicula non. Nunc turpis nisl, blandit vitae bibendum ut, porta at augue. Ut porttitor arcu malesuada nulla convallis faucibus. Suspendisse nec est eget felis blandit dictum. Fusce sodales imperdiet imperdiet. Etiam ac finibus ante, id pharetra sem. Pellentesque eget pharetra leo. Vivamus purus felis, mattis ultrices feugiat id, posuere eu dolor. Vivamus et arcu vel sem aliquam lacinia.</p>
        </div>

        <div className="mt-8 flex flex-col gap-2 max-w-2xl">
          <h2 className="font-bold text-2xl">Reviews from Patients:</h2>
          {/* Carousel here */}
        </div>

      </div>
    </div>
  );
}

export default Data;

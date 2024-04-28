"use client";

import { useState, useEffect } from "react";
import { availableDoctors } from "@/lib/data";
import type { Doctor } from "@/lib/data";
import Link from "next/link";
import Image from "next/image";
import { convertNametoURLParam } from "@/lib/utils";
import { BadgeCheck, Home, ChevronRight, Verified, Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

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

  const reviews = [
    {
      patient: "Anonymous",
      verified: true,
      stars: 4,
      review: "10/10 would get sick just to consult this doctor!"
    },
    {
      patient: "Anonymous",
      verified: true,
      stars: 3,
      review: "Really great and kind doctor."
    }
  ]

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
        <div className="mt-12 flex gap-2 my-auto items-center justify-start">
          <Link href={"/"}><Home size={18} className="hover:cursor-pointer" /></Link>
          <ChevronRight />
          <Link href={"/listings"} className="hover:cursor-pointer hover:underline hover:text-gray-400 transition-all duration-200">Doctors</Link>
          <ChevronRight />
          <span>{doctor.name}</span>
        </div>

        <div className="flex flex-col md:flex-row-reverse gap-1 md:gap-7">
          {/* Right Side Below */}
          <div className="mt-14 mx-auto items-center drop-shadow-lg">
            <div className="p-4 py-14 bg-gray-500 rounded-xl">
              <Image alt="pp" src="/Caduceus.png" width={250} height={300} />
            </div>
            {/* <div className="text-center mx-auto italic opacity-20">Picture</div> */}
          </div>

          {/* Left side below */}
          <div className="mt-14">
            <h1 className="max-w-4xl text-3xl font-bold tracking-tight text-black md:text-3xl lg:text-5xl">{doctor.name}</h1>

            <div className="mt-5 p-5 flex flex-col gap-3 max-w-2xl text-white bg-gray-500 rounded-2xl">
              <div><span className="font-bold">Field: </span>{doctor.field}</div>
              <div><span className="font-bold">Clinic: </span>{doctor.clinic}</div>
            </div>

            <div className="mt-8 flex flex-col gap-2 max-w-2xl">
              <h2 className="font-bold text-2xl">About Doctor:</h2>
              <p className="text-justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent commodo tristique odio sed eleifend. Praesent hendrerit vulputate bibendum. Proin pellentesque quam eu velit luctus, quis sagittis neque lobortis. Nullam maximus mattis nisl. Praesent velit velit, vestibulum sed rutrum ac, interdum at diam. Sed varius nisi ex, id tincidunt justo vehicula non. Nunc turpis nisl, blandit vitae bibendum ut, porta at augue. Ut porttitor arcu malesuada nulla convallis faucibus. Suspendisse nec est eget felis blandit dictum. Fusce sodales imperdiet imperdiet. Etiam ac finibus ante, id pharetra sem. Pellentesque eget pharetra leo. Vivamus purus felis, mattis ultrices feugiat id, posuere eu dolor. Vivamus et arcu vel sem aliquam lacinia.</p>
            </div>

            <div className="my-8 flex flex-col gap-2 max-w-2xl">
              <h2 className="font-bold text-2xl">Reviews from Patients:</h2>
              {/* Carousel below */}
              <Carousel className="w-full">
                <CarouselContent>
                  {reviews.map((data, index) => (
                    <CarouselItem key={index}>
                      <div className="p-1">
                        <Card className="drop-shadow">
                          <CardContent className="flex flex-col aspect-square justify-start p-6">
                            <div className="flex gap-2 items-center">
                              <span className="text-xl font-semibold">{data.patient}</span>
                              <div className="flex gap-1">
                              {Array.from({ length: data.stars }).map((_, index2) => (
                                <Star key={index2} fill="black" className="size-4" />
                              ))}
                              </div>
                            </div>
                            {
                              data.verified ? <div className="flex gap-1 text-sm items-center">Verified Patient <Verified size={15} /></div> 
                              : <div>Unverified</div>
                            }
                            <p className="mt-4 italic">{data.review}</p>
                          </CardContent>
                        </Card>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Data;

import React from "react";
import { Button } from "../ui/button";

const hero = () => {
  const imageLink =
    "https://plus.unsplash.com/premium_photo-1661766718556-13c2efac1388?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  return (
    <main>
      <div className="relative w-full bg-white">
        <div className="mx-auto max-w-7xl lg:grid lg:grid-cols-12 lg:gap-x-8 lg:px-8">
          <div className="flex flex-col justify-center px-4 py-12 md:py-16 lg:col-span-7 lg:gap-x-6 lg:px-6 lg:py-24 xl:col-span-6">
            <h1 className="mt-8 text-3xl font-bold tracking-tight text-black md:text-4xl lg:text-6xl">
              Welcome to WhereDoc
            </h1>
            <p className="mt-8 text-lg text-gray-700">
              We want to make your life easier so that you can find the doctors
              you need!
            </p>
            <div className="flex mt-14 gap-5">
              <Button>Find a Doctor</Button>
              <Button>Recommend me a doctor</Button>
            </div>
          </div>
          <div className="relative lg:col-span-5 lg:-mr-8 xl:col-span-6 mt-10 rounded-md">
            <img
              className="aspect-[3/2] bg-gray-50 object-cover lg:aspect-[4/3] lg:h-[700px] xl:aspect-[16/9]"
              src={imageLink}
              alt="we dont own these links (dont sue me)"
            />
          </div>
        </div>
      </div>
    </main>
  );
};

export default hero;

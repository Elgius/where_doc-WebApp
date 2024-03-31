import React from "react";

import { Button } from "../ui/button";
import Link from "next/link";

export default function realHero() {
  const url =
    "https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  return (
    <div>
      <div className="relative w-full bg-white">
        <div className="mx-auto max-w-7xl lg:px-8">
          <div className="flex flex-col justify-center px-4 py-10 lg:px-6">
            <div className="mt-10 flex max-w-max items-center space-x-2 rounded-full border p-2">
              <p className="text-xs font-medium md:text-sm">
                Terms and conditions
                <span className="ml-2 cursor-pointer font-bold">
                  Read More &rarr;
                </span>
              </p>
            </div>
            <h1 className="mt-8 max-w-4xl text-3xl font-bold tracking-tight text-black md:text-4xl lg:text-6xl">
              Welcome to WhereDoc!
            </h1>
            <p className="mt-8 max-w-3xl text-lg text-gray-700">
              Lets search up doctors to See who is available to meet at the
              moment!
              <br />
              <br />
              Note: WhereDoc as of Now is in Beta testing so expect bugs,
              glitches and sudden updates
            </p>
            <div className="mt-8 flex gap-5">
              <Link href="/listings">
                <Button className="rounded-md bg-black px-3 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black">
                  Search Doc
                </Button>
              </Link>
              <Link href="/logIn">
                <Button className="rounded-md bg-black px-3 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black">
                  Sign in
                </Button>
              </Link>
            </div>
          </div>
          <div className="rounded-lg bg-gray-200 p-4">
            <img
              className="aspect-[3/2] w-full rounded-lg bg-gray-50 object-cover lg:aspect-auto lg:h-[500px] lg:object-center"
              src={url}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}

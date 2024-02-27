import { cn } from "@/lib/utils";
import { Spotlight } from "@/components/ui/Spotlight";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  // Home
  return (
    <div className="h-screen w-screen flex md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      <div className=" p-4 max-w-7xl  mx-auto relative z-10  w-full pt-20 md:pt-0">
        <h1 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
          WhereDoc
          <br />
          <p className="text-xl md:text-md sm:text-sm font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50  my-10">
            Your guide to finding a doctor
          </p>
        </h1>
        <p className="mt-4 font-normal text-base text-neutral-300 max-w-lg text-center mx-auto">
          Disclaimer: This website uses existing data that is available for the
          public to see via the respective authorities websites or facebook
          pages. In a situation where the respective party is uncomfortable or
          want us to drop the information, please get in touch by pressing the
          contact us button below
        </p>

        <div className="mt-12 flex items-center flex-col lg:flex-row md:flex-row justify-center gap-7 ">
          <Link href="/listings">
            <Button className="p-3 bg-white text-black hover:ease-out hover:bg-gray-700">
              Search Doctors
            </Button>
          </Link>

          <Link href="/">
            <Button className="p-3 bg-white text-black hover:ease-out hover:bg-gray-700">
              Recommend Doc
            </Button>
          </Link>

          <Link href="/contact">
            <Button className="p-3 bg-white text-black hover:ease-out hover:bg-gray-700">
              Contact Us
            </Button>
          </Link>

          <Link href="/about">
            <Button className="p-3 bg-white text-black hover:ease-out hover:bg-gray-700">
              About us
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

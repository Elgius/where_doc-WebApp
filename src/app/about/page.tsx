"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

import { SparklesCore } from "@/components/ui/sparkles";

// bug: Buttons dont work after the sparkles where introduced. Not sure why
// Github issue: https://github.com/Elgius/where_doc-WebApp/issues/3

export default function About() {
  return (
    <div className="h-screen bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
      <div className="w-full absolute inset-0 h-screen">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={100}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />
      </div>
      <div className="max-w-2xl mx-auto p-4">
        <h1 className="relative z-10 text-lg md:text-7xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold">
          About Us!
        </h1>
        <p></p>
        <p className="text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center relative z-10">
          We are a small team of people who basically got tired of dealing with
          long queues at big hospitals and not being aware of alternative
          choices in getting health care. In Maldives, most clinics and health
          facilities take Aasandha or any insuarance policy. Armed with that
          knowledge, we realised that if we wanted to meet a doc in a hospital
          (lets say IGMH) where the queue is around 60 to 70 people on a good
          day, we can go to a good clinic and meet a doctor who is in the same
          field and essentially pay the same amount!
        </p>

        <br />
        <p className="text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center relative z-10">
          this was a very interesting revelation. We also quickly realised that
          the health care system is already overloaded. Most people who go to
          see doctors in a big hospital may not necessarily need the important
          facilities in the hospital. If a non emergency patient was to go to
          another doctor in a clinic that might as well be 5 mins from their
          house, the load on general hospitals will be much lowered. Therefore,
          we created WhereDoc as a way for people to find Doctors of the same
          field and see thir duty times.
        </p>
        <div className="mt-10 flex items-center justify-center flex-row gap-5">
          <Link href="/">
            <Button>Home</Button>
          </Link>

          <Link href="/">
            <Button> Donate cuz we broke too 😊</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

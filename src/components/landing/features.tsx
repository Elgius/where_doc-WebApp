import React from "react";
import { DollarSign, Filter, Menu, Moon, Star, X, Zap } from "lucide-react";
import { Lock, Bot, Clipboard } from "lucide-react";

export default function features() {
  return (
    <div className="mx-auto my-12 max-w-7xl px-4 sm:px-6 md:my-24 lg:my-32 lg:px-8">
      <div className="mx-auto max-w-xl text-center">
        <h2 className="mt-6 text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
          Making Doctors more accessible
        </h2>
        <p className="mt-4 text-base leading-relaxed text-gray-600">
          This is our moto and goal. We aspire to make doctors availability to
          be know, their schedules transparent and allow smaller clinics to have
          better presence to people get immediete treatment before things go
          wrong. Below are some of the things we guarantee!
        </p>
      </div>
      <div className="mt-12 grid grid-cols-1 gap-y-8 text-center sm:grid-cols-2 sm:gap-12 lg:grid-cols-4">
        <div>
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-gray-100">
            <Lock className="h-9 w-9 text-gray-700" />
          </div>
          <h3 className="mt-8 text-lg font-semibold text-black">
            Secured Browsing
          </h3>
          <p className="mt-4 text-sm text-gray-600">
            We do not take your data in any form when you check listings to see
            which clinics are available to you
          </p>
        </div>
        <div>
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-gray-100">
            <Zap className="h-9 w-9 text-gray-700" />
          </div>
          <h3 className="mt-8 text-lg font-semibold text-black">Fast & Easy</h3>
          <p className="mt-4 text-sm text-gray-600">
            Get the latest listing in the fastest load times so you do not have
            to wait too long to see who is available
          </p>
        </div>
        <div>
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-gray-100">
            <Bot className="h-9 w-9 text-gray-700" />
          </div>
          <h3 className="mt-8 text-lg font-semibold text-black">Ai enabled</h3>
          <p className="mt-4 text-sm text-gray-600">
            Though this is in development, we are happy to announce that we will
            be working towards introducing an expert verified ai that will help
            you decide which doctor to go to. This system is still in
            development and soon to be released later this year
          </p>
        </div>
        <div>
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-gray-100">
            <Clipboard className="h-9 w-9 text-gray-700" />
          </div>
          <h3 className="mt-8 text-lg font-semibold text-black">
            Additional clinical services
          </h3>
          <p className="mt-4 text-sm text-gray-600">
            Partner clinics with WhereDoc will allow us to offer more services
            to our vistors such as booking and direct contacting the facility.
            Stay tuned for more information on this
          </p>
        </div>
      </div>
    </div>
  );
}

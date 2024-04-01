import React from "react";

export default function Faq() {
  return (
    <section className="mx-auto max-w-7xl bg-gray-50 px-2 py-10 md:px-0">
      <div>
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-gray-600 lg:mx-auto">
            FAQ section
          </p>
        </div>
        <div className="mx-auto mt-8 grid max-w-3xl grid-cols-1 gap-6 md:mt-16 md:grid-cols-2">
          <div>
            <h2 className="text-xl font-semibold text-black">
              How do I get started?
            </h2>
            <p className="mt-6 text-sm leading-6 tracking-wide text-gray-500">
              Click the Search Doc Button above to start looking for doctors. If
              you are here for the beta test of the Ai, press sign in button
              that has been provided to you via the team
            </p>
          </div>
          <div>
            <div>
              <h2 className="text-xl font-semibold text-black">
                Is this a free service?
              </h2>

              <p className="mt-6 text-sm leading-6 tracking-wide text-gray-500">
                Yes! you can search the doctors for free using the website. We
                will add more features and try our best to make them all as free
                as possible
              </p>
            </div>
          </div>
        </div>

        <p className="mt-10 text-center text-gray-600">
          Can&apos;t find what you&apos;re looking for?{" "}
          <a
            href="/contact"
            title=""
            className="black font-semibold hover:underline"
          >
            Contact us
          </a>
        </p>
      </div>
    </section>
  );
}

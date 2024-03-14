"use client";
import { login, signup } from "./actions";
import { ArrowRight } from "lucide-react";
// import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SparklesCore } from "@/components/ui/sparkles";

export default function LoginPage() {
  const doc =
    "https://plus.unsplash.com/premium_photo-1661758899958-050ce4481f35?q=80&w=1954&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  function error() {
    alert("this function is not available");
  }

  return (
    <div className="h-screen w-screen flex justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-y-auto overflow-x-hidden">
      <div className=" p-2 max-w-7xl  mx-auto relative z-10  w-full pt-12 md:pt-20">
        {/* <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={100}
          className="w-full h-full"
          particleColor="#FFFFFF"
        /> */}
        <section>
          <div className="grid grid-cols-1 lg:grid-cols-2 bg-white rounded-md">
            <div className="flex items-center justify-center px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
              <div className="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md">
                <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl">
                  Sign in
                </h2>
                <p className="mt-2 text-sm text-gray-600">
                  Don&apos;t have an account?{" "}
                  <a
                    href="#"
                    title=""
                    className="font-semibold text-black transition-all duration-200 hover:underline"
                  >
                    Create a free account
                  </a>
                </p>
                <form className="mt-8">
                  <div className="space-y-5">
                    <div>
                      <label
                        htmlFor="email"
                        className="text-base font-medium text-gray-900"
                      >
                        {" "}
                        Email address{" "}
                      </label>
                      <div className="mt-2">
                        <Input
                          className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                          type="email"
                          placeholder="Email"
                          id="email"
                          name="email"
                          required
                        ></Input>
                      </div>
                    </div>
                    <div>
                      <div className="flex items-center justify-between">
                        <label
                          htmlFor="password"
                          className="text-base font-medium text-gray-900"
                        >
                          {" "}
                          Password{" "}
                        </label>
                        <a
                          href="#"
                          title=""
                          className="text-sm font-semibold text-black hover:underline"
                          onClick={error}
                        >
                          {" "}
                          Forgot password?{" "}
                        </a>
                      </div>
                      <div className="mt-2">
                        <Input
                          className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                          type="password"
                          placeholder="Password"
                          id="password"
                          name="password"
                          required
                        ></Input>
                      </div>
                    </div>
                    <div>
                      {/* make sign up form later */}
                      <Button
                        formAction={login}
                        className="inline-flex w-full items-center justify-center rounded-md bg-black px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-black/80"
                      >
                        Get started <ArrowRight className="ml-2" size={16} />
                      </Button>
                    </div>
                  </div>
                </form>
                <div className="mt-3 space-y-3">
                  <Button
                    onClick={error}
                    className="relative inline-flex w-full items-center justify-center rounded-md border border-gray-400 bg-white px-3.5 py-2.5 font-semibold text-gray-700 transition-all duration-200 hover:bg-gray-100 hover:text-black focus:bg-gray-100 focus:text-black focus:outline-none"
                  >
                    Sign in with Google
                  </Button>
                  <Button
                    onClick={error}
                    className="relative inline-flex w-full items-center justify-center rounded-md border border-gray-400 bg-white px-3.5 py-2.5 font-semibold text-gray-700 transition-all duration-200 hover:bg-gray-100 hover:text-black focus:bg-gray-100 focus:text-black focus:outline-none"
                  >
                    Sign in with Facebook
                  </Button>
                </div>
              </div>
            </div>
            <div className="h-full w-full">
              <img
                className="mx-auto h-full w-full rounded-md object-cover"
                src={doc}
                // width={20}
                // height={20}
                alt=""
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

{
  // the sample code that runs the login page
  /* <form>
<label htmlFor="email">Email:</label>
<input id="email" name="email" type="email" required />
<label htmlFor="password">Password:</label>
<input id="password" name="password" type="password" required />
<button formAction={login}>Log in</button>
<button formAction={signup}>Sign up</button>
</form> */
}

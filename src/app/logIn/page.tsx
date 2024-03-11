"use client";

import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import type { Database } from "@/lib/database.types";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const supabase = createClientComponentClient<Database>({
    supabaseUrl: process.env.NEXT_PUBLIC_SUPABASE_PROJECT_URL,
    supabaseKey: process.env.NEXT_PUBLIC_SUPABASE_API_KEY,
  });

  const handleSignUp = async () => {
    await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: `${location.origin}/auth/callback`,
      },
    });
    router.refresh();
  };

  const handleSignIn = async () => {
    await supabase.auth.signInWithPassword({
      email,
      password,
    });
    router.refresh();
  };

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    router.refresh();
  };

  return (
    <>
      {/* Convert this form to shadcn Form before we roll out for Beta testing */}
      <div className="h-screen w-screen flex md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
        <div className="bg-white rounded-lg flex items-center justify-center px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
          {/* convert this into a card component to make this a lot easier down the line */}
          <div className="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md">
            <h1 className="text-center text-2xl font-bold leading-tight text-black">
              Enter your email and password that we authorized!
            </h1>
            <div className="flex flex-col gap-2 my-10">
              <label className="text-black font-bold">Email</label>
              <Input
                name="email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
            </div>
            <div className="flex flex-col gap-2 my-10">
              <label className="text-black font-bold">Password</label>
              <Input
                type="password"
                name="password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
              />
            </div>
            <div className="flex justify-center items-center gap-4 mt-[3rem]">
              <Button onClick={handleSignUp}>Sign up</Button>
              <Button onClick={handleSignIn}>Sign in</Button>
              <Button onClick={handleSignOut}>Sign out</Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

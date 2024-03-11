import { NextResponse } from "next/server";
import { supabaseClient } from "@/db/client";

export async function GET() {
  console.log("Logging api calls...");

  const { data: results, error } = await supabaseClient
    .from("doctors")
    .select("*");

  if (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
    });
  }

  return new Response(JSON.stringify({ results }), { status: 200 });
}

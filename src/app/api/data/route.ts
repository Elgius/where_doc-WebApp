import { NextResponse } from "next/server";
import { supabaseClient } from "@/db/client";

export async function GET() {
  console.log("Logging api calls...");

  if (typeof supabaseClient !== "undefined") {
    const { data: results, error } = await supabaseClient
      .from("ADK")
      .select("*");

    if (error) {
      return new Response(JSON.stringify({ error: error.message }), {
        status: 500,
      });
    }
    return new Response(JSON.stringify({ results }), { status: 200 });
  } else {
    console.error("Client initialization error, API route shutting down");
  }
}

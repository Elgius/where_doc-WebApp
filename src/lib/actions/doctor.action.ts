"use server";

import { supabaseClient } from "@/db/client";

const DOCTOR_TABLE_NAME = "ADK";

export async function getDoctorData() {
  console.log("Logging api calls...");

  if (typeof supabaseClient === "undefined") {
    console.error("Client initialization error, API route shutting down");
    return;
  }

  try {
    const results = await supabaseClient.from(DOCTOR_TABLE_NAME).select("*");
    console.log("results:", results.data, "results123");

    return results.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

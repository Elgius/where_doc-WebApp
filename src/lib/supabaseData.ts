import { supabaseClient } from "@/db/client";

let listing 

async function sData() {
    const { data: results, error } = await supabaseClient.from("ADK").select("*");

    if (error) console.log("Error", error);
    else {
        listing = results
    };
}

export {listing}
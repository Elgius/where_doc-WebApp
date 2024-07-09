"use client";
import React, { useEffect, useState } from "react";
import { ChatOllama } from "@langchain/community/chat_models/ollama";
import { StringOutputParser } from "@langchain/core/output_parsers";
import { ChatPromptTemplate } from "@langchain/core/prompts";

export default function Page() {
  const [chat, setChat] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  const prompt = ChatPromptTemplate.fromMessages([
    [
      "system",
      `You are an expert translator. Format all responses as JSON objects with two keys: "original" and "translated". if you cannot find the direct english word in the translated sentence, just use the word as it is.`,
    ],
    ["human", `Translate "{input}" into {language}.`],
  ]);

  const model = new ChatOllama({
    baseUrl: "https://ai.maqesense.com",
    model: "llama2",
    format: "json",
  });

  useEffect(() => {
    // Define an async function inside useEffect
    const fetchData = async () => {
      setLoading(true);
      try {
        const chain = prompt.pipe(model);

        const result = await chain.invoke({
          input: "Villa college is amazing",
          language: "Dhivehi",
        });

        const contentObj = JSON.parse(result.lc_kwargs.content);
        const { original, translated } = contentObj;

        setChat({ original, translated });

        console.log(result);
      } catch (error) {
        console.error("Error fetching chat:", error);
      } finally {
        setLoading(false);
      }
    };

    // Call the async function
    fetchData();
  }, []);

  return (
    <div>
      {loading ? (
        <p>Loading...</p> // Show loading indicator
      ) : (
        <>
          <main className="flex justify-center items-center min-h-screen text-center flex-col">
            <h1>Original: {chat?.original}</h1>
            <h1>Translated: {chat?.translated}</h1>
          </main>
        </>
      )}
    </div>
  );
}

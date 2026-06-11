import "dotenv/config";
import { GoogleGenAI } from "@google/genai";

const apiKey = process.env.GOOGLE_GEMINI_API_KEY;

if (!apiKey) {
  throw new Error("GOOGLE_GEMINI_API_KEY is missing in Backend/.env");
}

const ai = new GoogleGenAI({
  apiKey,
});

async function invokeGeminiAi() {
  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: "Hello gemini how are you",
  });

  console.log(response.text);
}

export default invokeGeminiAi;

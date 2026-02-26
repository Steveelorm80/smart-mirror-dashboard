import OpenAI from "openai";
import { getConfig } from "../config/config.js";

export const generateInsight = async (context) => {
  const { openaiApiKey } = getConfig();

  const client = new OpenAI({
    apiKey: openaiApiKey,
  });

  const response = await client.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [
      {
        role: "system",
        content: `
You are a smart mirror assistant.
Give a short, natural, spoken-style daily summary.
No markdown.
No bullet points.
Keep it under 120 words.
End cleanly.
`,
      },
      {
        role: "user",
        content: context,
      },
    ],
    max_tokens: 150,
  });

  return response.choices[0].message.content;
};

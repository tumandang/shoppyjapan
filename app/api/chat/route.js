import { OpenAI } from "openai";
import { initialMessage } from "@/lib/data";

export const runtime = "edge";

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(request) {
  const { messages } = await request.json();

  const buildOpenAIPrompt = [
    { role: "system", content: initialMessage.content },
    ...messages.map((msg) => ({
      role: msg.role,
      content: msg.content,
    })),
  ];


  const response = await client.chat.completions.create({
    model: "gpt-3.5-turbo",
    messages: buildOpenAIPrompt,
    temperature: 0.7,
  });

  const assistantMessage = response.choices[0].message.content;

  return new Response(
    JSON.stringify([
      {
        id: Math.random().toString(36).slice(2, 9),
        role: "assistant",
        content: assistantMessage,
      },
    ]),
    { headers: { "Content-Type": "application/json" } }
  );
}

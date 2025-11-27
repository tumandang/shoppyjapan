"use client";
import React, { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowDownCircle,
  Bot,
  Code,
  MessageCircle,
  SendIcon,
  User2,
  X,
} from "lucide-react";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Asimovian, Lexend } from "next/font/google";
import { Spinner } from "@/components/ui/spinner";
import { ScrollArea } from "@/components/ui/scroll-area";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
const lexend = Lexend({
  variable: "--font-Lexend",
  subsets: ["latin"],
  weight: ["600"],
});
const asimovian = Asimovian({
  variable: "--font-Asimovian",
  subsets: ["latin"],
  weight: ["400"],
});
function ChabotIcon() {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const chatIconRef = useRef(null);

  const toggleChat = () => {
    setIsChatOpen(!isChatOpen);
  };
  const Message = [{}];
  const [sending, setSending] = useState(false);
  const [error, setError] = useState(null);
  const [messages, setMessages] = useState([]);
  const [userInput, setUserInput] = useState("");
  const handleSend = async () => {
    if (!userInput.trim()) return;

    const userMsg = { id: Date.now(), role: "user", content: userInput };
    setMessages([...messages, userMsg]);
    setSending(true);
    setError(null);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        body: JSON.stringify({ messages: [...messages, userMsg] }),
        headers: { "Content-Type": "application/json" },
      });

      if (!res.ok) throw new Error("API request failed");

      const data = await res.json();
      setMessages((prev) => [...prev, ...data]);
      setUserInput("");
    } catch (err) {
      console.error(err);
      setError(err.message || "Something went wrong");
    } finally {
      setSending(false);
    }
  };
  return (
    <div>
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 100 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          className="fixed bottom-4 right-4 z-50"
        >
          <Button
            ref={chatIconRef}
            onClick={toggleChat}
            size="icon"
            className="rounded-full bg-orange-500 p-3 size-14 shadow-lg backdrop-blur-md hover:scale-110"
          >
            {!isChatOpen ? (
              <MessageCircle size={24} />
            ) : (
              <ArrowDownCircle size={24} />
            )}
          </Button>
        </motion.div>
      </AnimatePresence>
      <AnimatePresence>
        {isChatOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="fixed bottom-4 right-4 z-50 w-[95%] md:w-[500px]"
          >
            <Card className="border-2 border-gray-300 shadow-md backdrop-blur-lg bg-white ">
              <CardHeader>
                <CardTitle className=" flexBetween">
                  {/* <Image
                    src="/aika-bot.jpg"
                    width={12}
                    height={12}
                    alt="Shopan Logo"
                    className="h-10 w-auto"
                  /> */}
                  <div className="flex flex-row gap-x-3">
                    <Bot color="Orange" size={30}></Bot>
                    <h3 className={`text-orange-400 ${asimovian.className} `}>
                      AIKA
                    </h3>
                  </div>
                  <div className="">
                    <Button
                      ref={chatIconRef}
                      onClick={toggleChat}
                      size="icon"
                      variant="ghost"
                      className="px-2 py-0"
                    >
                      <X size={10} strokeWidth={3}></X>
                      <span className="sr-only">Close Chat</span>
                    </Button>
                  </div>
                </CardTitle>
                <CardDescription className={`text-black ${lexend.className}`}>
                  Your personal shopping assistant from Japan—helping you find,
                  order, and track products instantly!
                </CardDescription>
              </CardHeader>
              <CardContent className="bg-white rounded-lg border-2 border-gray-300 m-5">
                <ScrollArea className="h-[400px] pr-4">
                  <div className="flex flex-col gap-2 p-3">
                    {messages?.length === 0 && (
                      <div className="w-full text-gray-500 flex items-center justify-center h-full">
                        No Message yet
                      </div>
                    )}
                    {messages?.map((message) => (
                      <div
                        key={message.id}
                        className={`flex gap-3 ${
                          message.role === "user"
                            ? "justify-end"
                            : "justify-start"
                        }`}
                      >
                        {message.role === "assistant" && (
                          <div className="shrink-0 w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">
                            <Bot className="w-5 h-5 text-gray-600" />
                          </div>
                        )}

                        <div
                          className={`px-4 py-2 rounded-lg max-w-[80%] text-sm ${
                            message.role === "user"
                              ? "bg-orange-100"
                              : "bg-gray-100"
                          }`}
                        >
                          <Markdown
                            children={message.content}
                            remarkPlugins={[remarkGfm]}
                          />
                        </div>

                        {message.role === "user" && (
                          <div className="shrink-0 w-8 h-8 rounded-full bg-orange-500 flex items-center justify-center">
                            <User2 className="w-5 h-5 text-white" />
                          </div>
                        )}
                      </div>
                    ))}

                    {sending && (
                      <div className="w-full flexCenter gap-3 text-gray-500">
                        <Spinner />
                        <span>Loading...</span>
                        <button
                          type="button"
                          className="underline"
                          onClick={() => stop()}
                        >
                          Stop
                        </button>
                      </div>
                    )}

                    {error && (
                      <div className="w-full flexCenter gap-3">
                        <div>An Error Occurred</div>
                        <button
                          type="button"
                          className="underline"
                          onClick={handleSend}
                        >
                          Retry
                        </button>
                      </div>
                    )}
                  </div>
                </ScrollArea>
              </CardContent>
              <CardFooter>
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    handleSend();
                  }}
                  className="flexBetween flex-1 gap-4"
                >
                  <Input
                    value={userInput}
                    onChange={(e) => setUserInput(e.target.value)}
                  />
                  <Button type="submit" disabled={sending}>
                    Send
                  </Button>
                </form>
              </CardFooter>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default ChabotIcon;

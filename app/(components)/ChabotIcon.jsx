"use client";
import React, { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence} from "framer-motion";
import { ArrowDownCircle, Bot, MessageCircle, SendIcon, X } from "lucide-react";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ScrollArea } from "@radix-ui/react-scroll-area";
import { Input } from "@/components/ui/input";
import { Asimovian , Lexend } from "next/font/google";

const lexend = Lexend({
  variable: "--font-Lexend",
  subsets: ["latin"],
  weight:["600"],
});
const asimovian = Asimovian({
  variable: "--font-Asimovian",
  subsets: ["latin"],
  weight:["400"],
});
function ChabotIcon() {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const chatIconRef = useRef(null);

  const toggleChat = () => {
    setIsChatOpen(!isChatOpen);
  };
  const Message = [{}];

  return (
    <div>
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 100 }}
          transition={{ duration: 0.2,  ease:"easeOut"}}
          className="fixed bottom-4 right-4 z-50"
        >
          <Button
            ref={chatIconRef}
            onClick={toggleChat}
            size="icon"
            className="rounded-full bg-orange-500 p-3 size-14 shadow-lg backdrop-blur-md"
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
            animate={{ opacity: 1, scale:1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.2 , ease:"easeOut"}}
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
                    <h3 className={`text-orange-400 ${asimovian.className} `}>AIKA</h3>
                  </div>
                  <div className="">
                    <Button
                      ref={chatIconRef}
                      onClick={toggleChat}
                      size="icon"
                      variant="ghost"
                      className="px-2 py-0"
                    >
                      <X size={10} strokeWidth={3} ></X>
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
                <ScrollArea className="h-[300px] pr-4">
                  <div className="w-full h-full text-gray-500 flex items-center justify-center gap-3 ">
                    No Message yet
                  </div>
                </ScrollArea>
              </CardContent>
              <CardFooter className="">
                    <form action="" className="flex w-full space-x-2 items-center">
                      <Input className="flex-1" placeholder="Asking something here">

                      </Input>
                      <Button type="submit" className="size-9 " size="icon">
                        <SendIcon color="white"></SendIcon>

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

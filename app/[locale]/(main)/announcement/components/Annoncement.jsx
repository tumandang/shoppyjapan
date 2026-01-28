"use client";
import React, { useEffect } from "react";
import { Lexend, DM_Sans } from "next/font/google";
import { useAuth } from "@/context/AuthContext";
import Date from "@/components/Date";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
const lexend = Lexend({
  variable: "--font-Lexend",
  subsets: ["latin"],
  weight: ["600"],
});

const dm_sans = DM_Sans({
  variable: "--font-DM_Sans",
  subsets: ["latin"],
  weight: ["400"],
});

function Announcement() {
  const { blog, fetchBlog, loading } = useAuth();

  useEffect(() => {
    fetchBlog();
  }, []);

  const publishedAnnouncements =
    blog?.filter((item) => item.status === "Published") || [];

  if (loading) {
    return (
      <div className="max-w-340 px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        <div className="flex justify-center items-center min-h-[400px]">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-600"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-340 px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
        <h2
          className={`text-3xl font-bold md:text-4xl md:leading-tight bg-linear-to-r from-orange-600 to-orange-500 bg-clip-text text-transparent ${lexend.className}`}
        >
          Latest Announcements
        </h2>
        <p
          className={`mt-3 text-gray-600 dark:text-neutral-400 ${dm_sans.className}`}
        >
          Stay informed with our latest updates, news, and important notices
        </p>
      </div>

      {publishedAnnouncements.length === 0 ? (
        <div className="text-center py-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-100 rounded-full mb-4">
            <svg
              className="w-8 h-8 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
              />
            </svg>
          </div>
          <h3 className="text-lg font-semibold text-gray-800 dark:text-neutral-200">
            No announcements yet
          </h3>
          <p className="text-gray-500 dark:text-neutral-500 mt-2">
            Check back soon for updates!
          </p>
        </div>
      ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {publishedAnnouncements.map((item) => (
            <Dialog key={item.id}>
              <DialogTrigger asChild>
                <div className="group flex flex-col h-full bg-white border border-gray-200 hover:border-orange-200 hover:shadow-xl focus:outline-none focus:border-orange-200 focus:shadow-xl transition-all duration-300 rounded-xl overflow-hidden dark:bg-neutral-900 dark:border-neutral-700 dark:hover:border-orange-900/50 dark:hover:shadow-black/40 cursor-pointer">
                  <div className="relative aspect-video overflow-hidden bg-gray-100">
                    {item.image ? (
                      <img
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        src={item.featured_image_url}
                        alt={item.title}
                        onError={(e) => {
                          e.target.src =
                            "https://images.unsplash.com/photo-1633114128174-2f8aa49759b0?ixlib=rb-4.0.3&auto=format&fit=crop&w=560&q=80";
                        }}
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-linear-to-br from-orange-100 to-orange-50">
                        <svg
                          className="w-16 h-16 text-orange-300"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={1.5}
                            d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z"
                          />
                        </svg>
                      </div>
                    )}

                    <div className="absolute top-3 right-3">
                      <span className="inline-flex items-center gap-x-1.5 py-1.5 px-3 rounded-full text-xs font-medium bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200">
                        <span className="w-1.5 h-1.5 inline-block bg-orange-800 rounded-full dark:bg-orange-200"></span>
                        {item.status}
                      </span>
                    </div>
                  </div>

                  <div className="p-5 flex flex-col grow">
                    <div className="grow">
                      <h3
                        className={`text-xl font-semibold text-gray-800 group-hover:text-orange-600 transition-colors dark:text-neutral-200 dark:group-hover:text-orange-400 line-clamp-2 ${lexend.className}`}
                      >
                        {item.title}
                      </h3>

                      {item.summary && (
                        <p
                          className={`mt-3 text-sm text-gray-600 dark:text-neutral-400 line-clamp-3 ${dm_sans.className}`}
                        >
                          {item.summary}
                        </p>
                      )}
                    </div>

                    <div className="mt-5 pt-4 border-t border-gray-100 dark:border-neutral-800">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-x-2">
                          <div className="shrink-0">
                            <div className="w-8 h-8 rounded-full bg-linear-to-br from-orange-400 to-orange-600 flex items-center justify-center text-white text-xs font-semibold">
                              SA
                            </div>
                          </div>
                          <div className="flex flex-col">
                            <span className="text-xs font-medium text-gray-800 dark:text-neutral-200">
                              Admin
                            </span>
                            {item.created_at && (
                              <span className="text-xs text-gray-500 dark:text-neutral-500">
                                <Date datestring={item.created_at} />
                              </span>
                            )}
                          </div>
                        </div>

                        <div className="inline-flex items-center gap-x-1 text-sm text-orange-600 hover:text-orange-700 font-medium dark:text-orange-400 dark:hover:text-orange-300">
                          Read more
                          <svg
                            className="w-4 h-4 transition-transform group-hover:translate-x-1"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 5l7 7-7 7"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </DialogTrigger>

              <DialogContent className="max-w-5xl! max-h-[90vh] overflow-y-auto p-0">

                {item.image && (
                  <div className="relative h-64 sm:h-80 overflow-hidden">
                    <img
                      src={item.featured_image_url}
                      alt={item.title}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.target.src =
                          "https://images.unsplash.com/photo-1633114128174-2f8aa49759b0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80";
                      }}
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/20 to-transparent"></div>

    
                    <div className="absolute top-4 left-4">
                      <span className="inline-flex items-center gap-x-1.5 py-2 px-4 rounded-full text-sm font-medium bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200 shadow-lg">
                        <span className="w-2 h-2 inline-block bg-orange-800 rounded-full dark:bg-orange-200"></span>
                        {item.status}
                      </span>
                    </div>
                  </div>
                )}

  
                <div className="p-6 sm:p-8">
                  <DialogHeader className="mb-6">
                    <DialogTitle
                      className={`text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white ${lexend.className}`}
                    >
                      {item.title}
                    </DialogTitle>
                  </DialogHeader>

                  <div className="flex items-center gap-4 mb-6 pb-6 border-b border-gray-200 dark:border-neutral-700">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-linear-to-br from-orange-400 to-orange-600 flex items-center justify-center text-white font-semibold shadow-lg">
                        SA
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-900 dark:text-white">
                          Shopan Admin
                        </p>
                        {item.created_at && (
                          <p className="text-xs text-gray-500 dark:text-neutral-400">
                            <Date datestring={item.created_at} />
                          </p>
                        )}
                      </div>
                    </div>
                  </div>

             
                  {item.summary && (
                    <div className="mb-6 p-4 bg-orange-50 dark:bg-orange-900/20 rounded-lg border-l-4 border-orange-500">
                      <DialogDescription
                        className={`text-base text-gray-700 dark:text-neutral-300 italic ${dm_sans.className}`}
                      >
                        {item.summary}
                      </DialogDescription>
                    </div>
                  )}

                
                  <div
                    className={`prose prose-sm sm:prose-base max-w-none dark:prose-invert ${dm_sans.className}`}
                  >
                    <div className="text-gray-700 dark:text-neutral-300 whitespace-pre-line leading-relaxed">
                      {item.description}
                    </div>
                  </div>

    
                  <DialogFooter className="mt-8 pt-6 border-t border-gray-200 dark:border-neutral-700 sm:justify-end">
                    <DialogClose asChild>
                      <Button
                        variant="default"
                        className="bg-orange-600 hover:bg-orange-700"
                      >
                        Close
                      </Button>
                    </DialogClose>
                  </DialogFooter>
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>
      )}
    </div>
  );
}

export default Announcement;

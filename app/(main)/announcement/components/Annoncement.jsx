import React from "react";
import { Lexend, DM_Sans } from "next/font/google";
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
function Annoncement() {
  const blog = [
    {
      title: "CARA TERMUDAH BELI DARI JEPUN",
      desc: "Pilih barang apa anda mahu >> copy dan paste URL link >> masukkan harga barang >> bayaran >> sampai di warehouse shoppyjapan >> bayaran postage >> pos terus ke rumah anda(ETA 7-10hari) ",
      timestap: "12/12/2025 04:35 AM",
      img: "https://images.unsplash.com/photo-1633114128174-2f8aa49759b0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=560&q=80"
    },
    {
      title: "PROMOSI BARANGAN JEPUN",
      desc: "Kini shoppyJapan.my (シ ョ パ ン) menawarkan perkhidmatan beli dan hantar barangan TERLARIS di Jepun ke depan pintu anda di MALAYSIA.",
      timestap: "12/12/2025 04:35 AM",
      img: "https://images.unsplash.com/photo-1562851529-c370841f6536?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=560&q=80"
    },
    {
      title: "CARA BID DI YAHOO AUCTION",
      desc: "Untuk pembidaan di YAHOOAUCTION whatsapp admin dahulu di nombor +6013-598-7486",
      timestap: "12/12/2025 04:35 AM",
      img: "https://images.unsplash.com/photo-1521321205814-9d673c65c167?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=560&q=80"
    },
    {
      title: "CARA TERMUDAH BELI DARI JEPUN",
      desc: " Please note that our shipping charges are based on a fixed calculation method (including estimated postage, packing, and handling fees). While the actual shipping cost is often lower, we use this standard calculation to ensure consistent pricing and efficient processing. Thank you for your understanding",
      timestap: "12/12/2025 04:35 AM",
      img: "https://images.unsplash.com/photo-1633114128174-2f8aa49759b0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=560&q=80"
    },
    {
      title: "CARA TERMUDAH BELI DARI JEPUN",
      desc: "Pilih barang apa anda mahu >> copy dan paste URL link >> masukkan harga barang >> bayaran >> sampai di warehouse shoppyjapan >> bayaran postage >> pos terus ke rumah anda(ETA 7-10hari) ",
      timestap: "12/12/2025 04:35 AM",
      img: "https://images.unsplash.com/photo-1562851529-c370841f6536?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=560&q=80"
    },
  ];
  return (
    <div>
      <div className="max-w-340 px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
          <h2
            className={`text-2xl font-bold md:text-4xl md:leading-tight dark:text-white ${lexend.className}`}
          >
            The Blog
          </h2>
          <p
            className={`mt-2 text-gray-600 dark:text-neutral-400 ${dm_sans.className}`}
          >
            Get the latest updates, news, and important notices—stay informed
            and never miss out!
          </p>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {blog.map((blog, index) => (
          <div key={index} className="group flex flex-col h-full border border-gray-200 hover:border-transparent hover:shadow-lg focus:outline-hidden focus:border-transparent focus:shadow-lg transition duration-300 rounded-xl p-5 dark:border-neutral-700 dark:hover:border-transparent dark:hover:shadow-black/40 dark:focus:border-transparent dark:focus:shadow-black/40">
            
              <div >
                <div className="aspect-w-16 aspect-h-11">
                  <img
                    className="w-full object-cover rounded-xl"
                    src="https://images.unsplash.com/photo-1633114128174-2f8aa49759b0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=560&q=80"
                    alt="Blog Image"
                  />
                </div>

                <div className="my-6">
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-neutral-300 dark:group-hover:text-white">
                    {blog.title}
                  </h3>
                  <p className="mt-5 text-gray-600 dark:text-neutral-400">
                    {blog.desc}
                  </p>
                </div>
                <div className="mt-auto flex items-center gap-x-3">
                  <img
                    className="size-8 rounded-full"
                    src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80"
                    alt="Avatar"
                  />
                  <div>
                    <h5 className="text-sm text-gray-800 dark:text-neutral-200">
                      Shopan Admin
                    </h5>
                  </div>
                </div>
              </div>
           
          </div>
           ))}
        </div>
      </div>
    </div>
  );
}

export default Annoncement;

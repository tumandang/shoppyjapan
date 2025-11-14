import { Inter , Lexend } from "next/font/google";
import "./globals.css";
import Header from "./(components)/Header";
import Headerbar from "./(components)/headerbar";
import Navbar from "./(components)/Navbar";
import Footer from "./(components)/Footer";
import ChabotIcon from "./(components)/ChabotIcon";


const inter = Inter({
  variable: "--font-Inter",
  subsets: ["latin"],
});

const lexend = Lexend({
  variable: "--font-Lexend",
  subsets: ["latin"],
  weight:["400"],
});

export const metadata = {
  title: "Shopan",
  description: "Proxy-Buyying from Japan to Malaysia",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${lexend.variable} antialiased overflow-x-hidden`}
        
      >
        <Headerbar/>
        <Header/>
        <Navbar/>
        
       
        
          {children}
         <ChabotIcon/>
        <Footer></Footer>
      </body>
    </html>
  );
}

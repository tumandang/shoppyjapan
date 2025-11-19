
import "./globals.css";
import Header from "./(components)/Header";
import Headerbar from "./(components)/headerbar";
import Navbar from "./(components)/Navbar";
import Footer from "./(components)/Footer";
import ChabotIcon from "./(components)/ChabotIcon";




export const metadata = {
  title: "Shopan",
  description: "Proxy-Buyying from Japan to Malaysia",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={` antialiased overflow-x-hidden`}
        
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

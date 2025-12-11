
import Header from "../(components)/Header";
import Headerbar from "../(components)/headerbar";
import Footer from "../(components)/Footer";
import ChabotIcon from "../(components)/ChabotIcon";





export const metadata = {
  title: "Shopan",
  description: "Proxy-Buyying from Japan to Malaysia",
};

export default function RootLayout({ children }) {
  return (

        <div className="flex flex-col min-h-screen">
          <Headerbar/>
          <Header/>
          
          <main className="grow">
            {children}
            
          </main>
          
            
           <ChabotIcon/>
          <Footer></Footer>
        </div>

  );
}

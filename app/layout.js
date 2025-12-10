
import { AuthProvider } from "@/context/AuthContext";
import "./globals.css";





export const metadata = {
  title: "Shopan",
  description: "Proxy-Buyying from Japan to Malaysia",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <AuthProvider>
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}


import Header from "@/components/header";
import "./globals.css";
import {Inter} from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "sonner";
const inter = Inter({subsets:["latin"]});



export const metadata = {
  title: "Wealth",
  description: "One stop Finance Platform",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body
        className={`${inter.className}`}>
          {/*header*/}
        <Header></Header>

   <main className="min-h-screen">{children}</main>
        

        <Toaster richColors/>

        {/*footer*/}

          <footer className="bg-blue-50 py-12">
            <div className="container mx-auto px-4 text-center text-gray-600">
              <p>Made with &#x1F497; by SANIYA SAKLECHA</p>
            </div>
          </footer>

      </body>
    </html>
    </ClerkProvider>
  );
}

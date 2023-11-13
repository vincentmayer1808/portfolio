import "./globals.css";
import { Inter } from "next/font/google";
import { Sidenavbar } from "../components/Sidebar";
import Script from "next/script";

import Gtag from "../components/Gtag";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Vincent Mayer Portfolio",
  description: "Full Stack Web Developer at your services. Get ready to enter the game!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">

<Gtag/>
      <body className={inter}>
        <Sidenavbar />
        <main className="sm:ml-64">{children}</main>
        <Script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.8.1/flowbite.min.js" />
      </body>
    </html>
  );
}

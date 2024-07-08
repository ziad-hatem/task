import { Inter } from "next/font/google";
import "./globals.css";

import { data } from "./data/header";
import Up from "./components/Up";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

const inter = Inter({ subsets: ["latin"] });
export const metadata = {
  title: "Duroub Logistics",
  description: "A test Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar Links={data} />
        {children}
        <Footer />
        <Up />
      </body>
    </html>
  );
}

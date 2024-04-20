import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "./Components/Navbar/page";
import Footer from "./Components/Footer/page";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ICW 2024 | INDOCOR ITS SC",
  description: "Website ICW 24",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavBar/>
        {children}
        <Footer/>
        </body>
    </html>
  );
}

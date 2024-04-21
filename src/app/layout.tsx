import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import NavBar from "./Components/Navbar/page";
import Footer from "./Components/Footer/page";

const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({
  subsets: ["latin"],
  weight: "400"
});

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
      <body className={poppins.className}>
        <NavBar/>
        {children}
        <Footer/>
        </body>
    </html>
  );
}

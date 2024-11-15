import type { Metadata } from "next";
import { Barlow_Condensed } from "next/font/google";
import ResponsiveNav from "./components/Navigation/ResponsiveNav";
import Footer from './components/Footer/Footer'
import "./globals.css";

const barlow_Condensed = Barlow_Condensed({
  weight: ["300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Burger | A healty Food",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={barlow_Condensed.className}>
      <ResponsiveNav/>
        
        {children}
        <Footer />
        </body>

    </html>
  );
}

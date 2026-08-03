// import { Geist, Geist_Mono } from "next/font/google";
import { Hanken_Grotesk } from "next/font/google";
import Navbar from "@/components/navigation/Navbar";
import "./globals.css";

export const hanken = Hanken_Grotesk({
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "AKS | AI Workspace for Modern Teams",
  description:
    "Organize work, automate repetitive processes, and turn team activity into actionable insights with AKS, the intelligent workspace for modern companies.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${hanken.className} h-full antialiased`}>
      <body className="flex min-h-full flex-col">
        <Navbar />
        <main className="flex-1 pt-20">{children}</main>
      </body>
    </html>
  );
}

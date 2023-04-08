import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });
import "./globals.css";

export const metadata = {
  title: "Framer Motion Collection",
  description: "A collection of fun Framer Motion animations and interactions.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${inter.className} min-h-screen bg-gradient-to-br from-slate-700 to-slate-900 p-24 text-slate-200 antialiased`}
    >
      <body>{children}</body>
    </html>
  );
}


import LoadingOverlay from "../utils/LoadingOverlay";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Suspense } from "react";
import "./globals-tw.css";

export const metadata = {
  title: "Rioto Oka",
  description: "Rioto Oka's Portfolio Website",
  icons: {
    icon: 'icons/favicon.svg'
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex flex-col justify-between min-h-screen">

        <Header />
        <Suspense fallback={<LoadingOverlay />}>
          {children}
        </Suspense>
        <Footer />
      </body>
    </html>
  );
}

import "./globals-tw.css";


export const metadata = {
  title: "Rioto Oka",
  description: "Rioto Oka's Personal Portfolio Website",
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" }, 
      { url: "/favicon.png", type: "image/png" }, 
      { url: "/favicon.ico", type: "image/x-icon" }, 
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth duration-100">
      <body className="min-h-screen bg-custom-bg bg-contain">
        {children}
      </body>
    </html>
  );
}

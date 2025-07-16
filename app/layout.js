import "./globals-tw.css";


export const metadata = {
  title: "Rioto Oka",
  description: "Rioto Oka's Personal Portfolio Website",
  keywords: "web development, 利緒人　岡, リオト　オカ, りおと, おか, 利緒人, 岡",
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
    <html lang="en" className="scroll-smooth duration-1000">
      <body className="min-h-screen bg-custom-bg bg-contain">
        <div className="fixed inset-0 bg-white opacity-60 -z-40"></div> {/* Dark overlay */}
        {children}
      </body>
    </html>
  );
}

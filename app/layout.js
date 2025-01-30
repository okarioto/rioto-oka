import "./globals-tw.css";


export const metadata = {
  title: "Rioto Oka",
  description: "Rioto Oka's Personal Portfolio Website",
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

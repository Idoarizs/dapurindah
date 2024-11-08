import "../styles/globals.css";

// Font
import localFont from "next/font/local";

const baskerville = localFont({
  src: "../public/fonts/Baskerville.ttf",
  weight: "500",
  style: "normal",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <link rel="icon" href="/favicon.ico" />
      <body className={baskerville.className}>{children}</body>
    </html>
  );
}

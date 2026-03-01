import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "324.ing — Family Sites",
  description: "324.ing 패밀리 사이트 모음집",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body className="noise min-h-screen antialiased">
        {children}
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import HeaderApp from "@/components/app/header/Header";
import { PageTransition } from "@/components/app/transition/PageTrasition";
import { StairTransition } from "@/components/app/transition/StairTransition";

const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-jetbrainsMono",
});

export const metadata: Metadata = {
  title: "Lucas Leite - Website",
  description: "Lucas Leite - Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactElement;
}>) {
  return (
    <html lang="en">
      <body className={jetBrainsMono.variable}>
        <StairTransition />
        <HeaderApp />
        <PageTransition>{children}</PageTransition>
      </body>
    </html>
  );
}

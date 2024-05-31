import "~/styles/globals.css";

import {ClerkProvider} from "@clerk/nextjs";

import { GeistSans } from "geist/font/sans";

export const metadata = {
  title: "Nicholas Song",
  description: "",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en" className={`${GeistSans.variable} scroll-behavior: smooth`}>
        <body>{children}</body>
      </html>
    </ClerkProvider>
  );
}
import type { Metadata } from "next";
import {ApolloWrapper} from "@/app/ApolloWrapper";


export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body><ApolloWrapper>{children}</ApolloWrapper></body>
    </html>
  );
}
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SimpleSidebar from "@/components/SimpleSidebar";
import SimpleHeader from "@/components/SimpleHeader";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ResumeFlow B2B - AI-Powered Recruitment Platform",
  description: "Enterprise recruitment management system",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex h-screen bg-gray-50">
          <SimpleSidebar />
          <div className="flex-1 flex flex-col overflow-hidden">
            <SimpleHeader />
            <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-50">
              {children}
            </main>
          </div>
        </div>
      </body>
    </html>
  );
}

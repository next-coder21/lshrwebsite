import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "L'sHR — The HR Platform Built for Scale",
  description:
    "L'sHR brings your entire people operations under one roof — from hiring to payroll, attendance to approvals — with enterprise power and zero complexity.",
  keywords: "HR software, payroll, employee management, attendance, recruitment, HRMS",
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
  openGraph: {
    title: "L'sHR — The HR Platform Built for Scale",
    description: "Modern HR for modern teams. Employees, payroll, leaves, shifts, and more.",
    type: "website",
    images: [{ url: "/logo.png" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}

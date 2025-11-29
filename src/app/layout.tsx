import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bruce | Full-Stack Engineer",
  description: "Building AI-Powered Solutions for African Markets",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}

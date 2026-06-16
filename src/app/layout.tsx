import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bruce | Software Engineer",
  description: "AI/ML Engineer & MLOps Specialist",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}

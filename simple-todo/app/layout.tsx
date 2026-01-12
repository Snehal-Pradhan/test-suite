import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Next.js Clerk Todo",
  description: "Simple authenticated todo app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

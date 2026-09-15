import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Suspense streaming",
  description: "Async Server Components wrapped in Suspense",
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

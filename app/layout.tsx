import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Pulso RD",
  description: "Public opinion and issue sentiment across the Dominican Republic and Dominican diaspora.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}

import "./globals.css";
import type { Metadata } from "next";
import CursorFollower from "@/components/motion/CursorFollower";
import ScrollIndicator from "@/components/layout/ScrollIndicator";
import ScrollToTop from "@/components/motion/ScrollToTop";

export const metadata: Metadata = {
  icons: {
    icon: "/Logo1.png",
    shortcut: "/Logo1.png",
    apple: "/Logo1.png",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="tr">
      <body>
        <CursorFollower />
        <ScrollIndicator />
        {children}
        <ScrollToTop />
      </body>
    </html>
  );
}


import "./globals.css";
import CursorFollower from "@/components/motion/CursorFollower";
import ScrollIndicator from "@/components/layout/ScrollIndicator";
import ScrollToTop from "@/components/motion/ScrollToTop";

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


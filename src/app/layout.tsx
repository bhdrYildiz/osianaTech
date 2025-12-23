import "./globals.css";
import CursorFollower from "@/components/motion/CursorFollower";
import ScrollIndicator from "@/components/layout/ScrollIndicator";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="tr">
      <body>
        <CursorFollower />
        <ScrollIndicator />
        {children}
      </body>
    </html>
  );
}


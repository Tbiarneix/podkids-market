import type { Viewport } from "next";
import "../styles/globals.css";
import { Providers } from "@/components/Provider";
import { generateMetadata } from "@/utils/metadata";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#001D3D",
};

export { generateMetadata as metadata };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}

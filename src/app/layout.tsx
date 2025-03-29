import type { Metadata, Viewport } from 'next';
import '../styles/globals.css';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#001D3D',
};

export const metadata: Metadata = {
  title: 'Podkids - L\'application de podcast sécurisée pour les enfants',
  description: 'Podkids est une application de gestion de podcasts conçue spécialement pour les enfants. Offrant un environnement sûr et adapté, elle permet aux jeunes auditeurs de découvrir des contenus enrichissants tout en garantissant un contrôle parental optimal.',
  icons: {
    icon: '/favicon.ico',
    apple: '/images/Logo.webp',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body>
        {children}
      </body>
    </html>
  );
}

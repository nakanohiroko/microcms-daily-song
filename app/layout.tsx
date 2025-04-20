import Header from '@/components/Header';
import Footer from '@/components/Footer';
import './globals.css';
import styles from './layout.module.css';

export const metadata = {
  metadataBase: new URL(process.env.BASE_URL || 'http://localhost:3000'),
  title: {
    template: '%s | Simple Blog',
    default: 'Simple Blog',
  },
  description: 'A simple blog presented by microCMS',
  openGraph: {
    title: {
      template: '%s | Simple Blog',
      default: 'Simple Blog',
    },
    description: 'A simple blog presented by microCMS',
    images: '/ogp.png',
  },
  alternates: {
    canonical: '/',
  },
};

type Props = {
  children: React.ReactNode;
};

export default async function RootLayout({ children }: Props) {
  return (
    <html lang="ja">
      <body>
        <Header />
        <main className={styles.main}>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

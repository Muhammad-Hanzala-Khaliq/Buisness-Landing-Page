import "./globals.css";
import Providers from "./providers";
export const metadata = {
  title: "NextWave Agency – Digital Marketing & Funnels",
  description:
    "Grow your business with expert Meta Ads, performance marketing, and custom landing pages & websites designed to convert visitors into clients.",
  openGraph: {
    title: "NextWave Agency – Digital Marketing & Funnels",
    description:
      "Grow your business with expert Meta Ads, performance marketing, and custom landing pages & websites designed to convert visitors into clients.",
    type: "website",
    url: "https://nextwaveagency.vercel.app/",
    images: [
      {
        url: "https://via.placeholder.com/1200x630.png?text=NextWave+Agency+%7C+Digital+Marketing+%26+Funnels",
        width: 1200,
        height: 630,
        alt: "NextWave Agency - Digital Marketing & Funnels",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@NextWaveAgency",
    title: "NextWave Agency – Digital Marketing & Funnels",
    description:
      "Grow your business with expert Meta Ads, performance marketing, and custom landing pages & websites designed to convert visitors into clients.",
    images: [
      "https://via.placeholder.com/1200x630.png?text=NextWave+Agency+%7C+Digital+Marketing+%26+Funnels",
    ],
  },
};


export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}

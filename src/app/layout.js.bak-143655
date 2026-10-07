import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import BrandToast from "@/components/ui/BrandToast";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });

export const metadata = {
  title: "Tazmeel Apparels — Islamic & Modest Garments Manufacturer",
  description:
    "Dhaka-based manufacturer of premium Islamic and modest clothing since 2020. Thobes, Panjabis, Abayas, Hijabs, and custom apparel for brands.",
  keywords: [
    "Tazmeel Apparels",
    "Islamic clothing manufacturer",
    "modest wear Bangladesh",
    "Thobe manufacturer",
    "Panjabi exporter",
    "Abaya manufacturer Dhaka",
  ],
  icons: {
    icon: [{ url: "/favicon.png", type: "image/png" }],
    apple: [{ url: "/favicon.png", type: "image/png" }],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.png" type="image/png" />
        <link rel="apple-touch-icon" href="/favicon.png" />
        <meta name="theme-color" content="#0F3D2E" />
      </head>
      <body
        suppressHydrationWarning
        className={`${inter.variable} ${playfair.variable} font-sans antialiased`}
      >
        {children}
        <BrandToast />
      </body>
    </html>
  );
}

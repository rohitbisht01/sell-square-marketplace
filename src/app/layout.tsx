import type { Metadata } from "next";
import "./globals.css";
import { DM_Sans, Recursive } from "next/font/google";

const recursive = Recursive({
  subsets: ["latin"],
});

// const dmSans = DM_Sans({
//   subsets: ['latin'],
//   // weight: ['400', '500', '700'], // specify your desired weights
//   // display: 'swap',
//   // // optional: enable CSS variable
//   // variable: '--font-dm-sans',
// });


export const metadata: Metadata = {
  title: "SellSquare – List, Sell, and Buy Products Easily",
  description:
    "SellSquare is a multi-tenant marketplace where creators and sellers can list books, digital products, or physical goods, and buyers can purchase them directly. Your online store, simplified.",
  keywords: [
    "SellSquare",
    "online marketplace",
    "sell books",
    "sell digital products",
    "sell physical goods",
    "creator marketplace",
    "multi-tenant ecommerce",
    "Gumroad alternative",
    "digital store",
    "product listings",
  ],
  // authors: [{ name: "SellSquare" }],
  // openGraph: {
  //   title: "SellSquare – Your Online Selling Square",
  //   description:
  //     "Create your store on SellSquare and start selling digital and physical products to buyers worldwide.",
  //   url: "https://sellsquare.com",
  //   siteName: "SellSquare",
  //   images: [
  //     {
  //       url: "/og-image.png", // replace with your OG image path
  //       width: 1200,
  //       height: 630,
  //       alt: "SellSquare – Online Marketplace",
  //     },
  //   ],
  //   locale: "en_US",
  //   type: "website",
  // },
  // twitter: {
  //   card: "summary_large_image",
  //   title: "SellSquare – List, Sell, and Buy Products Easily",
  //   description:
  //     "Multi-tenant ecommerce platform for creators and sellers to list books, digital goods, and physical products.",
  //   images: ["/og-image.png"], // same as above
  // },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={recursive.className}
      >
        {children}
      </body>
    </html>
  );
}

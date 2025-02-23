import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Jerard Pagalilauan",
  description:
    "A curious and hardworking Bachelor of Science in Information Technology graduate with experience in developing web and desktop apps, who’s dedicated in bringing creative and functional web designs to life through programming.",
  twitter: {
    card: "summary_large_image",
  },
  metadataBase: new URL("https://www.jerardpagalilauan.com/"),
  openGraph: {
    type: "website",
    url: "https://www.jerardpagalilauan.com/",
    title: "Jerard Pagalilauan",
    description: "Jerard Pagalilauan's Personal Web Portfolio",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <head>
        <link
          rel="icon"
          href="/icon?<generated>"
          type="image/<generated>"
          sizes="32x32"
        />
        <link
          rel="apple-touch-icon"
          href="/apple-icon?<generated>"
          type="image/<generated>"
          sizes="180x180"
        />

        {/**opengraph image */}
        <meta property="og:image" content="/opengraph-image?<generated>" />
        <meta property="og:image:type" content="<generated>" />
        <meta property="og:image:width" content="<generated>" />
        <meta property="og:image:height" content="<generated>" />
        <meta property="og:image:alt" content="About Jerard Pagalilauan" />

        {/**twitter image */}
        <meta name="twitter:image" content="/twitter-image?<generated>" />
        <meta name="twitter:image:type" content="<generated>" />
        <meta name="twitter:image:width" content="<generated>" />
        <meta name="twitter:image:height" content="<generated>" />
        <meta property="twitter:image:alt" content="About Jerard Pagalilauan" />
      </head>
      <body
        className={`${poppins.variable} relative min-h-dvh bg-custom-white-dark dark:bg-custom-dark`}
        suppressHydrationWarning={true}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}

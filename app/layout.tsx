import type { Metadata } from "next";
import { Poppins } from "next/font/google";
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
    images: [
      {
        url: "/opengraph-image",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
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
      </head>
      <body
        className={`${poppins.variable} relative min-h-screen bg-custom-white-dark dark:bg-custom-dark`}
      >
        {children}
      </body>
    </html>
  );
}

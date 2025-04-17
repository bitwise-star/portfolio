import { SpeedInsights } from "@vercel/speed-insights/next"
import "./css/globals.css";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import type { Metadata } from "next";

export const generateMetadata = async (): Promise<Metadata> => {
  return {
    title: "Bitwise Star",
    description: "Full Stack and Roblox Game Developer who loves to code a lot of stuff. Welcome to my portfolio!",
    applicationName: "Bitwise Star Portfolio",
    authors: [{ name: "Alice Developer", url: "https://www.linkedin.com/in/alice-developer/" }],
    openGraph: {
      type: "website",
      url: "https://bitwisestar.com",
      siteName: "Bitwise Star Portfolio"
    },
    twitter: {
      card: "summary_large_image"
    }
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={"antialiased dark"}>
        <SpeedInsights/>
        {children}
      </body>
    </html>
  );
}

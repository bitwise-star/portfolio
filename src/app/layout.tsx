import { SpeedInsights } from "@vercel/speed-insights/next"
import "./css/globals.css";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <title>Bitwise Star</title>
        <meta name="description" content="Full Stack and Roblox Game Developer who loves to code a lot of stuff. Welcome to my portfolio!"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <meta property="og:title" content="Bitwise Star"/>
        <meta property="og:description" content="Full Stack and Roblox Game Developer who loves to code a lot of stuff. Welcome to my portfolio!"/>
        <meta property="og:type" content="website"/>
        <meta property="og:url" content="https://bitwisestar.com"/>
        <meta property="og:image" content="https://raw.githubusercontent.com/bitwise-star/portfolio/refs/heads/main/assets/page.png"/>
        <meta property="og:image:alt" content="Bitwise Star Portfolio"/>
        <meta property="og:image:type" content="image/png"/>
        <meta property="og:site_name" content="Bitwise Star Portfolio"/>
        <meta name="twitter:card" content="summary_large_image"/>
        <meta name="twitter:url" content="https://bitwisestar.com"/>
        <meta name="twitter:title" content="Bitwise Star Portfolio"/>
        <meta name="twitter:description" content="Full Stack and Roblox Game Developer who loves to code a lot of stuff. Welcome to my portfolio!"/>
        <meta name="twitter:image" content="https://raw.githubusercontent.com/bitwise-star/portfolio/refs/heads/main/assets/page.png"/>
      </head>
      <body className={"antialiased dark"}>
        <SpeedInsights/>
        {children}
      </body>
    </html>
  );
}

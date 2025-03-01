import type { Metadata } from "next";
import { IBM_Plex_Sans } from "next/font/google";

import { cn } from "@/lib/utils";
import "./globals.css";
import { ClerkProvider, SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";

const IBMPlex = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ['400', '500', '600', '700'],
  variable: '---font-ibm-plex'
});

export const metadata: Metadata = {
  title: "Quill",
  description: "AI powered image generator",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider 
      appearance={{
        variables:{colorPrimary:'#624cf5' }
      }}
    >
      
    <html lang="en">
      <body>
        <main>
          {children}
        </main>
      </body>
    </html>
  </ClerkProvider>
  );
}

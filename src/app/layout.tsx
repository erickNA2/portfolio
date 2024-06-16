import Navbar from "@/components/navbar";
import type { Metadata } from "next";
import { ThemeProvider } from "@/components/theme-provider"
import { roboto, cinzel, inconsolata } from "@/utils/fonts";
import "./globals.css";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title: "Erick Nunes Portfolio",
  description: "Full Stack Web Developer Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${roboto} ${cinzel} ${inconsolata} relative`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html >
  );
}

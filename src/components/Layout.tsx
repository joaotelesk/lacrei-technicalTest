// Components
import { Footer } from "./footer/Footer";
import { Header } from "./header/Header";
// Utilities
import { Nunito } from "next/font/google";

const nunito = Nunito({
  subsets: ["latin"],
  variable: "--font-nunito",
});

// Interfaces
interface LayoutProps {
  children: React.ReactNode;
}

// Hooks

export function Layout({ children }: LayoutProps) {
  return (
    <>
      <div className={`${nunito.variable} font-sans`}>
        <Header />
        {children}
        <Footer />
      </div>
    </>
  );
}

// Components
// Utilities
import { Nunito } from "next/font/google";
import { Header } from "./header/Header";

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
      </div>
    </>
  );
}

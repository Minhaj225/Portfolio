import { Outfit, Ovo } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-outfit",
});

const ovo = Ovo({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-ovo",
});

export const metadata = {
  title: "Portfolio - Minhaj",
  description: "",
};
 // dark:bg-[#11001f] dark:text-white
export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${ovo.variable} scroll-smooth`}
    >
      <body className="antialiased leading-8 overflow-x-hidden dark:bg-[var(--dark-theme)] dark:text-white">
        {children}
      </body>
    </html>
  );
}

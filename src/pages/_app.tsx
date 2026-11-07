import type { AppProps } from "next/app";
import { Chivo, Chivo_Mono } from "next/font/google";
import "@/styles/globals.css";

/* The dealt pairing: Chivo for everything, Chivo Mono for figures, labels and code. */
const chivo = Chivo({ subsets: ["latin"], variable: "--font-chivo", display: "swap" });
const chivoMono = Chivo_Mono({
  subsets: ["latin"],
  variable: "--font-chivo-mono",
  display: "swap",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      {/* the faces reach :root, so the page needs no wrapper element around header/main/footer */}
      <style jsx global>{`
        :root {
          --font-chivo: ${chivo.style.fontFamily};
          --font-chivo-mono: ${chivoMono.style.fontFamily};
        }
      `}</style>
      <Component {...pageProps} />
    </>
  );
}

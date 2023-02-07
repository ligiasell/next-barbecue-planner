import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import clsx from "clsx";

import "../styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  return (
    <div
      className={clsx(
        "flex flex-col justify-between min-h-screen",
        { "bg-primary": router.pathname === "/" },
        { "bg-background": router.pathname !== "/" }
      )}
    >
      <div>
        <nav className="py-20 z-10 bg-primary bg-nav">
          <h1 className="text-center">Agenda de Churras</h1>
        </nav>
        <Component {...pageProps} />
      </div>
      <footer className="h-10 flex justify-center text-sm">
        Developed by Lígia Sell
      </footer>
    </div>
  );
}

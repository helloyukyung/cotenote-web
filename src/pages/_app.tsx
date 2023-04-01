import "@/styles/globals.css";
import "@/styles/miniReset.css";
import "@/styles/font.css";

import { NextPage } from "next";
import type { AppProps } from "next/app";
import { ReactElement, ReactNode, useEffect } from "react";
import { ChakraProvider } from "@chakra-ui/react";
import createCache from "@emotion/cache";
import { CacheProvider } from "@emotion/react";
import { theme } from "@/theme";

type NextPageWithLayout<P = object, IP = P> = NextPage<P, IP> & {
  // eslint-disable-next-line no-unused-vars
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

const emotionCache = createCache({
  key: "emotion-css-cache",
  prepend: true,
});

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout || ((page) => page);

  useEffect(() => {
    function handleResize() {
      const body = document.querySelector("body") ?? document.body;
      body.style.height = `${window.innerHeight}px`;
    }
    handleResize();

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <CacheProvider value={emotionCache}>
      <ChakraProvider theme={theme}>
        {getLayout(<Component {...pageProps} />)}
      </ChakraProvider>
    </CacheProvider>
  );
}

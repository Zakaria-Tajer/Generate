import "styles/global.css";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { store } from "store/store";
import { Toaster } from "react-hot-toast";
import React from "react";
type ComponentWithPageLayout = AppProps & {
  Component: AppProps["Component"] & {
    PageLayout?: React.ComponentType;
  };
};
// commn
export default function MyApp({
  Component,
  pageProps,
}: ComponentWithPageLayout) {
  return (
    <>
      <Provider store={store}>
        {Component.PageLayout ? (
          <Component.PageLayout>
            <Component {...pageProps} />
          </Component.PageLayout>
        ) : (
          <Component {...pageProps} />
        )}

        <Toaster />
      </Provider>
    </>
  );
}

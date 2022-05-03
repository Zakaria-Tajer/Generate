import "styles/global.css";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { store } from "store/store";
import { Toaster } from "react-hot-toast";
export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
    <Provider store={store}>
      <Component {...pageProps} />
      <Toaster />
    </Provider>
    </>
  );
}

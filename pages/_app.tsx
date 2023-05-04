import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import Store from "../src/store/index";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={Store}>
      <Component {...pageProps} />
    </Provider>
  );
}

import "@/styles/globals.css";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import Store from "../src/store/index";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={Store}>
      <DndProvider backend={HTML5Backend}>
        <Component {...pageProps} />
      </DndProvider>
    </Provider>
  );
}

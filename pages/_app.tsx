import Wrapper from "@/Layout/Wrapper/Wrapper";
import "@/styles/globals.css";
import { store } from "@/Toolkit/store";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function App({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <Wrapper>
          <Component {...pageProps} />
          <ToastContainer autoClose={1500} />
        </Wrapper>
      </Provider>
    </QueryClientProvider>
  );
}

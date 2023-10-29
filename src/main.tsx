import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom"; // Sử dụng BrowserRouter thay vì unstable_HistoryRouter

// toast message
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

// antd
import { StyleProvider } from "@ant-design/cssinjs";
import { store } from "store";
import { Provider } from "react-redux";
import { ConfigProvider } from "antd";
import { Suspense } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const queryClient = new QueryClient({
  // https://tanstack.com/query/v4/docs/react/guides/window-focus-refetching
  /**
   * If a user leaves your application and returns and the query data is stale,
   * TanStack Query automatically requests fresh data for you in the background.
   * You can disable this globally or per-query using the refetchOnWindowFocus option:
   */
  // defaultOptions: {
  //   queries: {
  //     refetchOnWindowFocus: false,
  //   },
  // },
});
ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Suspense fallback={<></>}>
      <ToastContainer />
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: "#f9ab00",
            paddingLG: 0,
          },
          components: {
            Tabs: {
              verticalItemPadding: "0",
            },
          },
        }}
      >
        <StyleProvider hashPriority="high">
          <Provider store={store}>
            <QueryClientProvider client={queryClient}>
              <App />
              <ReactQueryDevtools />
            </QueryClientProvider>
          </Provider>
        </StyleProvider>
      </ConfigProvider>
    </Suspense>
  </BrowserRouter>
);

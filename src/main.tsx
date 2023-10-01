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
            <App />
          </Provider>
        </StyleProvider>
      </ConfigProvider>
    </Suspense>
  </BrowserRouter>
);

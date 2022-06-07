import Routes from "@config/routes";
import { useTranslation } from "@hooks";
import "@i18n";
import { Loading } from "@molecules";
import store from "@redux/store";
import "@styles/global.scss";
import { ConfigProvider } from "antd";
import "antd/dist/antd.css";
import en from "antd/lib/locale/en_US";
import jp from "antd/lib/locale/ja_JP";
import React, { Suspense } from "react";
import LoadingOverlayWrapper from "react-loading-overlay-ts";
import { Provider } from "react-redux";

const App: React.FC = (props) => {
  const { i18n } = useTranslation();

  return (
    <Suspense
      fallback={
        <LoadingOverlayWrapper
          active={true}
          spinner
          className="loading-overlay"
        />
      }
    >
      <Provider store={store}>
        <Loading>
          <ConfigProvider locale={i18n.language?.includes("en") ? en : jp}>
            <Routes {...props} />
          </ConfigProvider>
        </Loading>
      </Provider>
    </Suspense>
  );
};

export default App;

import React from "react";
import LoadingOverlayWrapper from "react-loading-overlay-ts";
import { useLoading } from "@hooks";
import styles from "./index.module.scss";

const Loading = ({ children }: { children: JSX.Element }) => {
  const { loading } = useLoading();

  return (
    <LoadingOverlayWrapper active={loading} spinner className={styles.wrapper}>
      {children}
    </LoadingOverlayWrapper>
  );
};

export default Loading;

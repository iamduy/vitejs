import { message } from "antd";
import { useCallback } from "react";

const BaseMessage = () => {
  message.config({
    duration: 2,
  });
  const showError = useCallback((text) => {
    message.error({
      content: text,
    });
  }, []);
  const showSuccess = useCallback((text) => {
    message.success({
      content: text,
    });
  }, []);
  const showInfo = useCallback((text) => {
    message.info({
      content: text,
    });
  }, []);
  const showWarning = useCallback((text) => {
    message.warning({
      content: text,
    });
  }, []);

  return { showError, showSuccess, showInfo, showWarning };
};

export default BaseMessage;

import { BaseButton } from "@atoms";
import { clearAccessToken } from "@helpers";
import { useTranslation } from "@hooks";
import { LanguageSelect } from "@molecules";
import { Col, Layout, Row } from "antd";
import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import styles from "./index.module.scss";
const { Header, Content, Sider } = Layout;
const PrivateLayout: React.FC = () => {
  const { t } = useTranslation();

  const navigate = useNavigate();
  const logOut = () => {
    clearAccessToken();
    navigate("/login");
  };
  const Navbar = () => {
    return (
      <Row>
        <Col span={12}>
          <span className={styles.languageSelect}>
            <LanguageSelect />
          </span>
        </Col>
        <Col span={12} className={styles.navbarRight}>
          <BaseButton className="importCSV" onClick={logOut}>
            {t("logout")}
          </BaseButton>
        </Col>
      </Row>
    );
  };
  return (
    <Layout className={styles.layout}>
      <Header className={styles.header}>
        <Navbar />
      </Header>
      <Layout>
        <Sider
          className={styles.sider}
          trigger={null}
          collapsible
          collapsed={true}
          width={230}
        >
          Sider
        </Sider>
        <Content className={styles.content}>
          <div className={styles.contentBody}>
            <Outlet />
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default PrivateLayout;

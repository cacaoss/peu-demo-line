import React from "react";
import {connect, Link, useIntl} from "umi";
import {Helmet, HelmetProvider} from "react-helmet-async"
import {DefaultFooter, getMenuData, getPageTitle} from "@ant-design/pro-layout"
import styles from "./index.less";
import logo from "@/assets/megmeet.png";

const LoginLayout = props => {
  const {
    route = {
      routes: []
    }
  } = props;
  const {routes = []} = route;
  const {
    children,
    location = {
      pathname: ''
    }
  } = props;

  const {formatMessage} = useIntl();
  const {breadcrumb} = getMenuData(routes);

  const title = getPageTitle({
    pathname: location.pathname,
    breadcrumb,
    formatMessage,
    ...props,
  });

  return (
    <HelmetProvider>
      <Helmet>
        <title>{title}</title>
      </Helmet>

      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.top}>
            <div className={styles.header}>
              <Link to="/">
                <img alt="logo" className={styles.logo} src={logo}/>
                <span className={styles.title}/>
              </Link>
            </div>
            <div className={styles.desc}>麦格米特 水冷Demo线</div>
          </div>
          {children}
        </div>
        <DefaultFooter/>
      </div>
    </HelmetProvider>
  );
};

export default connect(
  ({settings}) => ({...settings})
)(LoginLayout)

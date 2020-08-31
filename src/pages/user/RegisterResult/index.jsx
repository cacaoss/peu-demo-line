import {Button, Result} from 'antd';
import {Link, FormattedMessage} from 'umi';
import React from 'react';
import styles from './style.less';

const actions = (
  <div className={styles.actions}>
    <Link to="/">
      <Button size="large">
        <FormattedMessage id="userandregister-result.register-result.back-home"/>
      </Button>
    </Link>
  </div>
);

const RegisterResult = ({location}) => (
  <Result
    className={styles.registerResult}
    status="success"
    title={
      <div className={styles.title}>
        <FormattedMessage
          id="userandregister-result.register-result.msg"
          values={{
            userName: location.state ? location.state.account : '',
          }}
        />
      </div>
    }
    extra={actions}
  />
);

export default RegisterResult;

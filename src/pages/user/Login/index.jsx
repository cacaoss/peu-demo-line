import React, {useState} from "react";
import {connect, Link, FormattedMessage, formatMessage} from "umi"
import {Alert} from "antd";
import LoginForm from "@/pages/user/Login/components/Login";
import styles from "@/pages/user/Login/style.less";

const {Tab, UserName, Password, Submit} = LoginForm;
const LoginMessage = ({content}) => (
  <Alert
    style={{
      marginBottom: 24,
    }}
    message={content}
    type="error"
    showIcon
  />
);

const Login = props => {
  console.log("LoginPage props：", props);
  const {userLogin = {}, submitting} = props;
  const {status, type: loginType} = userLogin;
  const [type, setType] = useState('account');

  const handleSubmit = values => {
    const {dispatch} = props;
    dispatch({
      type: 'login/login',
      payload: {...values, type},
    });
  };

  return (
    <div className={styles.main}>
      <LoginForm activeKey={type} onTabChange={setType} onSubmit={handleSubmit}>
        <Tab key="account" tab={formatMessage({
          id: 'userandregister.login.tab-login-credentials',
        })}>
          {
            status === 'error'
            && loginType === 'account'
            && !submitting
            && (<LoginMessage content={formatMessage({
              id: 'userandregister.login.message-invalid-credentials',
            })}/>)
          }

          <UserName
            name="userName"
            placeholder={formatMessage({
              id: 'userandregister.login.message-invalid-credentials',
            })}
            autoComplete="off"
            rules={[
              {
                required: true,
                message: formatMessage({
                  id: 'userandregister.login.userName.required',
                }),
              },
            ]}
          />
          <Password
            name="password"
            placeholder="密码: ant.design"
            autoComplete="off"
            rules={[
              {
                required: true,
                message: formatMessage({
                  id: 'userandregister.login.password.required',
                }),
              },
            ]}
          />
        </Tab>
        <Submit loading={submitting}>
          <FormattedMessage id="userandregister.login.login"/>
        </Submit>
        <div className={styles.other}>
          <Link className={styles.register} to="/user/register">
            注册账户
          </Link>
        </div>
      </LoginForm>
    </div>
  );
};

export default connect(
  ({login, loading}) => ({
    userLogin: login,
    submitting: loading.effects['login/login']
  })
)(Login);


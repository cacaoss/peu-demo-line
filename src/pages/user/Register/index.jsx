import {Form, Button, Input, Popover, Progress, message} from 'antd';
import React, {useState, useEffect} from 'react';
import {Link, connect, history, FormattedMessage, formatMessage} from 'umi';
import styles from './style.less';

const FormItem = Form.Item;
const passwordStatusMap = {
  ok: (
    <div className={styles.success}>
      <FormattedMessage id="userandregister.strength.strong"/>
    </div>
  ),
  pass: (
    <div className={styles.warning}>
      <FormattedMessage id="userandregister.strength.medium"/>
    </div>
  ),
  poor: (
    <div className={styles.error}>
      <FormattedMessage id="userandregister.strength.short"/>
    </div>
  ),
};
const passwordProgressMap = {
  ok: 'success',
  pass: 'normal',
  poor: 'exception',
};

const Register = ({submitting, dispatch, userAndregister}) => {
  const [visible, setvisible] = useState(false);
  const [popover, setpopover] = useState(false);
  const confirmDirty = false;

  const [form] = Form.useForm();
  useEffect(() => {
    if (!userAndregister) {
      return;
    }

    const account = form.getFieldValue('userName');

    if (userAndregister.status === 'ok') {
      message.success('注册成功！');
      history.push({
        pathname: '/user/register-result',
        state: {
          account,
        },
      });
    }
  }, [userAndregister]);

  const getPasswordStatus = () => {
    const value = form.getFieldValue('password');

    if (value && value.length > 9) {
      return 'ok';
    }

    if (value && value.length > 5) {
      return 'pass';
    }

    return 'poor';
  };

  const onFinish = values => {
    dispatch({
      type: 'userAndregister/submit',
      payload: {...values},
    });
  };

  const checkConfirm = (_, value) => {
    const promise = Promise;

    if (value && value !== form.getFieldValue('password')) {
      return promise.reject(
        formatMessage({
          id: 'userandregister.password.twice',
        }),
      );
    }

    return promise.resolve();
  };

  const checkPassword = (_, value) => {
    const promise = Promise; // 没有值的情况

    if (!value) {
      setvisible(!!value);
      return promise.reject(
        formatMessage({
          id: 'userandregister.password.required',
        }),
      );
    } // 有值的情况

    if (!visible) {
      setvisible(!!value);
    }

    setpopover(!popover);

    if (value.length < 6) {
      return promise.reject('');
    }

    if (value && confirmDirty) {
      form.validateFields(['confirm']);
    }

    return promise.resolve();
  };

  const renderPasswordProgress = () => {
    const value = form.getFieldValue('password');
    const passwordStatus = getPasswordStatus();
    return value && value.length ? (
      <div className={styles[`progress-${passwordStatus}`]}>
        <Progress
          status={passwordProgressMap[passwordStatus]}
          className={styles.progress}
          strokeWidth={6}
          percent={value.length * 10 > 100 ? 100 : value.length * 10}
          showInfo={false}
        />
      </div>
    ) : null;
  };

  return (
    <div className={styles.main}>
      <h3>
        <FormattedMessage id="userandregister.register.register"/>
      </h3>
      <Form form={form} name="UserRegister" onFinish={onFinish}>
        <FormItem
          name="userName"
          rules={[
            {
              required: true,
              message: formatMessage({
                id: 'userandregister.userName.required',
              }),
            },
          ]}
        >
          <Input
            size="large"
            autoComplete="off"
            placeholder={formatMessage({
              id: 'userandregister.userName.placeholder',
            })}
          />
        </FormItem>
        <Popover
          getPopupContainer={node => {
            if (node && node.parentNode) {
              return node.parentNode;
            }

            return node;
          }}
          content={
            visible && (
              <div
                style={{
                  padding: '4px 0',
                }}
              >
                {passwordStatusMap[getPasswordStatus()]}
                {renderPasswordProgress()}
                <div
                  style={{
                    marginTop: 10,
                  }}
                >
                  <FormattedMessage id="userandregister.strength.msg"/>
                </div>
              </div>
            )
          }
          overlayStyle={{
            width: 240,
          }}
          placement="right"
          visible={visible}
        >
          <FormItem
            name="password"
            className={
              form.getFieldValue('password') &&
              form.getFieldValue('password').length > 0 &&
              styles.password
            }
            rules={[
              {
                validator: checkPassword,
              },
            ]}
          >
            <Input
              size="large"
              type="password"
              autoComplete="off"
              placeholder={formatMessage({
                id: 'userandregister.password.placeholder',
              })}
            />
          </FormItem>
        </Popover>
        <FormItem
          name="confirm"
          rules={[
            {
              required: true,
              message: formatMessage({
                id: 'userandregister.confirm-password.required',
              }),
            },
            {
              validator: checkConfirm,
            },
          ]}
        >
          <Input
            size="large"
            type="password"
            placeholder={formatMessage({
              id: 'userandregister.confirm-password.placeholder',
            })}
          />
        </FormItem>
        <FormItem>
          <Button
            size="large"
            loading={submitting}
            className={styles.submit}
            type="primary"
            htmlType="submit"
          >
            <FormattedMessage id="userandregister.register.register"/>
          </Button>
          <Link className={styles.login} to="/user/login">
            <FormattedMessage id="userandregister.register.sign-in"/>
          </Link>
        </FormItem>
      </Form>
    </div>
  );
};

export default connect(({userAndregister, loading}) => ({
  userAndregister,
  submitting: loading.effects['userAndregister/submit'],
}))(Register);

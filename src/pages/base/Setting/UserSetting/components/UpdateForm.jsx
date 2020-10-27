import React, {useEffect} from 'react';
import {Modal, Form, Input, Button} from 'antd';

const UpdateForm = props => {
  const {modalVisible, onCancel, oldValues, onSubmit} = props;
  const [form] = Form.useForm();

  useEffect(() => {
    console.log(oldValues)
    form.setFieldsValue({
      userName: oldValues.userName
    })
  }, [oldValues]);

  return (
    <Modal
      destroyOnClose
      title="修改用户"
      visible={modalVisible}
      onCancel={() => onCancel()}
      footer={null}
    >
      <Form
        name="basic"
        form={form}
        onFinish={values => onSubmit({...oldValues, ...values})}
      >
        <Form.Item
          label="用户名"
          name="userName"
          rules={[{required: true, message: "用户名不能为空"}]}
        >
          <Input/>
        </Form.Item>

        <Form.Item
          label="新密码"
          name="userPassword"
          rules={[{required: true, message: "密码不能为空"}]}
        >
          <Input.Password/>
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            提交
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default UpdateForm;

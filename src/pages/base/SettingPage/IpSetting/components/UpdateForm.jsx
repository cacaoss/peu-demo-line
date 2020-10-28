import React, {useEffect} from 'react';
import {Modal, Form, Input, Button} from 'antd';

const UpdateForm = props => {
  const {modalVisible, onCancel, oldValues, onSubmit} = props;
  const [form] = Form.useForm();

  useEffect(() => {
    form.setFieldsValue({
      deviceName: oldValues.deviceName,
      deviceDesc: oldValues.deviceDesc,
      deviceIp: oldValues.deviceIp,
      devicePort: oldValues.devicePort,
    })
  }, [oldValues]);

  return (
    <Modal
      destroyOnClose
      title="修改IP配置"
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
          label="设备名"
          name="deviceName"
          rules={[{required: true, message: "设备名不能为空"}]}
        >
          <Input/>
        </Form.Item>
        <Form.Item
          label="描述信息"
          name="deviceDesc"
          rules={[{required: true, message: "描述信息不能为空"}]}
        >
          <Input/>
        </Form.Item>
        <Form.Item
          label="IP"
          name="deviceIp"
          rules={[{required: true, message: "IP不能为空"}]}
        >
          <Input/>
        </Form.Item>
        <Form.Item
          label="端口"
          name="devicePort"
          rules={[{required: true, message: "端口不能为空"}]}
        >
          <Input/>
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

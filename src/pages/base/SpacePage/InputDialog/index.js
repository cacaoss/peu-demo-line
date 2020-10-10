import React, {useState, useEffect} from 'react';
import {Modal, Form, Input,} from 'antd';
import {connect, history} from "umi"
import styles from './style.less';

function InputDialog(props) {
  const [visible, setVisible] = useState(true);
  const [refProductSnInput, setRefProductSnInput] = useState(null);
  const [refTraySnInput, setRefTraySnInput] = useState(null);

  const [form] = Form.useForm();
  const formItemLayout = {
    labelCol: {span: 4},
    wrapperCol: {span: 20},
  };

  const handleOk = () => {
    const {dispatch} = props;
    const {spaceName} = props.location.query;
    const productSn = form.getFieldValue("productSn");
    const traySn = form.getFieldValue("traySn");
    const productType = null;

    dispatch({
      type: 'spaceSn/fetch',
      payload: {
        spaceName,
        productSn,
        traySn,
        productType
      },
    });

    setVisible(false);
    history.push("/base/SpacePage/Dashboard");
  };
  const handleCancel = () => {
    setVisible(false);
    history.push("/base/SpacePage/Dashboard");
  };

  const onProductSnEnterHandle = e => {
    if (e.keyCode === 13) {
      if (refTraySnInput != null) {
        refTraySnInput.focus();
      }
    }
  };
  const onTraySnEnterHandle = e => {
    if (e.keyCode === 13) {
      handleOk();
    }
  };

  useEffect(() => {
    if (refProductSnInput != null) {
      refProductSnInput.focus();
    }
  }, [refProductSnInput]);

  return (
    <Modal
      title="扫描提示框"
      layout='horizontal'
      destroyOnClose
      centered
      closable={false}
      maskClosable={false}
      visible={visible}
      onOk={handleOk}
      onCancel={handleCancel}
    >
      <Form form={form}>
        <Form.Item label="产品条码" {...formItemLayout} name="productSn">
          <Input
            ref={input => {
              setRefProductSnInput(input);
            }}
            placeholder="请输入产品条码" autoComplete="off" onPressEnter={onProductSnEnterHandle}/>
        </Form.Item>
        <Form.Item label="托盘条码" {...formItemLayout} name="traySn">
          <Input
            ref={input => {
              setRefTraySnInput(input);
            }} placeholder="请输入托盘条码" autoComplete="off"
            onPressEnter={onTraySnEnterHandle}/>
        </Form.Item>
      </Form>
    </Modal>
  );
}

export default connect(
  (state) => ({state})
)(InputDialog);

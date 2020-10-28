import React, {useState, useRef} from 'react';
import {PageContainer} from '@ant-design/pro-layout';
import ProTable from '@ant-design/pro-table';
import {PlusOutlined} from '@ant-design/icons';
import {Button, Divider, message} from 'antd';

import CreateForm from './components/CreateForm';
import UpdateForm from './components/UpdateForm';
import {queryRule, updateRule, addRule, removeRule} from './service';

const handleAdd = async fields => {
  const hide = message.loading('正在添加');

  try {
    await addRule({...fields});
    hide();
    message.success('添加成功');
    return true;
  } catch (error) {
    hide();
    message.error('添加失败请重试！');
    return false;
  }
};
const handleUpdate = async fields => {
  const hide = message.loading('正在配置');

  try {
    await updateRule({
      key: fields.key,
      deviceName: fields.deviceName,
      deviceDesc: fields.deviceDesc,
      deviceIp: fields.deviceIp,
      devicePort: fields.devicePort,
    });
    hide();
    message.success('配置成功');
    return true;
  } catch (error) {
    hide();
    message.error('配置失败请重试！');
    return false;
  }
};
const handleRemove = async record => {
  const hide = message.loading('正在删除');

  try {
    await removeRule({
      key: record.key
    });
    hide();
    message.success('删除成功，即将刷新');
    return true;
  } catch (error) {
    hide();
    message.error('删除失败，请重试');
    return false;
  }
};

const IpSetting = () => {
  const [createModalVisible, handleModalVisible] = useState(false);
  const [updateModalVisible, handleUpdateModalVisible] = useState(false);
  const [oldValues, setOldValues] = useState({});
  const actionRef = useRef();

  const columns = [
    {
      title: '设备名',
      dataIndex: 'deviceName',
      valueType: 'text',
    },
    {
      title: '描述信息',
      dataIndex: 'deviceDesc',
      valueType: 'text',
      hideInSearch: true,
    },
    {
      title: 'IP',
      dataIndex: 'deviceIp',
      valueType: 'text',
      hideInSearch: true,
    },
    {
      title: '端口',
      dataIndex: 'devicePort',
      valueType: 'text',
      hideInSearch: true,
    },
    {
      title: '创建时间',
      dataIndex: 'createTime',
      valueType: 'dateTime',
      hideInSearch: true,
      hideInForm: true
    },
    {
      title: '操作',
      dataIndex: 'option',
      valueType: 'option',
      render: (_, record) => (
        <>
          <a
            onClick={() => {
              handleUpdateModalVisible(true);
              setOldValues(record);
            }}
          >
            编辑
          </a>
          <Divider type="vertical"/>
          <a
            onClick={async () => {
              await handleRemove(record);
              if (actionRef.current) {
                actionRef.current.reload();
              }
            }}
          >
            删除
          </a>
        </>
      ),
    },
  ];
  return (
    <PageContainer>
      <ProTable
        headerTitle="IP 列表"
        actionRef={actionRef}
        rowKey="key"
        toolBarRender={() => [
          <Button type="primary" onClick={() => handleModalVisible(true)}>
            <PlusOutlined/> 新建
          </Button>,
        ]}
        request={(params, sorter, filter) => queryRule({...params, sorter, filter})}
        columns={columns}
      />
      <CreateForm
        onCancel={() => handleModalVisible(false)}
        modalVisible={createModalVisible}>
        <ProTable
          onSubmit={async value => {
            const success = await handleAdd(value);

            if (success) {
              handleModalVisible(false);

              if (actionRef.current) {
                actionRef.current.reload();
              }
            }
          }}
          rowKey="key"
          type="form"
          columns={columns}
        />
      </CreateForm>

      {
        oldValues && updateModalVisible ?
          <UpdateForm
            onCancel={() => {
              handleUpdateModalVisible(false);
              setOldValues({});
            }}
            modalVisible={updateModalVisible}
            oldValues={oldValues}
            onSubmit={async value => {
              const success = await handleUpdate(value);

              if (success) {
                handleUpdateModalVisible(false);
                setOldValues({});

                if (actionRef.current) {
                  actionRef.current.reload();
                }
              }
            }}
          />
          : null
      }
    </PageContainer>
  );
};

export default IpSetting;

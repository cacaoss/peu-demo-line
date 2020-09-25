import React, {useState, useEffect} from 'react';
import {Form, Card, Checkbox, Divider, Table} from 'antd';
import {PageContainer} from '@ant-design/pro-layout';
import {connect, FormattedMessage} from 'umi';

const FormItem = Form.Item;
const SpaceDetail = props => {
  const [form] = Form.useForm();
  const formItemLayout = {
    labelCol: {
      span: 1,
    },
    wrapperCol: {
      span: 20
    },
  };

  const {
    spaceDetailItem: {
      resData: spaceDetailItemResData
    },
    spaceDetail: {
      resData: spaceDetailResData
    }
  } = props;

  const [columns, setColumns] = useState([]);
  const [dataSource, setDataSource] = useState([]);

  const checkOptions = [
    {label: '交流电压', value: 'acVoltage'},
    {label: '交流电流', value: 'acCurrent'},

    {label: 'DC输出电压', value: 'dcVoltage'},
    {label: 'DC输出电流', value: 'dcCurrent'},
    {label: '外部电池电压', value: 'batteryVoltage'},

    {label: '原边温度', value: 'inSideTemp'},
    {label: '环境温度', value: 'ambientTemp'},
    {label: '付边温度', value: 'outSideTemp'},
    {label: '底板温度', value: 'boardTemp'},

    {label: 'DC/DC输入电压', value: 'dcDcInputVoltage'},
    {label: 'DC/DC输入电流', value: 'dcDcInputCurrent'},
    {label: 'DC/DC输出电压', value: 'dcDcOutputVoltage'},
    {label: 'DC/DC输出电流', value: 'dcDcOutputCurrent'},
    {label: 'DC/DC温度3', value: 'dcDcTemp3'},
    {label: 'DC/DC温度4', value: 'dcDcTemp4'},
  ];
  const defaultSelectArray = [];
  const defaultColums = [
    {
      title: "仓位描述",
      key: 'spaceDescribe',
      dataIndex: 'spaceDescribe',
    },
    {
      title: "仓位状态",
      key: 'spaceStatu',
      dataIndex: 'spaceStatu',
    },
  ];

  useEffect(() => {
    const {spaceName} = props.location.query;
    getSpaceDetailItemByName(spaceName);
  }, []);
  useEffect(() => {
    if (props.spaceDetailItem.resData) {
      const {resultList} = props.spaceDetailItem.resData;
      const flags = resultList[0];

      Object.keys(flags).forEach(key => {
        if (flags[key] === 1) {
          defaultSelectArray.push(key);
        }
      });

      form.setFieldsValue({
        detailItems: defaultSelectArray
      });

      initColumn(defaultSelectArray);
    }
  }, [spaceDetailItemResData]);

  useEffect(() => {
    const {spaceName} = props.location.query;
    getSpaceByName(spaceName);

    const timer = setInterval(() => {
      getSpaceByName(spaceName);
    }, 5000);

    return () => {
      clearInterval(timer);
    }
  }, []);
  useEffect(() => {
    if (!spaceDetailResData) {
      return;
    }
    const {resultList} = spaceDetailResData;
    if (resultList) {
      setDataSource(resultList);
    }
  }, [spaceDetailResData])

  const onValuesChange = changedValues => {
    const {detailItems} = changedValues;
    setSpaceDetailItem(detailItems);

    initColumn(detailItems);
  };

  function initColumn(newColumn) {
    const tempColumns = newColumn.map(item => ({title: getLabelByValue(item), key: item, dataIndex: item}));
    tempColumns.push({
      title: "记录时间",
      key: 'recordTime',
      dataIndex: 'recordTime',
    });
    setColumns([...defaultColums, ...tempColumns]);
  }

  function getLabelByValue(value) {
    return checkOptions.find(item => item.value === value).label;
  }

  function getSpaceDetailItemByName(spaceName) {
    const {dispatch} = props;
    dispatch({
      type: 'spaceDetailItem/fetch',
      payload: {
        spaceName
      },
    });
  }

  function setSpaceDetailItem(detailItems) {
    const {dispatch} = props;
    const {spaceName} = props.location.query;

    dispatch({
      type: 'spaceDetailItem/setSpaceDetailItem',
      payload: {
        spaceName,
        detailItems
      },

    });
  }

  function getSpaceByName(spaceName) {
    const {dispatch} = props;
    dispatch({
      type: 'spaceDetail/fetch',
      payload: {
        spaceName
      },
    });
  }

  return (
    <PageContainer>
      <Card bordered={false}>
        <Form
          hideRequiredMark
          form={form}
          name="detailForm"
          onValuesChange={onValuesChange}
          initialValues={{
            detailItems: defaultSelectArray
          }}
        >
          <FormItem
            {...formItemLayout}
            name="detailItems"
            label={<FormattedMessage id="space-detail.items.label"/>}
          >
            <Checkbox.Group options={checkOptions}/>
          </FormItem>
        </Form>
        <Divider/>
        <Table columns={columns} dataSource={dataSource} pagination={
          {
            defaultPageSize: 5,
            showSizeChanger: true,
            pageSizeOptions: ["5", "10", "50", "100"],
            showTotal: (total) => {
              return `共 ${total} 条数据`;
            }
          }
        } bordered size="small"/>
      </Card>
    </PageContainer>
  );
};

export default connect(({spaceDetailItem, spaceDetail, loading}) => ({
  spaceDetailItem,
  spaceDetail,
  loading: loading.models.spaceDetail,
}))(SpaceDetail);

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
  const defaultOptions = ["acVoltage", "acCurrent", "dcVoltage", "dcCurrent", "batteryVoltage"];

  const initColums = [
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
  const [columns, setColumns] = useState(() => {
    const defaultColumns = defaultOptions.map(item => ({title: getLabelByValue(item), key: item, dataIndex: item}));
    defaultColumns.push({
      title: "记录时间",
      key: 'recordTime',
      dataIndex: 'recordTime',
    });
    return [...initColums, ...defaultColumns];
  });

  const initDataSource = [
    {
      key: "SA01-1",

      spaceName: "SA01-1",
      spaceDescribe: "SA01-1",
      spaceStatu: "测试中",

      acVoltage: "220V",
      acCurrent: "17A",

      dcVoltage: "360V",
      dcCurrent: "14A",
      batteryVoltage: "13.9A",

      inSideTemp: "30",
      ambientTemp: "40",
      outSideTemp: "50",
      boardTemp: "60",

      dcDcInputVoltage: "370",
      dcDcInputCurrent: "2A",
      dcDcOutputVoltage: "14V",
      dcDcOutputCurrent: "52.8A",
      dcDcTemp3: "36.8",
      dcDcTemp4: "40.5",
      recordTime: "2020-09-22 16:15:15",
    },
    {
      key: "SA01-1",

      spaceName: "SA01-1",
      spaceDescribe: "SA01-1",
      spaceStatu: "测试中",

      acVoltage: "220V",
      acCurrent: "17A",

      dcVoltage: "360V",
      dcCurrent: "14A",
      batteryVoltage: "13.9A",

      inSideTemp: "30",
      ambientTemp: "40",
      outSideTemp: "50",
      boardTemp: "60",

      dcDcInputVoltage: "370",
      dcDcInputCurrent: "2A",
      dcDcOutputVoltage: "14V",
      dcDcOutputCurrent: "52.8A",
      dcDcTemp3: "36.8",
      dcDcTemp4: "40.5",
      recordTime: "2020-09-22 16:15:15",
    },
    {
      key: "SA01-1",

      spaceName: "SA01-1",
      spaceDescribe: "SA01-1",
      spaceStatu: "测试中",

      acVoltage: "220V",
      acCurrent: "17A",

      dcVoltage: "360V",
      dcCurrent: "14A",
      batteryVoltage: "13.9A",

      inSideTemp: "30",
      ambientTemp: "40",
      outSideTemp: "50",
      boardTemp: "60",

      dcDcInputVoltage: "370",
      dcDcInputCurrent: "2A",
      dcDcOutputVoltage: "14V",
      dcDcOutputCurrent: "52.8A",
      dcDcTemp3: "36.8",
      dcDcTemp4: "40.5",
      recordTime: "2020-09-22 16:15:15",
    },
    {
      key: "SA01-1",

      spaceName: "SA01-1",
      spaceDescribe: "SA01-1",
      spaceStatu: "测试中",

      acVoltage: "220V",
      acCurrent: "17A",

      dcVoltage: "360V",
      dcCurrent: "14A",
      batteryVoltage: "13.9A",

      inSideTemp: "30",
      ambientTemp: "40",
      outSideTemp: "50",
      boardTemp: "60",

      dcDcInputVoltage: "370",
      dcDcInputCurrent: "2A",
      dcDcOutputVoltage: "14V",
      dcDcOutputCurrent: "52.8A",
      dcDcTemp3: "36.8",
      dcDcTemp4: "40.5",
      recordTime: "2020-09-22 16:15:15",
    },
    {
      key: "SA01-1",

      spaceName: "SA01-1",
      spaceDescribe: "SA01-1",
      spaceStatu: "测试中",

      acVoltage: "220V",
      acCurrent: "17A",

      dcVoltage: "360V",
      dcCurrent: "14A",
      batteryVoltage: "13.9A",

      inSideTemp: "30",
      ambientTemp: "40",
      outSideTemp: "50",
      boardTemp: "60",

      dcDcInputVoltage: "370",
      dcDcInputCurrent: "2A",
      dcDcOutputVoltage: "14V",
      dcDcOutputCurrent: "52.8A",
      dcDcTemp3: "36.8",
      dcDcTemp4: "40.5",
      recordTime: "2020-09-22 16:15:15",
    },
    {
      key: "SA01-1",

      spaceName: "SA01-1",
      spaceDescribe: "SA01-1",
      spaceStatu: "测试中",

      acVoltage: "220V",
      acCurrent: "17A",

      dcVoltage: "360V",
      dcCurrent: "14A",
      batteryVoltage: "13.9A",

      inSideTemp: "30",
      ambientTemp: "40",
      outSideTemp: "50",
      boardTemp: "60",

      dcDcInputVoltage: "370",
      dcDcInputCurrent: "2A",
      dcDcOutputVoltage: "14V",
      dcDcOutputCurrent: "52.8A",
      dcDcTemp3: "36.8",
      dcDcTemp4: "40.5",
      recordTime: "2020-09-22 16:15:15",
    },
    {
      key: "SA01-1",

      spaceName: "SA01-1",
      spaceDescribe: "SA01-1",
      spaceStatu: "测试中",

      acVoltage: "220V",
      acCurrent: "17A",

      dcVoltage: "360V",
      dcCurrent: "14A",
      batteryVoltage: "13.9A",

      inSideTemp: "30",
      ambientTemp: "40",
      outSideTemp: "50",
      boardTemp: "60",

      dcDcInputVoltage: "370",
      dcDcInputCurrent: "2A",
      dcDcOutputVoltage: "14V",
      dcDcOutputCurrent: "52.8A",
      dcDcTemp3: "36.8",
      dcDcTemp4: "40.5",
      recordTime: "2020-09-22 16:15:15",
    },
    {
      key: "SA01-1",

      spaceName: "SA01-1",
      spaceDescribe: "SA01-1",
      spaceStatu: "测试中",

      acVoltage: "220V",
      acCurrent: "17A",

      dcVoltage: "360V",
      dcCurrent: "14A",
      batteryVoltage: "13.9A",

      inSideTemp: "30",
      ambientTemp: "40",
      outSideTemp: "50",
      boardTemp: "60",

      dcDcInputVoltage: "370",
      dcDcInputCurrent: "2A",
      dcDcOutputVoltage: "14V",
      dcDcOutputCurrent: "52.8A",
      dcDcTemp3: "36.8",
      dcDcTemp4: "40.5",
      recordTime: "2020-09-22 16:15:15",
    },
    {
      key: "SA01-1",

      spaceName: "SA01-1",
      spaceDescribe: "SA01-1",
      spaceStatu: "测试中",

      acVoltage: "220V",
      acCurrent: "17A",

      dcVoltage: "360V",
      dcCurrent: "14A",
      batteryVoltage: "13.9A",

      inSideTemp: "30",
      ambientTemp: "40",
      outSideTemp: "50",
      boardTemp: "60",

      dcDcInputVoltage: "370",
      dcDcInputCurrent: "2A",
      dcDcOutputVoltage: "14V",
      dcDcOutputCurrent: "52.8A",
      dcDcTemp3: "36.8",
      dcDcTemp4: "40.5",
      recordTime: "2020-09-22 16:15:15",
    },
    {
      key: "SA01-1",

      spaceName: "SA01-1",
      spaceDescribe: "SA01-1",
      spaceStatu: "测试中",

      acVoltage: "220V",
      acCurrent: "17A",

      dcVoltage: "360V",
      dcCurrent: "14A",
      batteryVoltage: "13.9A",

      inSideTemp: "30",
      ambientTemp: "40",
      outSideTemp: "50",
      boardTemp: "60",

      dcDcInputVoltage: "370",
      dcDcInputCurrent: "2A",
      dcDcOutputVoltage: "14V",
      dcDcOutputCurrent: "52.8A",
      dcDcTemp3: "36.8",
      dcDcTemp4: "40.5",
      recordTime: "2020-09-22 16:15:15",
    },
    {
      key: "SA01-1",

      spaceName: "SA01-1",
      spaceDescribe: "SA01-1",
      spaceStatu: "测试中",

      acVoltage: "220V",
      acCurrent: "17A",

      dcVoltage: "360V",
      dcCurrent: "14A",
      batteryVoltage: "13.9A",

      inSideTemp: "30",
      ambientTemp: "40",
      outSideTemp: "50",
      boardTemp: "60",

      dcDcInputVoltage: "370",
      dcDcInputCurrent: "2A",
      dcDcOutputVoltage: "14V",
      dcDcOutputCurrent: "52.8A",
      dcDcTemp3: "36.8",
      dcDcTemp4: "40.5",
      recordTime: "2020-09-22 16:15:15",
    },
    {
      key: "SA01-1",

      spaceName: "SA01-1",
      spaceDescribe: "SA01-1",
      spaceStatu: "测试中",

      acVoltage: "220V",
      acCurrent: "17A",

      dcVoltage: "360V",
      dcCurrent: "14A",
      batteryVoltage: "13.9A",

      inSideTemp: "30",
      ambientTemp: "40",
      outSideTemp: "50",
      boardTemp: "60",

      dcDcInputVoltage: "370",
      dcDcInputCurrent: "2A",
      dcDcOutputVoltage: "14V",
      dcDcOutputCurrent: "52.8A",
      dcDcTemp3: "36.8",
      dcDcTemp4: "40.5",
      recordTime: "2020-09-22 16:15:15",
    },
    {
      key: "SA01-1",

      spaceName: "SA01-1",
      spaceDescribe: "SA01-1",
      spaceStatu: "测试中",

      acVoltage: "220V",
      acCurrent: "17A",

      dcVoltage: "360V",
      dcCurrent: "14A",
      batteryVoltage: "13.9A",

      inSideTemp: "30",
      ambientTemp: "40",
      outSideTemp: "50",
      boardTemp: "60",

      dcDcInputVoltage: "370",
      dcDcInputCurrent: "2A",
      dcDcOutputVoltage: "14V",
      dcDcOutputCurrent: "52.8A",
      dcDcTemp3: "36.8",
      dcDcTemp4: "40.5",
      recordTime: "2020-09-22 16:15:15",
    },
    {
      key: "SA01-1",

      spaceName: "SA01-1",
      spaceDescribe: "SA01-1",
      spaceStatu: "测试中",

      acVoltage: "220V",
      acCurrent: "17A",

      dcVoltage: "360V",
      dcCurrent: "14A",
      batteryVoltage: "13.9A",

      inSideTemp: "30",
      ambientTemp: "40",
      outSideTemp: "50",
      boardTemp: "60",

      dcDcInputVoltage: "370",
      dcDcInputCurrent: "2A",
      dcDcOutputVoltage: "14V",
      dcDcOutputCurrent: "52.8A",
      dcDcTemp3: "36.8",
      dcDcTemp4: "40.5",
      recordTime: "2020-09-22 16:15:15",
    },
    {
      key: "SA01-1",

      spaceName: "SA01-1",
      spaceDescribe: "SA01-1",
      spaceStatu: "测试中",

      acVoltage: "220V",
      acCurrent: "17A",

      dcVoltage: "360V",
      dcCurrent: "14A",
      batteryVoltage: "13.9A",

      inSideTemp: "30",
      ambientTemp: "40",
      outSideTemp: "50",
      boardTemp: "60",

      dcDcInputVoltage: "370",
      dcDcInputCurrent: "2A",
      dcDcOutputVoltage: "14V",
      dcDcOutputCurrent: "52.8A",
      dcDcTemp3: "36.8",
      dcDcTemp4: "40.5",
      recordTime: "2020-09-22 16:15:15",
    },
    {
      key: "SA01-1",

      spaceName: "SA01-1",
      spaceDescribe: "SA01-1",
      spaceStatu: "测试中",

      acVoltage: "220V",
      acCurrent: "17A",

      dcVoltage: "360V",
      dcCurrent: "14A",
      batteryVoltage: "13.9A",

      inSideTemp: "30",
      ambientTemp: "40",
      outSideTemp: "50",
      boardTemp: "60",

      dcDcInputVoltage: "370",
      dcDcInputCurrent: "2A",
      dcDcOutputVoltage: "14V",
      dcDcOutputCurrent: "52.8A",
      dcDcTemp3: "36.8",
      dcDcTemp4: "40.5",
      recordTime: "2020-09-22 16:15:15",
    },
    {
      key: "SA01-1",

      spaceName: "SA01-1",
      spaceDescribe: "SA01-1",
      spaceStatu: "测试中",

      acVoltage: "220V",
      acCurrent: "17A",

      dcVoltage: "360V",
      dcCurrent: "14A",
      batteryVoltage: "13.9A",

      inSideTemp: "30",
      ambientTemp: "40",
      outSideTemp: "50",
      boardTemp: "60",

      dcDcInputVoltage: "370",
      dcDcInputCurrent: "2A",
      dcDcOutputVoltage: "14V",
      dcDcOutputCurrent: "52.8A",
      dcDcTemp3: "36.8",
      dcDcTemp4: "40.5",
      recordTime: "2020-09-22 16:15:15",
    },
    {
      key: "SA01-1",

      spaceName: "SA01-1",
      spaceDescribe: "SA01-1",
      spaceStatu: "测试中",

      acVoltage: "220V",
      acCurrent: "17A",

      dcVoltage: "360V",
      dcCurrent: "14A",
      batteryVoltage: "13.9A",

      inSideTemp: "30",
      ambientTemp: "40",
      outSideTemp: "50",
      boardTemp: "60",

      dcDcInputVoltage: "370",
      dcDcInputCurrent: "2A",
      dcDcOutputVoltage: "14V",
      dcDcOutputCurrent: "52.8A",
      dcDcTemp3: "36.8",
      dcDcTemp4: "40.5",
      recordTime: "2020-09-22 16:15:15",
    },
    {
      key: "SA01-1",

      spaceName: "SA01-1",
      spaceDescribe: "SA01-1",
      spaceStatu: "测试中",

      acVoltage: "220V",
      acCurrent: "17A",

      dcVoltage: "360V",
      dcCurrent: "14A",
      batteryVoltage: "13.9A",

      inSideTemp: "30",
      ambientTemp: "40",
      outSideTemp: "50",
      boardTemp: "60",

      dcDcInputVoltage: "370",
      dcDcInputCurrent: "2A",
      dcDcOutputVoltage: "14V",
      dcDcOutputCurrent: "52.8A",
      dcDcTemp3: "36.8",
      dcDcTemp4: "40.5",
      recordTime: "2020-09-22 16:15:15",
    },
    {
      key: "SA01-1",

      spaceName: "SA01-1",
      spaceDescribe: "SA01-1",
      spaceStatu: "测试中",

      acVoltage: "220V",
      acCurrent: "17A",

      dcVoltage: "360V",
      dcCurrent: "14A",
      batteryVoltage: "13.9A",

      inSideTemp: "30",
      ambientTemp: "40",
      outSideTemp: "50",
      boardTemp: "60",

      dcDcInputVoltage: "370",
      dcDcInputCurrent: "2A",
      dcDcOutputVoltage: "14V",
      dcDcOutputCurrent: "52.8A",
      dcDcTemp3: "36.8",
      dcDcTemp4: "40.5",
      recordTime: "2020-09-22 16:15:15",
    },
    {
      key: "SA01-1",

      spaceName: "SA01-1",
      spaceDescribe: "SA01-1",
      spaceStatu: "测试中",

      acVoltage: "220V",
      acCurrent: "17A",

      dcVoltage: "360V",
      dcCurrent: "14A",
      batteryVoltage: "13.9A",

      inSideTemp: "30",
      ambientTemp: "40",
      outSideTemp: "50",
      boardTemp: "60",

      dcDcInputVoltage: "370",
      dcDcInputCurrent: "2A",
      dcDcOutputVoltage: "14V",
      dcDcOutputCurrent: "52.8A",
      dcDcTemp3: "36.8",
      dcDcTemp4: "40.5",
      recordTime: "2020-09-22 16:15:15",
    },
    {
      key: "SA01-1",

      spaceName: "SA01-1",
      spaceDescribe: "SA01-1",
      spaceStatu: "测试中",

      acVoltage: "220V",
      acCurrent: "17A",

      dcVoltage: "360V",
      dcCurrent: "14A",
      batteryVoltage: "13.9A",

      inSideTemp: "30",
      ambientTemp: "40",
      outSideTemp: "50",
      boardTemp: "60",

      dcDcInputVoltage: "370",
      dcDcInputCurrent: "2A",
      dcDcOutputVoltage: "14V",
      dcDcOutputCurrent: "52.8A",
      dcDcTemp3: "36.8",
      dcDcTemp4: "40.5",
      recordTime: "2020-09-22 16:15:15",
    },
    {
      key: "SA01-1",

      spaceName: "SA01-1",
      spaceDescribe: "SA01-1",
      spaceStatu: "测试中",

      acVoltage: "220V",
      acCurrent: "17A",

      dcVoltage: "360V",
      dcCurrent: "14A",
      batteryVoltage: "13.9A",

      inSideTemp: "30",
      ambientTemp: "40",
      outSideTemp: "50",
      boardTemp: "60",

      dcDcInputVoltage: "370",
      dcDcInputCurrent: "2A",
      dcDcOutputVoltage: "14V",
      dcDcOutputCurrent: "52.8A",
      dcDcTemp3: "36.8",
      dcDcTemp4: "40.5",
      recordTime: "2020-09-22 16:15:15",
    },
    {
      key: "SA01-1",

      spaceName: "SA01-1",
      spaceDescribe: "SA01-1",
      spaceStatu: "测试中",

      acVoltage: "220V",
      acCurrent: "17A",

      dcVoltage: "360V",
      dcCurrent: "14A",
      batteryVoltage: "13.9A",

      inSideTemp: "30",
      ambientTemp: "40",
      outSideTemp: "50",
      boardTemp: "60",

      dcDcInputVoltage: "370",
      dcDcInputCurrent: "2A",
      dcDcOutputVoltage: "14V",
      dcDcOutputCurrent: "52.8A",
      dcDcTemp3: "36.8",
      dcDcTemp4: "40.5",
      recordTime: "2020-09-22 16:15:15",
    },
    {
      key: "SA01-1",

      spaceName: "SA01-1",
      spaceDescribe: "SA01-1",
      spaceStatu: "测试中",

      acVoltage: "220V",
      acCurrent: "17A",

      dcVoltage: "360V",
      dcCurrent: "14A",
      batteryVoltage: "13.9A",

      inSideTemp: "30",
      ambientTemp: "40",
      outSideTemp: "50",
      boardTemp: "60",

      dcDcInputVoltage: "370",
      dcDcInputCurrent: "2A",
      dcDcOutputVoltage: "14V",
      dcDcOutputCurrent: "52.8A",
      dcDcTemp3: "36.8",
      dcDcTemp4: "40.5",
      recordTime: "2020-09-22 16:15:15",
    },
    {
      key: "SA01-1",

      spaceName: "SA01-1",
      spaceDescribe: "SA01-1",
      spaceStatu: "测试中",

      acVoltage: "220V",
      acCurrent: "17A",

      dcVoltage: "360V",
      dcCurrent: "14A",
      batteryVoltage: "13.9A",

      inSideTemp: "30",
      ambientTemp: "40",
      outSideTemp: "50",
      boardTemp: "60",

      dcDcInputVoltage: "370",
      dcDcInputCurrent: "2A",
      dcDcOutputVoltage: "14V",
      dcDcOutputCurrent: "52.8A",
      dcDcTemp3: "36.8",
      dcDcTemp4: "40.5",
      recordTime: "2020-09-22 16:15:15",
    },
    {
      key: "SA01-1",

      spaceName: "SA01-1",
      spaceDescribe: "SA01-1",
      spaceStatu: "测试中",

      acVoltage: "220V",
      acCurrent: "17A",

      dcVoltage: "360V",
      dcCurrent: "14A",
      batteryVoltage: "13.9A",

      inSideTemp: "30",
      ambientTemp: "40",
      outSideTemp: "50",
      boardTemp: "60",

      dcDcInputVoltage: "370",
      dcDcInputCurrent: "2A",
      dcDcOutputVoltage: "14V",
      dcDcOutputCurrent: "52.8A",
      dcDcTemp3: "36.8",
      dcDcTemp4: "40.5",
      recordTime: "2020-09-22 16:15:15",
    },
    {
      key: "SA01-1",

      spaceName: "SA01-1",
      spaceDescribe: "SA01-1",
      spaceStatu: "测试中",

      acVoltage: "220V",
      acCurrent: "17A",

      dcVoltage: "360V",
      dcCurrent: "14A",
      batteryVoltage: "13.9A",

      inSideTemp: "30",
      ambientTemp: "40",
      outSideTemp: "50",
      boardTemp: "60",

      dcDcInputVoltage: "370",
      dcDcInputCurrent: "2A",
      dcDcOutputVoltage: "14V",
      dcDcOutputCurrent: "52.8A",
      dcDcTemp3: "36.8",
      dcDcTemp4: "40.5",
      recordTime: "2020-09-22 16:15:15",
    },
    {
      key: "SA01-1",

      spaceName: "SA01-1",
      spaceDescribe: "SA01-1",
      spaceStatu: "测试中",

      acVoltage: "220V",
      acCurrent: "17A",

      dcVoltage: "360V",
      dcCurrent: "14A",
      batteryVoltage: "13.9A",

      inSideTemp: "30",
      ambientTemp: "40",
      outSideTemp: "50",
      boardTemp: "60",

      dcDcInputVoltage: "370",
      dcDcInputCurrent: "2A",
      dcDcOutputVoltage: "14V",
      dcDcOutputCurrent: "52.8A",
      dcDcTemp3: "36.8",
      dcDcTemp4: "40.5",
      recordTime: "2020-09-22 16:15:15",
    },
    {
      key: "SA01-1",

      spaceName: "SA01-1",
      spaceDescribe: "SA01-3",
      spaceStatu: "测试中",

      acVoltage: "220V",
      acCurrent: "17A",

      dcVoltage: "360V",
      dcCurrent: "14A",
      batteryVoltage: "13.9A",

      inSideTemp: "30",
      ambientTemp: "40",
      outSideTemp: "50",
      boardTemp: "60",

      dcDcInputVoltage: "370",
      dcDcInputCurrent: "2A",
      dcDcOutputVoltage: "14V",
      dcDcOutputCurrent: "52.8A",
      dcDcTemp3: "36.8",
      dcDcTemp4: "40.5",
      recordTime: "2020-09-22 16:15:15",
    },
  ];
  const [dataSource, setDataSource] = useState(initDataSource);

  const onValuesChange = changedValues => {
    const {detailItems} = changedValues;
    const tempColumns = detailItems.map(item => ({title: getLabelByValue(item), key: item, dataIndex: item}));
    tempColumns.push({
      title: "记录时间",
      key: 'recordTime',
      dataIndex: 'recordTime',
    });

    setColumns([...initColums, ...tempColumns]);
    setDataSource(initDataSource);
  };

  function getLabelByValue(value) {
    return checkOptions.find(item => item.value === value).label;
  }

  function getSpaceByName(name) {
    const {dispatch} = props;
    dispatch({
      type: 'spaceDetail/fetch',
      payload: {
        name
      },
    });
  }

  useEffect(() => {
    const timer = setInterval(() => {
      const {name} = props.location.query;
      getSpaceByName(name);
    }, 1000);

    return () => {
      clearInterval(timer);
    }
  });

  return (
    <PageContainer>
      <Card bordered={false}>
        <Form
          hideRequiredMark
          form={form}
          name="detailForm"
          onValuesChange={onValuesChange}
          initialValues={
            {
              detailItems: defaultOptions
            }
          }
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
            pageSizeOptions:["5","10","50","100"],
            showTotal: (total) => {
              return `共 ${total} 条数据`;
            }
          }
        } bordered size="small"/>
      </Card>
    </PageContainer>
  );
};

export default connect(({spaceDetail, loading}) => ({
  loading: loading.models.spaceDetail,
  spaceDetail
}))(SpaceDetail);

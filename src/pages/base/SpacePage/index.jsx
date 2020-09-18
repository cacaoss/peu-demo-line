import React, {Component} from 'react';
import {PageContainer} from '@ant-design/pro-layout';
import {List, Card, Typography, Space} from 'antd';
import {connect} from "umi"
import styles from './style.less';

const {Title, Text} = Typography;

@connect(
  ({spaceList, loading}) => ({
    spaceList,
    loading: loading.models.spaceList,
  })
)
class SpacePage extends Component {
  componentDidMount() {
    this.timer = setInterval(() => this.getSpaceList(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  getSpaceList() {
    const {dispatch} = this.props;
    dispatch({
      type: 'spaceList/fetch',
      payload: {
        count: 6,
      },
    });
  }

  cardClickHandle(id) {
    console.log(id)
  };

  render() {
    const {
      spaceList : {resData}
    } = this.props;

    const bodyStyle = {
      fontSize: 16,
      border: "1px dashed rebeccapurple",
    };

    return (
      <PageContainer>
        <div className={styles.cardList}>
          {
            resData ? (<List
              rowKey="id"
              grid={{
                gutter: 16,
                column: 3,
              }}
              dataSource={[...resData.spaceList]}

              renderItem={item => {
                if (item && item.spaceName) {
                  return (
                    <List.Item key={item.spaceName}>
                      <Card
                        hoverable
                        className={styles.card}
                        bodyStyle={bodyStyle}
                        onClick={() => this.cardClickHandle(item.spaceName)}
                      >

                        <Space direction="vertical" size={1}>
                          <Title level={4}>{item.spaceDescribe}</Title>
                          <Text strong>产品条码：{item.sn}</Text>
                          <Text strong>产品类型：{item.model}</Text>
                          <Text strong>产品状态：{item.spaceStatu}</Text>
                          <Text strong>开始时间：{item.inputTime}</Text>
                          <Text strong>测试耗时：{item.testTime} (s)</Text>
                        </Space>
                      </Card>
                    </List.Item>
                  );
                }
                return null;
              }}
            />):null
          }
        </div>
      </PageContainer>
    );
  }
}

export default SpacePage;

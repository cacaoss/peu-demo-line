import React, {Component} from 'react';
import {PageContainer} from '@ant-design/pro-layout';
import {List, Card, Typography, Space} from 'antd';
import {ContextMenu, MenuItem, ContextMenuTrigger} from "react-contextmenu";
import {connect, Link} from "umi"
import "./contextmenu.css"
import styles from './style.less';

const {Title, Text} = Typography;
const MENU_TYPE = 'MULTI';

function collect(props) {
  return {name: props.name};
}

@connect(
  ({spaceList, loading}) => ({
    spaceList,
    loading: loading.models.spaceList,
  })
)
class Dashboard extends Component {
  componentDidMount() {
    this.timer = setInterval(() => this.getSpaceList(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  handleClick = (e, data) => {
    if (data.action.toLowerCase() === "clear") {
      this.setSpaceClear(data.name);
    } else if (data.action.toLowerCase() === "lock") {
      this.setSpaceDisable(data.name);
    } else if (data.action.toLowerCase() === "unlock") {
      this.setSpaceEnable(data.name);
    }
  };

  getSpaceList() {
    const {dispatch} = this.props;
    dispatch({
      type: 'spaceList/fetch',
      payload: {
        count: 6,
      },
    });
  }

  setSpaceClear(spaceName) {
    const {dispatch} = this.props;
    dispatch({
      type: 'spaceMenu/clearFetch',
      payload: {
        spaceName
      },
    });
  }

  setSpaceDisable(spaceName) {
    const {dispatch} = this.props;
    dispatch({
      type: 'spaceMenu/disableFetch',
      payload: {
        spaceName
      },
    });
  }

  setSpaceEnable(spaceName) {
    const {dispatch} = this.props;
    dispatch({
      type: 'spaceMenu/enableFetch',
      payload: {
        spaceName
      },
    });
  }

  calcClassName(item) {
    let className = styles.card;

    if (item.spaceStatu === "就绪") {
      className = `${styles.card} ${styles.ready}`;
    } else if (item.spaceStatu === "测试中") {
      className = `${styles.card} ${styles.running}`;
    } else if (item.spaceStatu === "测试成功") {
      className = `${styles.card} ${styles.pass}`;
    } else if (item.spaceStatu === "测试失败") {
      className = `${styles.card} ${styles.fail}`;
    } else if ((item.spaceStatu === "手动禁用") || (item.spaceStatu === "程序禁用")) {
      className = `${styles.card} ${styles.disable}`;
    }
    return className;
  }

  render() {
    const {
      spaceList: {resData}
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
              dataSource={[...resData.resultList]}

              renderItem={item => {
                if (item && item.spaceName) {
                  return (
                    <List.Item key={item.spaceName}>
                      <ContextMenuTrigger
                        id={MENU_TYPE}
                        name={item.spaceName}
                        holdToDisplay={100}
                        collect={collect}
                        className='example-multiple-targets well'>

                        <Link to={{
                          pathname: "/base/SpacePage/Wrapper",
                          query: {
                            spaceName: item.spaceName,
                            spaceStatu: item.spaceStatu,
                          }
                        }}>
                          <Card
                            hoverable
                            className={this.calcClassName(item)}
                            bodyStyle={bodyStyle}>
                            <Space direction="vertical" size={1}>
                              <Title level={4}>{item.spaceDescribe}</Title>
                              <Text strong>产品条码：{item.productSn}</Text>
                              <Text strong>产品条码：{item.traySn}</Text>
                              <Text strong>产品类型：{item.productType}</Text>
                              <Text strong>产品状态：{item.spaceStatu}</Text>
                              <Text strong>开始时间：{item.inputTime}</Text>
                              <Text strong>测试耗时：{item.testTime} (s)</Text>
                            </Space>
                          </Card>
                        </Link>

                      </ContextMenuTrigger>
                    </List.Item>
                  );
                }
                return null;
              }}
            />) : null
          }
        </div>
        <ContextMenu id={MENU_TYPE}>
          <MenuItem onClick={this.handleClick} data={{action: 'Clear'}}>清除状态</MenuItem>
          <MenuItem onClick={this.handleClick} data={{action: 'Lock'}}>禁用库位</MenuItem>
          <MenuItem onClick={this.handleClick} data={{action: 'UnLock'}}>启用库位</MenuItem>
        </ContextMenu>
      </PageContainer>
    );
  }
}

export default Dashboard;

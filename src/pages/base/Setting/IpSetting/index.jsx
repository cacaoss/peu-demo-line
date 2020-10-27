import React, {Component} from 'react';
import {PageContainer} from '@ant-design/pro-layout';
import {connect} from "umi"

@connect(
  (state) => ({state})
)
class Dashboard extends Component {
  render() {
    return (
      <PageContainer>
        <div>设置页</div>
      </PageContainer>
    );
  }
}

export default Dashboard;

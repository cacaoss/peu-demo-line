import React, {Component} from 'react';
import {PageContainer} from '@ant-design/pro-layout';
import {connect} from "umi"

@connect(
  ({state}) => ({state})
)
class TestPage extends Component {
  render() {
    return (
      <PageContainer>
        <h1>Test Page</h1>

      </PageContainer>
    );
  }
}

export default TestPage;

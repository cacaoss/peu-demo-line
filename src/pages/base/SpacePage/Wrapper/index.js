import React, {Component} from 'react';
import {connect, history} from "umi"

@connect((state) => ({state}))
class Wrapper extends Component {
  componentDidMount() {
    const {spaceName, spaceStatu} = this.props.location.query;
    this.spaceName = spaceName;
    this.spaceStatu = spaceStatu;

    if (this.spaceStatu === "空闲") {
      history.push({
        pathname: '/base/SpacePage/InputDialog',
        query: {
          spaceName
        }
      });
    } else {
      history.push({
        pathname: '/base/SpacePage/SpaceDetail',
        query: {
          spaceName
        }
      });
    }
  }

  render() {
    return (<></>)
  }
}

export default Wrapper;

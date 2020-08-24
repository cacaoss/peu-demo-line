import React from "react";
import {connect} from "umi"

const Login = props => {

  console.log("LoginPage props：", props);

  return (
    <div>
      啥也不是
    </div>
  );
};

export default connect(
  (state) => ({state})
)(Login);

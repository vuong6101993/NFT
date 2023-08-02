import { Layout } from "antd";
import styled from "styled-components";

const SignUpWrapper = styled(Layout)`
  min-height: 100vh;
  background: #fff;
  .login-bg {
    width: 100%;
    height: 100vh;
    object-fit: cover;
    display: block;
  }
  .login-form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    form {
      margin-top: 2rem;
    }
  }
`

export default SignUpWrapper;
import { Layout } from "antd";
import styled from "styled-components";

const HeaderWrapper = styled(Layout)`
  background: #fff;
  .header__logo {
    background: linear-gradient(180deg, #64b2de 0%, #7edaa5 100%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  .login-form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    form {
      margin-top: 2rem;
    }
  }
`;

export default HeaderWrapper;

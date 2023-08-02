import { Layout } from "antd";
import styled from "styled-components";

const GridCardWrapper = styled(Layout)`
  margin: 48px 0;
  background: #fff;
  .tabs--buttons {
  }

  .card--custom {
    box-shadow: none;
    .ant-card-body {
      position: absolute;
      bottom: 0;
      width: 100%;
      background: rgba(0, 0, 0, 0.2);
      backdrop-filter: blur(25px);
    }
  }
`;

export default GridCardWrapper;

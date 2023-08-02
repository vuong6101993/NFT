import { Layout } from "antd";
import styled from "styled-components";

const AppraisalRequestWrapper = styled(Layout)`
  min-height: 100vh;
  background: #fff;
  padding: 47px 400px 74px 400px;
  @media screen and (max-width: 1250px) {
    padding: 47px 300px 74px 300px;
  }
  .ant-form-item-label>label {
    color: #000;
    font-family: Noto Sans JP;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: 150%; /* 24px */
  }
  label.ant-form-item-required {
    position: relative;
  }
  .ant-form-item-label>label.ant-form-item-required::before{
    position: absolute;
    right: -3px;
    top: 5px
  }
  .file-upload {
    .ant-form-item-label>label.ant-form-item-required::before{
      display: none
    }
  }
  .ant-upload {
    width: 310px !important;
    height: 202px !important;
    border: 2px dashed rgba(0, 0, 0, 0.50) !important;
    .ant-upload-select {
      width: 100%;
      height: 100%;
    }
    span {
      border: none !important
    }
  }

  .upload-button {
    span {
      width: 100%;
      height: 100%
    }
    svg {
        width: 100%;
        height: 100%;
        color: #757575
      }
  }
`

export default AppraisalRequestWrapper;
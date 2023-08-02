import { Layout } from "antd";
import styled from "styled-components";

const WorkInquiryWrapper = styled(Layout)`
  min-height: 100vh;
  background: #fff;
  padding: 47px 400px 74px 400px;
  @media screen and (max-width: 1250px) {
    padding: 47px 300px 74px 300px;
  }
  .border-select-type-option {
    border: 1px solid rgba(0, 0, 0, 0.18);
  }
  .border-select-type-option-checked {
    border: 1px solid #7DD8A7;
  }
  .select-type-option {
    border-radius: 12px;
    background: #FFF;
    padding: 12px 16px;
    .ant-radio-wrapper {
      span {
        color: #000;
        font-family: Noto Sans JP;
        font-size: 14px;
        font-style: normal;
        font-weight: 700;
        line-height: 150%; /* 21px */
      }
    }
    .ant-radio-checked .ant-radio-inner{
      border-color: #7DD8A7 !important;
      background-color: #FFF !important;
    }

    .ant-radio-checked .ant-radio-inner:after{
      background-color: #7DD8A7;
      width: 26px !important;
      height: 26px !important;
      inset-block-start: 10%;
      inset-inline-start: 15%;
    }

    .ant-radio:hover .ant-radio-inner {
      border-color: #7DD8A7 ;
    }
    .font-normal {
      font-weight: 400 !important
    }

    .ant-radio {
      top: -10px
    }
    .ant-switch-checked {
      background-image: linear-gradient(#65B3DD, #7ED9A6) !important;
      margin-bottom: 3px;
      margin-right: 12px
    } 
  }
  .line-break-summary{
    opacity: 0.10000000149011612;
    background: #000;
    margin: 12px 0
  }
`

export default WorkInquiryWrapper;
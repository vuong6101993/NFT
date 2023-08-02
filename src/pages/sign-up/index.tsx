import { Col, Form, Input, Layout, Row, Typography } from "antd"
import SignUpWrapper from "./styles";
import Image from "next/image";
import useTranslation from "@/hooks/useTranslation";
import Link from "next/link";

const Signup = () => {
  const translation = useTranslation()
  return (
    <SignUpWrapper>
      <Row gutter={16}>
        <Col lg={{ span: 16 }}>
          <Image className="login-bg" src="/images/login-bg.png" width="806" height="889" alt="" />
        </Col>
        <Col lg={{ span: 8 }} className="login-form">
          <Typography.Title level={3}>{translation.login.title}</Typography.Title>
          <div className="subtitle">{translation.login.subtitle}<Link href="/login">{translation.login.login}</Link></div>
          <Form>
            <Form.Item name="name">
              <Input placeholder="氏名"/>
            </Form.Item>
          </Form>
        </Col>
      </Row>
    </SignUpWrapper>
  )
}

export default Signup;
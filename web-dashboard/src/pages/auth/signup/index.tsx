import React from 'react'
import style from '../index.module.less'
import { Button, Col, Form, Input, Row, Typography } from 'antd'

const { Title, Text, Link } = Typography

const Signup: React.FC = () => {
  return (
    <>
      <div className={style.container}>
        <div className={style.content}>
          <div className={style.content_title}>
            <Title level={2}> Daftar Akun</Title>
            <Text>
              Jangan lewatkan kesempatan Anda untuk menginvestasikan dana anda
            </Text>
          </div>
          <div className={style.content_body}>
            <Form layout="vertical">
              <Form.Item
                label="Nama Lengkap"
                name="full_name"
                rules={[
                  {
                    required: true,
                    message: 'Mohon masukkan Nama Lengkap anda!',
                  },
                ]}
              >
                <Input.Group size="default">
                  <Row gutter={8}>
                    <Col span={12}>
                      <Input placeholder="Nama Depan" />
                    </Col>
                    <Col span={12}>
                      <Input placeholder="Nama Belakang" />
                    </Col>
                  </Row>
                </Input.Group>
              </Form.Item>
              <Form.Item
                label="Email"
                name="email"
                rules={[
                  { required: true, message: 'Mohon masukkan email anda!' },
                ]}
              >
                <Input placeholder="Masukkan email" />
              </Form.Item>
              <Form.Item
                label="Password"
                name="password"
                rules={[
                  { required: true, message: 'Mohon masukkan password anda!' },
                ]}
              >
                <Input.Password placeholder="Masukkan password" />
              </Form.Item>
              <Form.Item
                label="Konfirmasi Password"
                name="confirmation_password"
                rules={[
                  {
                    required: true,
                    message: 'Mohon masukkan konfirmasi password anda!',
                  },
                ]}
              >
                <Input.Password placeholder="Masukkan konfirmasi password" />
              </Form.Item>
              <Form.Item>
                <Button type="primary" block>
                  Daftar
                </Button>
              </Form.Item>
            </Form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Signup

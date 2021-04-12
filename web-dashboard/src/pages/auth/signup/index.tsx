import React from 'react'
import Image from 'next/image'
import style from '../index.module.less'
import { Button, Checkbox, Col, Form, Input, Row, Typography } from 'antd'

const { Title, Text, Link } = Typography

const Signup: React.FC = () => {
  return (
    <>
      <div className={style.layout}>
        <div style={{ width: '100%' }} className={style.primary_background}>
          <div className={style.container}>
            <div className={style.content}>
              <div className={style.content_title}>
                <Title level={2}>
                  Bergabung bersama UInvest dan biarkan uangmu Berkembang
                </Title>
              </div>
              <div className={style.content_body}>
                <Image
                  src="/illustration/signup.png"
                  alt="Illustrasi Lupa Password"
                  width={400}
                  height={350}
                />
              </div>
            </div>
          </div>
        </div>
        <div style={{ width: '100%' }}>
          <div className={style.container}>
            <div className={style.content}>
              <div className={style.content_title}>
                <Image
                  src="/uinvest_logo.png"
                  alt="Logo U-Invest"
                  width={250}
                  height={50}
                />
                <Title level={2}> Daftar Akun</Title>
                <Text>
                  Isi informasi dibawah ini agar dapat bergabung bersama uinvest
                </Text>
              </div>
              <div className={style.content_body}>
                <Form layout="vertical">
                  <Form.Item
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
                    name="email"
                    rules={[
                      { required: true, message: 'Mohon masukkan email anda!' },
                    ]}
                  >
                    <Input placeholder="Masukkan email" />
                  </Form.Item>
                  <Form.Item
                    name="password"
                    rules={[
                      {
                        required: true,
                        message: 'Mohon masukkan password anda!',
                      },
                    ]}
                  >
                    <Input.Password placeholder="Masukkan password" />
                  </Form.Item>
                  <Form.Item
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
                  <Form.Item name="remember" valuePropName="checked">
                    <Checkbox>Saya setuju dengan Syarat dan Ketentuan</Checkbox>
                  </Form.Item>
                  <Form.Item>
                    <Button type="primary" block>
                      Daftar
                    </Button>
                  </Form.Item>
                  <Form.Item wrapperCol={{ offset: 6 }}>
                    <Text>
                      Sudah punya akun ? <Link href="/auth/signin">Login</Link>
                    </Text>
                  </Form.Item>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Signup

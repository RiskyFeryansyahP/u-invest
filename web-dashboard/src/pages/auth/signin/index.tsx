import React from 'react'
import style from './index.module.less'

import { Button, Form, Input, Typography } from 'antd'

const { Text, Title, Link } = Typography

const Signin: React.FC = () => {
  return (
    <>
      <div className={style.container}>
        <div className={style.content}>
          <div className={style.content_title}>
            <Title level={2}> Selamat Datang! </Title>
            <Text>Jangan lewatkan kesempatan Anda untuk masuk sekarang.</Text>
          </div>
          <div className={style.content_body}>
            <Form layout="vertical">
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
              <Form.Item>
                <Text>
                  Lupa kata sandi anda? <Link>Klik Disini</Link>
                </Text>
              </Form.Item>
              <Form.Item>
                <Button type="primary" block>
                  Masuk
                </Button>
              </Form.Item>
              <Form.Item wrapperCol={{ offset: 6 }}>
                <Text>
                  Belum punya akun? <Link>Daftar Disini</Link>
                </Text>
              </Form.Item>
            </Form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Signin

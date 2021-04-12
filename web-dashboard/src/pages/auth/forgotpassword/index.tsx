import React from 'react'
import Image from 'next/image'
import style from './index.module.less'

import { Button, Form, Input, Typography } from 'antd'

const { Text, Title, Link } = Typography

const ForgotPassword: React.FC = () => {
  return (
    <>
      <div className={style.layout}>
        <div style={{ width: '100%' }} className={style.primary_background}>
          <div className={style.container}>
            <div className={style.content}>
              <div className={style.content_title}>
                <Title level={2}>Hmmm, kata sandi mu ?</Title>
              </div>
              <div className={style.content_body}>
                <Image
                  src="/illustration/forgotpassword.png"
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
                  width={300}
                  height={100}
                />
                <Title level={2}> Lupa Kata Sandi ? </Title>
                <Text>
                  Silahkan masukkan email mu yang sudah terdaftar sebelumnya,
                  kami akan mengirimkan panduan untuk mengatur ulang kata
                  sandimu
                </Text>
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
                  <Form.Item>
                    <Button type="primary" block>
                      Masuk
                    </Button>
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

export default ForgotPassword

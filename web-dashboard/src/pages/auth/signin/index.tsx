import React from 'react'
import Image from 'next/image'
import style from '../index.module.less'

import { Button, Form, Input, Typography } from 'antd'

const { Text, Title, Link } = Typography

const Signin: React.FC = () => {
  return (
    <>
      <div className={style.layout}>
        <div style={{ width: '100%' }} className={style.primary_background}>
          <div className={style.container}>
            <div className={style.content}>
              <div className={style.content_title}>
                <Title level={2}>
                  Investasikan danamu kepada para pelaku UMKM yang membutuhkan
                  Dana
                </Title>
              </div>
              <div className={style.content_body}>
                <Image
                  src="/illustration/signin.png"
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
                <Title level={2}> Hai, Selamat Datang Kembali </Title>
                <Text>
                  Segera login, dan investasikan danamu kepada pelaku UMKM
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
                  <Form.Item
                    label="Password"
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
                      Belum punya akun ?{' '}
                      <Link href="/auth/signup">Daftar Sekarang</Link>
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

export default Signin

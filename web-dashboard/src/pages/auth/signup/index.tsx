import React from 'react'
import Image from 'next/image'
import style from '../index.module.less'
import {
  Button,
  Checkbox,
  Col,
  Form,
  Input,
  message,
  Row,
  Typography,
} from 'antd'
import Cookies from 'js-cookie'

import api from '../../../services/Api'

const { Title, Text, Link } = Typography

const Signup: React.FC = () => {
  const [form] = Form.useForm()

  const handleSubmitSignup = async () => {
    const done_loading = message.loading('Tunggu sebentar...')

    const values = await form.validateFields()

    const full_name = values.first_name + ' ' + values.last_name
    const password = values.password
    const email = values.email
    const phonenumber = values.phonenumber

    console.log(full_name, email, phonenumber, password)

    try {
      await api.post('/auth/register', {
        name: full_name,
        email,
        phone_number: phonenumber,
        password,
      })

      Cookies.set('member_email', email)
      message.success('Berhasil melakukan pendaftaran akun')
      window.location.href = '/auth/verification'
    } catch (error) {
      message.error('terjadi kesalahan!')
      console.log('error', error)
    } finally {
      done_loading()
    }
  }

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
                <Form
                  layout="vertical"
                  form={form}
                  onFinish={handleSubmitSignup}
                >
                  <Input.Group size="default">
                    <Row gutter={8}>
                      <Col span={12}>
                        <Form.Item
                          name="first_name"
                          rules={[
                            {
                              required: true,
                              message: 'Mohon masukkan nama depan anda!',
                            },
                          ]}
                        >
                          <Input placeholder="Nama Depan" />
                        </Form.Item>
                      </Col>
                      <Col span={12}>
                        <Form.Item
                          name="last_name"
                          rules={[
                            {
                              required: true,
                              message: 'Mohon masukkan nama belakang anda!',
                            },
                          ]}
                        >
                          <Input placeholder="Nama Belakang" />
                        </Form.Item>
                      </Col>
                    </Row>
                  </Input.Group>
                  <Form.Item
                    name="email"
                    rules={[
                      { required: true, message: 'Mohon masukkan email anda!' },
                    ]}
                  >
                    <Input placeholder="Masukkan email" />
                  </Form.Item>
                  <Form.Item
                    name="phonenumber"
                    rules={[
                      { required: true, message: 'Mohon masukkan no hp anda!' },
                    ]}
                  >
                    <Input placeholder="Masukkan no telepon" />
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
                  {/* <Form.Item
                    name="confirmation_password"
                    rules={[
                      {
                        required: true,
                        message: 'Mohon masukkan konfirmasi password anda!',
                      },
                    ]}
                  >
                    <Input.Password placeholder="Masukkan konfirmasi password" />
                  </Form.Item> */}
                  <Form.Item name="remember" valuePropName="checked">
                    <Checkbox>Saya setuju dengan Syarat dan Ketentuan</Checkbox>
                  </Form.Item>
                  <Form.Item>
                    <Button type="primary" block htmlType="submit">
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

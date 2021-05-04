import React from 'react'
import Image from 'next/image'
import style from '../index.module.less'
import { Button, Col, Form, Input, message, Row, Typography } from 'antd'
import Cookies from 'js-cookie'

import api from '../../../services/Api'

const { Text, Title } = Typography

const Verification: React.FC = () => {
  const [form] = Form.useForm()

  const handleSubmitVerification = async () => {
    const done_loading = message.loading('Menunggu melakukan verifikasi...')
    const values = await form.validateFields()
    const email = Cookies.get('member_email')

    const code = values.code_1 + values.code_2 + values.code_3 + values.code_4

    try {
      await api.post('/auth/verified', { code, email })
      message.success('Berhasil melakukan verifikasi akun')
      Cookies.remove('member_email')
      window.location.href = '/auth/signin'
    } catch (error) {
      message.error('Terjadi kesalahan!')
      console.log('error', error)
    } finally {
      done_loading()
    }
  }

  return (
    <>
      <div className={style.layout}>
        <div
          style={{ width: '100%' }}
          className={style.primary_background}
        ></div>
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
                <Title level={2}> Verifikasi Pendaftaran </Title>
                <Text>
                  Jangan lewatkan kesempatan Anda untuk masuk sekarang.
                </Text>
              </div>
              <div className={style.content_body}>
                <Form
                  layout="vertical"
                  form={form}
                  onFinish={handleSubmitVerification}
                >
                  <Input.Group size="large">
                    <Row gutter={8}>
                      <Col span={6}>
                        <Form.Item
                          name="code_1"
                          rules={[
                            {
                              required: true,
                              message: 'code verification is required',
                            },
                          ]}
                        >
                          <Input />
                        </Form.Item>
                      </Col>
                      <Col span={6}>
                        <Form.Item
                          name="code_2"
                          rules={[
                            {
                              required: true,
                              message: 'code verification is required',
                            },
                          ]}
                        >
                          <Input />
                        </Form.Item>
                      </Col>
                      <Col span={6}>
                        <Form.Item
                          name="code_3"
                          rules={[
                            {
                              required: true,
                              message: 'code verification is required',
                            },
                          ]}
                        >
                          <Input />
                        </Form.Item>
                      </Col>
                      <Col span={6}>
                        <Form.Item
                          name="code_4"
                          rules={[
                            {
                              required: true,
                              message: 'code verification is required',
                            },
                          ]}
                        >
                          <Input />
                        </Form.Item>
                      </Col>
                    </Row>
                  </Input.Group>
                  <Form.Item>
                    <Button type="primary" block htmlType="submit">
                      Verifikasi
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

export default Verification

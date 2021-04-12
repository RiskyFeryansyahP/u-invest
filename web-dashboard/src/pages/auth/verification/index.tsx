import React from 'react'
import Image from 'next/image'
import style from '../index.module.less'

import { Button, Col, Form, Input, Row, Typography } from 'antd'

const { Text, Title } = Typography

const Verification: React.FC = () => {
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
                <Form layout="vertical">
                  <Form.Item name="code">
                    <Input.Group size="large">
                      <Row gutter={8}>
                        <Col span={6}>
                          <Input />
                        </Col>
                        <Col span={6}>
                          <Input />
                        </Col>
                        <Col span={6}>
                          <Input />
                        </Col>
                        <Col span={6}>
                          <Input />
                        </Col>
                      </Row>
                    </Input.Group>
                  </Form.Item>
                  <Form.Item>
                    <Button type="primary" block>
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

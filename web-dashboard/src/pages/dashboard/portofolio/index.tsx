import React from 'react'
import { Button, Card, Layout, Typography } from 'antd'
import {
  ShoppingCartOutlined,
  ContainerOutlined,
  ForkOutlined,
} from '@ant-design/icons'
import Image from 'next/image'
import styles from './index.module.less'
import { HeaderDashboard } from '../../../components/Header'
const { Title, Text } = Typography

const Dashboard: React.FC = () => {
  return (
    <Layout style={{ background: '#FFFFFF' }}>
      <HeaderDashboard title="Portofolio" />
      <div className={styles.container}>
        <div className={styles.content}>
          <Card
            style={{
              width: '100%',
              boxShadow:
                '0px 3px 10px rgba(0, 0, 0, 0.25), inset 0px 1px 2px rgba(0, 0, 0, 0.25)',
            }}
          >
            <div className={styles.card_investation}>
              <Image
                src="/illustration/grow.png"
                alt="Investasikan uang anda"
                width={90}
                height={65}
              />
              <div
                style={{
                  marginLeft: '40px',
                }}
              >
                <Title level={5} style={{ color: '#FFB12A' }}>
                  Nilai Investasi Anda
                </Title>
                <Text type="secondary">Rp. 0</Text>
              </div>
            </div>
          </Card>
          <div className={styles.portofolio}>
            <Title level={3}>List Portofolio anda: </Title>
            <div className={styles.portofolio_list}>
              <Card
                style={{
                  width: '100%',
                  border: '0.5px solid #A5A1A1',
                  boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.25)',
                }}
              >
                <div className={styles.card_investation}>
                  <Image
                    src="/illustration/grow.png"
                    alt="Investasikan uang anda"
                    width={90}
                    height={65}
                  />
                  <div
                    style={{
                      marginLeft: '40px',
                    }}
                  >
                    <Title level={5}>Sumber Jaya Galdi</Title>
                    <Text type="secondary">Cv. Sumber Jaya Galdi</Text>
                  </div>
                </div>
              </Card>
            </div>
            <div className={styles.portofolio_list}>
              <Card
                style={{
                  width: '100%',
                  border: '0.5px solid #A5A1A1',
                  boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.25)',
                }}
              >
                <div className={styles.card_investation}>
                  <Image
                    src="/illustration/grow.png"
                    alt="Investasikan uang anda"
                    width={90}
                    height={65}
                  />
                  <div
                    style={{
                      marginLeft: '40px',
                    }}
                  >
                    <Title level={5}>Sumber Jaya Galdi</Title>
                    <Text type="secondary">Cv. Sumber Jaya Galdi</Text>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Dashboard

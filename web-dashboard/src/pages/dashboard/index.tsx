import React from 'react'
import { Avatar, Button, Card, Divider, Layout, Typography } from 'antd'
import {
  UserOutlined,
  BellOutlined,
  ShoppingCartOutlined,
  ContainerOutlined,
  ForkOutlined,
} from '@ant-design/icons'
import Image from 'next/image'
import styles from './index.module.less'

const { Header } = Layout
const { Title, Text } = Typography

const Dashboard: React.FC = () => {
  return (
    <Layout style={{ background: '#FFFFFF' }}>
      <Header
        style={{
          zIndex: 1,
          width: '100%',
          background: '#FFFFFF',
        }}
      >
        <div className={styles.navigation}>
          <div className={styles.left_nav}>
            <Image
              src="/uinvest_logo.png"
              alt="Logo U-Invest"
              width={190}
              height={50}
            />
          </div>

          <div className={styles.right_nav}>
            <div>
              <BellOutlined />
            </div>
            <div>
              <Avatar icon={<UserOutlined />} />
            </div>
          </div>
        </div>
      </Header>
      <div className={styles.title_page}>
        <Divider
          style={{
            height: 1,
            borderColor: '#A5A1A1',
          }}
          className={styles.divider}
        />
        <Title level={5}>Home</Title>
        <Divider
          style={{
            height: 1,
            borderColor: '#A5A1A1',
          }}
          className={styles.divider}
        />
      </div>
      <div className={styles.container}>
        <div className={styles.left_content}>
          <Card
            style={{
              width: '100%',
              boxShadow:
                '0px 3px 10px rgba(0, 0, 0, 0.25), inset 0px 1px 2px rgba(0, 0, 0, 0.25);',
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
          <Title level={4}>Rekomendasi Pilihan UMKM</Title>
          <Text type="secondary">
            Temukan UMKM yang akan anda beri dana investasi
          </Text>
          <Card
            style={{
              width: '70%',
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
          <Card
            style={{
              width: '70%',
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
          <Card
            style={{
              width: '70%',
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
          <Button type="primary" style={{ width: '70%' }}>
            Temukan UMKM
          </Button>
        </div>
        <div className={styles.right_content}>
          <Title level={3}>Tutorial Berinvestasi</Title>
          <div className={styles.card_option}>
            <Card className={styles.card_tutorial}>
              <div className={styles.card_body}>
                <ShoppingCartOutlined style={{ fontSize: '48px' }} />
                <Text>Pembelian</Text>
              </div>
            </Card>
            <Card className={styles.card_tutorial}>
              <div className={styles.card_body}>
                <ShoppingCartOutlined style={{ fontSize: '48px' }} />
                <Text>Penjualan</Text>
              </div>
            </Card>
            <Card className={styles.card_tutorial}>
              <div className={styles.card_body}>
                <ContainerOutlined style={{ fontSize: '48px' }} />
                <Text>Pembelian</Text>
              </div>
            </Card>
            <Card className={styles.card_tutorial}>
              <div className={styles.card_body}>
                <ForkOutlined style={{ fontSize: '48px' }} />
                <Text>Pembelian</Text>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Dashboard

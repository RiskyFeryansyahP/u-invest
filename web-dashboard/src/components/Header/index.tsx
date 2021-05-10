import React from 'react'
import { Avatar, Divider, Dropdown, Layout, Menu, Typography } from 'antd'
import {
  UserOutlined,
  BellOutlined,
  EditOutlined,
  ShopOutlined,
  MoneyCollectOutlined,
  SearchOutlined,
} from '@ant-design/icons'
import styles from './index.module.less'
import Image from 'next/image'

const { Header } = Layout
const { Title } = Typography

const menuDropdown = (
  <Menu>
    <Menu.Item icon={<EditOutlined />}>
      <a target="_blank">Edit Profile</a>
    </Menu.Item>
    <Menu.Item icon={<ShopOutlined />}>
      <a href="/dashboard/umkm/register">Daftarkan Bisnis</a>
    </Menu.Item>
    <Menu.Item icon={<MoneyCollectOutlined />}>
      <a target="_blank">Ajukan Pendanaan</a>
    </Menu.Item>
    <Menu.Item icon={<SearchOutlined />}>
      <a target="_blank">Temukan Investor</a>
    </Menu.Item>
  </Menu>
)

export const HeaderDashboard: React.FC<{ title: string }> = (props) => {
  return (
    <>
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
              <Dropdown overlay={menuDropdown}>
                <Avatar icon={<UserOutlined />} />
              </Dropdown>
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
        <Title level={5}> {props.title} </Title>
        <Divider
          style={{
            height: 1,
            borderColor: '#A5A1A1',
          }}
          className={styles.divider}
        />
      </div>
    </>
  )
}

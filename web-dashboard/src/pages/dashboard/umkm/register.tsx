import React from 'react'
import { Layout, Steps, Form, Input, Button, Upload } from 'antd'
import { UploadOutlined } from '@ant-design/icons'
import styles from './index.module.less'
import { HeaderDashboard } from '../../../components/Header'
const { Step } = Steps

const layoutForm = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
}

const StepForm1: React.FC = () => (
  <>
    <Form.Item
      label="Nama Pemilik"
      name="name"
      rules={[{ required: true, message: 'Nama Pemilik wajib di isi!' }]}
    >
      <Input />
    </Form.Item>
    <Form.Item
      label="No KTP"
      name="card_id"
      rules={[{ required: true, message: 'No KTP wajib di isi!' }]}
    >
      <Input />
    </Form.Item>
    <Form.Item
      label="No HP"
      name="phonenumber"
      rules={[{ required: true, message: 'No HP wajib di isi!' }]}
    >
      <Input />
    </Form.Item>
    <Form.Item
      label="Tanggal Lahir"
      name="birth_date"
      rules={[{ required: true, message: 'Tanggal Lahir wajib di isi!' }]}
    >
      <Input />
    </Form.Item>
    <Form.Item label="Jenis Kelamin" name="gender">
      <Input />
    </Form.Item>
    <Form.Item
      label="Alamat"
      name="address"
      rules={[{ required: true, message: 'Alamat wajib di isi!' }]}
    >
      <Input />
    </Form.Item>
  </>
)

const StepForm2: React.FC = () => (
  <>
    <Form.Item
      label="Nama Usaha"
      name="business_name"
      rules={[{ required: true, message: 'Nama Usaha wajib di isi!' }]}
    >
      <Input />
    </Form.Item>
    <Form.Item
      label="Bidang Usaha"
      name="business_field"
      rules={[{ required: true, message: 'Bidang Usaha wajib di isi!' }]}
    >
      <Input />
    </Form.Item>
    <Form.Item
      label="Tanggal Berdiri"
      name="since_year"
      rules={[{ required: true, message: 'Tanggal Berdiri wajib di isi!' }]}
    >
      <Input />
    </Form.Item>
    <Form.Item
      label="Alamat Usaha"
      name="business_address"
      rules={[{ required: true, message: 'Alamat Usaha wajib di isi!' }]}
    >
      <Input />
    </Form.Item>
  </>
)

const StepForm3: React.FC = () => (
  <>
    <Form.Item
      label="Foto Pemilik"
      name="owner_photo"
      rules={[{ required: true, message: 'Foto Pemilik wajib di isi!' }]}
    >
      <Upload>
        <Button icon={<UploadOutlined />}>Klik untuk upload</Button>
      </Upload>
    </Form.Item>
    <Form.Item
      label="Upload KTP"
      name="card_id_photo"
      rules={[{ required: true, message: 'Foto KTP wajib di isi!' }]}
    >
      <Upload>
        <Button icon={<UploadOutlined />}>Klik untuk upload</Button>
      </Upload>
    </Form.Item>
    <Form.Item
      label="Surat Ijin Usaha"
      name="legalitas_photo"
      rules={[
        { required: true, message: 'Foto Surat Ijin Usaha wajib di isi!' },
      ]}
    >
      <Upload>
        <Button icon={<UploadOutlined />}>Klik untuk upload</Button>
      </Upload>
    </Form.Item>
    <Form.Item
      label="Foto Usaha"
      name="business_photo"
      rules={[{ required: true, message: 'Foto Usaha wajib di isi!' }]}
    >
      <Upload>
        <Button icon={<UploadOutlined />}>Klik untuk upload</Button>
      </Upload>
    </Form.Item>
    <Form.Item
      label="Proposal Bisnis"
      name="proposal_photo"
      rules={[{ required: true, message: 'Proposal Photo wajib di isi!' }]}
    >
      <Upload>
        <Button icon={<UploadOutlined />}>Klik untuk upload</Button>
      </Upload>
    </Form.Item>
  </>
)

const steps = [
  {
    step: 1,
    title: 'Step1',
    content: <StepForm1 />,
  },
  {
    step: 2,
    title: 'Step2',
    content: <StepForm2 />,
  },
  {
    step: 3,
    title: 'Step3',
    content: <StepForm3 />,
  },
]

const RegisterUMKM: React.FC = () => {
  const [activeStep, setActiveStep] = React.useState(0)

  const handleNextStep = () => {
    const nextStep = activeStep + 1

    setActiveStep(nextStep)
  }

  const handlePreviousStep = () => {
    const previousStep = activeStep - 1

    setActiveStep(previousStep)
  }

  return (
    <React.Fragment>
      <Layout style={{ background: '#FFFFFF' }}>
        <HeaderDashboard title="Form Pendaftaran UMKM" />
        <div className={styles.container}>
          <Steps progressDot current={activeStep}>
            <Step title="Data Pemilik" description="" />
            <Step title="Data Bisnis" description="" />
            <Step title="Upload Berkas" description="" />
          </Steps>
          <div className={styles.form_umkm}>
            <Form {...layoutForm}>
              {steps.map((item) => (
                <div
                  className={`${item.step !== activeStep + 1 && styles.hidden}`}
                >
                  {item.content}
                </div>
              ))}
              <Form.Item
                wrapperCol={{
                  offset: activeStep > 0 ? 10 : 17,
                  span: 16,
                }}
              >
                {activeStep > 0 && (
                  <Button onClick={handlePreviousStep}>Sebelumnya</Button>
                )}{' '}
                {activeStep === steps.length - 1 && (
                  <Button type="primary" htmlType="submit">
                    Selesai
                  </Button>
                )}{' '}
                {activeStep < steps.length - 1 && (
                  <Button type="primary" onClick={handleNextStep}>
                    Selanjutnya
                  </Button>
                )}{' '}
              </Form.Item>
            </Form>
          </div>
        </div>
      </Layout>
    </React.Fragment>
  )
}

export default RegisterUMKM

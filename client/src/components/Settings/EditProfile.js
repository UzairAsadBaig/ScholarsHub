import React from 'react'
import { Form, Button, Input, Row, Col, Select } from 'antd'
const { TextArea } = Input
const EditProfile = () => {
    const onFinish = values => {
        console.log('Success:', values)
      }
      const onFinishFailed = errorInfo => {
        console.log('Failed:', errorInfo)
      }
      const onChange = value => {
        console.log(`selected ${value}`)
      }
      const onSearch = value => {
        console.log('search:', value)
      }
  return (
    <div>
      <div id='details'>
        <div className='mt-5'>
          <p className='text-xl font-medium dark:text-white'>Profile Details</p>
          <p className='test-base font-base text-gray-500 dark:text-white'>
            Update your profile picture and personal details here.
          </p>
          <hr className='horizontal_bar w-80' />
        </div>
      </div>
      <Form
          name='basic'
          initialValues={{
            remember: true
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete='off'
          layout='vertical'
        >
          <Row>
            <Col span={10}>
              <Form.Item
                label='Name'
                name='name'
                rules={[
                  {
                    required: true,
                    message: 'Please input name!'
                  }
                ]}
              >
                <Input />
              </Form.Item>
            </Col>
            <Col span={1}></Col>
            <Col span={10}>
              <Form.Item
                label='Email'
                name='email'
                rules={[
                  {
                    required: true,
                    message: 'Please input email!',
                    validator: 'email'

                  }
                ]}
              >
                <Input disabled/>
              </Form.Item>
            </Col>
          </Row>
          <Row>
            <Col span={21}>
              <Form.Item
                label='Phone No.'
                name='jobDesc'
                rules={[
                  {
                    required: true,
                    message: 'Please input phone!'
                  }
                ]}
              >
                <Input />
              </Form.Item>
            </Col>
          </Row>


          <Row>
            <Col span={10}>
              <Form.Item
                label='Country'
                name='country'
                rules={[
                  {
                    required: true,
                    message: 'Please input country!'
                  }
                ]}
              >
                <Input />
              </Form.Item>
            </Col> 
            <Col span={1}></Col>
            <Col span={10}>
              <Form.Item
                label='Skills'
                name='jobInst'
                rules={[
                  {
                    required: true,
                    message: 'Please input skills!'
                  }
                ]}
              >
                <Input />
              </Form.Item>
            </Col>
          </Row>




          <Row>
            <Col span={10}>
              <Form.Item
                label='Language'
                name='language'
                rules={[
                  {
                    required: true,
                    message: 'Please input language!'
                  }
                ]}
              >
               <Input/>
              </Form.Item>
            </Col>
            <Col span={1}></Col>
            <Col span={10}>
            <Form.Item
                label='Research Interests'
                name='domain'
                rules={[
                  {
                    required: true,
                    message: 'Please input job research interests!'
                  }
                ]}
              >
                <Select
                mode='multiple'
                  showSearch
                  placeholder='Select research interests'
                  optionFilterProp='children'
                  onChange={onChange}
                  onSearch={onSearch}
                  filterOption={(input, option) =>
                    (option?.label ?? '')
                      .toLowerCase()
                      .includes(input.toLowerCase())
                  }
                  options={[
                    {
                      value: 'web',
                      label: 'PHD position'
                    },
                    {
                      value: 'app',
                      label: 'Research grant'
                    },
                    {
                      value: '',
                      label: 'Research Engineer'
                    }
                  ]}
                />
              </Form.Item>
            </Col>
          </Row>

          

          <Form.Item style={{marginTop:'2rem'}}>
            <Button type='primary' htmlType='submit' size='large'>
              Submit
            </Button>
          </Form.Item>
        </Form>
    </div>
  )
}

export default EditProfile

import React from 'react'
import { Form, Button, Input, Row, Col, Select } from 'antd'
import { useSelector } from 'react-redux'
const {TextArea} = Input
const EditProfile = () => {
  const { user } = useSelector(state => state.user)
  console.log(user)
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
            name:user.name,
            email: user.email,
            phone: user.phone,
            website: user.website,
            country: user.country,
            about: user.about,
            type: user.type,
            language: user.language,
            domain: user.domain,
            address: user.address

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
                name='phone'
               
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
               
              >
                <Input />
              </Form.Item>
            </Col> 
            <Col span={1}></Col>
            <Col span={10}>
            {user.role !== 'organization' ?
              <Form.Item
                label='Skills'
                name='skills'
                
              >
                <Input />
              </Form.Item>
            : <Form.Item
            label='Website'
            name='website'
           
          >
            <Input />
          </Form.Item>}
            </Col>
          </Row>




          <Row>
            <Col span={10}>
             {user.role !== 'organization'? 
              <Form.Item
              label='Language'
              name='language'
              
            >
             <Input/>
            </Form.Item>:
             <Form.Item
             label='About'
             name='about'
             
           >
            <TextArea row={3}/>
           </Form.Item>}
            </Col>
            <Col span={1}></Col>
            <Col span={10}>
           
              {user.role !== 'organization'? 
              <Form.Item
              label='Research Interests'
              name='domain'
             
            >
              <Select
              defaultValue={user.domain}
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
            </Form.Item>:
             <Form.Item
             label='Type'
             name='type'
             
           >
            <Select    options={[
       
        {
          value: 'private',
          label: 'Private',
        },
        {
          value: 'public',
          label: 'Public',
        },
      ]}/>
           </Form.Item>}
            </Col>
          </Row>

        <Row
        >
          <Col span={21}>
          <Form.Item
             label='Address'
             name='address'
             
           >
            <TextArea row={3}/>
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

import React from 'react';
import { PageHeader } from '../Generic/PageHeader'
import { Form, Button, Input, Row, Col, Select } from 'antd'
const { TextArea } = Input

export const UpdateJob = () => {

    const onChange = value => {
        console.log(`selected ${value}`)
      }
      const onSearch = value => {
        console.log('search:', value)
      }
      const onFinish = values => {
        console.log('Success:', values)
      }
      const onFinishFailed = errorInfo => {
        console.log('Failed:', errorInfo)
      }
    return (
        <div>
        <PageHeader heading='Update Job' subHeading='You can update job here' />
        <div>
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
                  label='Job Title'
                  name='jobTitle'
                  rules={[
                    {
                      required: true,
                      message: 'Please input job title!'
                    }
                  ]}
                >
                  <Input />
                </Form.Item>
              </Col>
              <Col span={1}></Col>
              <Col span={10}>
                <Form.Item
                  label='Research Interests'
                  name='researchInt'
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
                        label: 'Web'
                      },
                      {
                        value: 'app',
                        label: 'App'
                      },
                      {
                        value: 'ml',
                        label: 'ML'
                      }
                    ]}
                  />
                </Form.Item>
              </Col>
            </Row>
            <Row>
              <Col span={21}>
                <Form.Item
                  label='Job Description'
                  name='jobDesc'
                  rules={[
                    {
                      required: true,
                      message: 'Please input job description!'
                    }
                  ]}
                >
                  <TextArea maxLength={12} rows={5} />
                </Form.Item>
              </Col>
            </Row>
  
  
            <Row>
              <Col span={10}>
                <Form.Item
                  label='Job Requirements'
                  name='jobReq'
                  rules={[
                    {
                      required: true,
                      message: 'Please input job requirements!'
                    }
                  ]}
                >
                  <TextArea maxLength={10} rows={3} />
                </Form.Item>
              </Col> 
              <Col span={1}></Col>
              <Col span={10}>
                <Form.Item
                  label='Job Instructions'
                  name='jobInst'
                  rules={[
                    {
                      required: true,
                      message: 'Please input job instructions!'
                    }
                  ]}
                >
                  <TextArea maxLength={10} rows={3} />
                </Form.Item>
              </Col>
            </Row>
  
  
  
  
            <Row>
              <Col span={10}>
                <Form.Item
                  label='Job Type'
                  name='jobType'
                  rules={[
                    {
                      required: true,
                      message: 'Please input job type!'
                    }
                  ]}
                >
                  <Select
                    showSearch
                    placeholder='Select a job type'
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
                        value: 'contract',
                        label: 'Contract'
                      },
                      {
                        value: 'fullTime',
                        label: 'Full-Time'
                      },
                      {
                        value: 'partTime',
                        label: 'Part-Time'
                      }
                    ]}
                  />
                </Form.Item>
              </Col>
              <Col span={1}></Col>
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
                  <Select
                    showSearch
                    placeholder='Select country'
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
                        value: 'pak',
                        label: 'Pakistan'
                      },
                      {
                        value: 'ind',
                        label: 'India'
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
      </div>
    );
}


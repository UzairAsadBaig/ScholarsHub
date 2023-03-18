import React, {useState} from 'react';
import {Form, Input} from 'antd'

import { Card, Row,Col, Descriptions,Modal, Tag, Avatar, Button, Space, DatePicker} from 'antd';
import { Stack, Typography , Box} from '@mui/material';

export const ViewApplicant = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const onFinish = (values) => {
    console.log('Success:', values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
    return (
        <div>
             <Modal title="Schedule Interview" footer={false} open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
             <Form
    name="basic"
    layout='vertical'
 
    initialValues={{
      remember: true,
    }}
    onFinish={onFinish}
    onFinishFailed={onFinishFailed}
    autoComplete="off"
  >
    <Form.Item
      label="Google Meet link"
      name="link"
      rules={[
        {
          required: true,
          message: 'Please input link!',
        },
      ]}
    >
      <Input />
    </Form.Item>
     <Form.Item
      label="Timing"
      name="timing"
      rules={[
        {
          required: true,
          message: 'Please input timing!',
        },
      ]}
    >
          <DatePicker showTime />

    </Form.Item>

   

  

    <Form.Item
    
    >
      <Button type="primary" htmlType="submit">
        Submit
      </Button>&nbsp;&nbsp;
      <Button type="primary" onClick={()=>setIsModalOpen(false)}>
        Cancel
      </Button>
    </Form.Item>
  </Form>
      </Modal>
              <div>
            <div style={{ paddingInline: '2rem' }}>
        <Card style={{ padding: '30px 30px' }}>
          <div style={{ paddingInline: '5rem', paddingBlock: '3rem' }}>
            <Row>
            <Col span={16}>
                <Typography variant='h2'>Need a Full Stack Developer</Typography>
                <Stack direction='row' alignItems='center' spacing={1}>
                    <small>by</small>
                  <Typography style={{fontSize:'1.4rem', opacity:0.8}} noWrap>
                   DevFUM
                  </Typography> <span> <Tag color='cyan'>Research Engineer</Tag></span>
                </Stack>
                <Typography sx={{ marginTop: '1rem' }} variant='h6'>
                  Applied on
                </Typography>
                <Typography variant='p'>Feb 2, 2023</Typography>
              </Col>
              <Col span={8}>
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'right',
                    paddingTop: 3
                  }}
                >
                  <Avatar size='large'/>
                </Box>
              </Col>
           
            </Row>
            <Box sx={{ marginTop: '4rem', marginBottom: '2rem' }}>
              <h3>Applicant Info</h3>
            </Box>
            <Descriptions  layout="vertical" bordered>
    <Descriptions.Item label="Username">Cloud Database</Descriptions.Item>
    <Descriptions.Item label="Email">test.com</Descriptions.Item>
    <Descriptions.Item label="Country">Pak</Descriptions.Item>
    <Descriptions.Item label="Applied on" span={1}>2018-04-24 18:00:00</Descriptions.Item>
    <Descriptions.Item label="Skills" span={1}>Skills</Descriptions.Item>
    <Descriptions.Item label="Institute" span={1}>PUCIT</Descriptions.Item>
    <Descriptions.Item label="Cover Letter" span={3}>
      Data disk type: MongoDB
      
      Database version: 3.4
     
      Region: East China 1

    </Descriptions.Item> 
    <Descriptions.Item label="Resume" span={3}>
        Resume
    </Descriptions.Item>
 

   
  </Descriptions>
            
    <div style={{marginTop:"2rem"}}>
        <Space >
        <Button onClick={showModal}>Schedule Interview</Button>
        <Button>Chat now</Button>
        <Button>Reject Request</Button>
        </Space>
    </div>
           
        
        
          </div>
        </Card>
      </div>

        </div>
            
        </div>
    );
}


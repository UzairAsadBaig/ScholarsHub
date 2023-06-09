import React, { useState } from 'react'
import { Form, Input } from 'antd'
import { useParams } from 'react-router-dom'
import { useGetSingleApplicationByEmployerQuery } from '../../services/nodeAPI'
import { useSelector } from 'react-redux'
import {
  Card,
  Row,
  Col,
  Descriptions,
  Modal,
  Tag,
  Avatar,
  Button,
  Space,
  DatePicker
} from 'antd'
import { Stack, Typography, Box } from '@mui/material'
import Spinner from '../Spinner'
import { db } from "../../firebase";
import {
  addDoc,
  collection,
  serverTimestamp,
} from "firebase/firestore";

export const ViewApplicant = () => {
  const { user } = useSelector(state => state.user)

  const { appId } = useParams()
  const { data, isLoading } = useGetSingleApplicationByEmployerQuery(appId)
  const messagesRef = collection(db, "chats");

  const [isModalOpen, setIsModalOpen] = useState(false)
  const showModal = () => {
    setIsModalOpen(true)
  }
  const onFinish = values => {
    console.log('Success:', values)
  }
  
  const handleHire = async (e)=>{
   e.preventDefault();
   await addDoc(messagesRef, {
    title: `${data.data.job.title}` ,
    message:`${data.data.applicant.name} has been hired`,
    createdAt: serverTimestamp(),
    room:`${data.data.job.id}`
  });
  
  console.log("done")

  }

  if(!data && isLoading)
    return <Spinner/>
  return (
    <div>
      <Modal
        title='Schedule Interview'
        footer={false}
        open={isModalOpen}
      >
        <Form
          name='basic'
          layout='vertical'
          initialValues={{
            remember: true
          }}
          onFinish={onFinish}
          autoComplete='off'
        >
          <Form.Item
            label='Google Meet link'
            name='link'
            rules={[
              {
                required: true,
                message: 'Please input link!'
              }
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label='Timing'
            name='timing'
            rules={[
              {
                required: true,
                message: 'Please input timing!'
              }
            ]}
          >
            <DatePicker showTime />
          </Form.Item>

          <Form.Item>
            <Button type='primary' htmlType='submit'>
              Submit
            </Button>
            &nbsp;&nbsp;
            <Button type='primary' onClick={() => setIsModalOpen(false)}>
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
                    <Typography variant='h2'>
                      {data.data.job.title}
                    </Typography>
                    <Stack direction='row' alignItems='center' spacing={1}>
                      <small>by</small>
                      <Typography
                        style={{ fontSize: '1.4rem', opacity: 0.8 }}
                        noWrap
                      >
                        {user.name}
                      </Typography>{' '}
                      <span>
                        {data.data.applicant.researchInterest.map((el)=>
                        (
                          <Tag color='cyan'>{el}</Tag>
                        )
                        )}
                      </span>
                    </Stack>
                    <Typography sx={{ marginTop: '1rem' }} variant='h6'>
                      Applied on
                    </Typography>
                    <Typography variant='p'>{data.data.date}</Typography>
                  </Col>
                  <Col span={8}>
                    <Box
                      sx={{
                        display: 'flex',
                        justifyContent: 'right',
                        paddingTop: 3
                      }}
                    >
                      <Avatar size={100} 
                      src={"localhost:3001/img/users/"+data.data.applicant.photo}
                       />
                    </Box>
                  </Col>
                </Row>
                <Box sx={{ marginTop: '4rem', marginBottom: '2rem' }}>
                  <h3>Applicant Info</h3>
                </Box>
                <Descriptions layout='vertical' bordered>
                  <Descriptions.Item label='Username'>
                    {data.data.applicant.name}
                  </Descriptions.Item>
                  <Descriptions.Item label='Email'>
                    {data.data.applicant.email}
                  </Descriptions.Item>
                  <Descriptions.Item label='Country'>
                    {data.data.applicant.country}
                  </Descriptions.Item>
                  <Descriptions.Item label='Applied on' span={1}>
                    {data.data.job.date}
                  </Descriptions.Item>
                  <Descriptions.Item label='Skills' span={1}>
                    {data.data.applicant.skills}
                  </Descriptions.Item>
                  <Descriptions.Item label='Institute' span={1}>
                    {data.data.applicant.educaiton.institute}
                  </Descriptions.Item>
                  <Descriptions.Item label='Cover Letter' span={3}>
                   {data.data.coverLetter}
                  </Descriptions.Item>
                  <Descriptions.Item label='Resume' span={3}>
                    Resume
                  </Descriptions.Item>
                </Descriptions>

                <div style={{ marginTop: '2rem' }}>
                  <Space>
                    <Button onClick={showModal}>Schedule Interview</Button>
                    <Button>Chat now</Button>
                    <Button onClick={handleHire}>Hire</Button>
                    <Button>Shortlist</Button>
                    <Button>Reject Request</Button>
                  </Space>
                </div>
              </div>
            </Card>
        
        </div>
      </div>
    </div>
  )
}

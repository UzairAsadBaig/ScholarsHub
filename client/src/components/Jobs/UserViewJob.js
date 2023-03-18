import React, {useState} from 'react';
import { UploadOutlined } from '@ant-design/icons';
import { Card, Row,Col, Divider,Modal, Tag, Button, Space, Input, Form, Upload} from 'antd';
import { Stack, Typography , Box} from '@mui/material';
const {TextArea }= Input
export const UserViewJob = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const onFinish = (values) => {
        console.log('Success:', values);
      };
      const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
      };
    const showModal = () => {
      setIsModalOpen(true);
    };
    const handleOk = () => {
      setIsModalOpen(false);
    };
    const handleCancel = () => {
      setIsModalOpen(false);
    };


    const props = {
        name: 'file',
        // action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
        headers: {
          authorization: 'authorization-text',
        },
        onChange(info) {
        //   if (info.file.status !== 'uploading') {
        //     console.log(info.file, info.fileList);
        //   }
        //   if (info.file.status === 'done') {
        //     message.success(`${info.file.name} file uploaded successfully`);
        //   } else if (info.file.status === 'error') {
        //     message.error(`${info.file.name} file upload failed.`);
        //   }
        },
      };


    return (
        <div>
             <div>
             <Modal title="Submit Proposal" footer={false} open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
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
      label="Cover Letter"
      name="cover"
      rules={[
        {
          required: true,
          message: 'Please input cover letter!',
        },
      ]}
    >
      <TextArea  rows={5}/>
    </Form.Item>

    <Form.Item
      label="Resume"
      name="resume"
      rules={[
        {
          required: true,
          message: 'Please input resume!',
        },
      ]}
    >
         <Upload {...props}>
    <Button icon={<UploadOutlined />}>Click to Upload</Button>
  </Upload>
    </Form.Item>

 

    <Form.Item
   
    >
      <Button type="primary" htmlType="submit">
        Submit
      </Button>
    </Form.Item>
  </Form>
      </Modal>
        </div>
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
                  Posted On
                </Typography>
                <Typography variant='p'>Feb 2, 2023</Typography>
               
              </Col>
              <Col span={12}>
              
              </Col>
            </Row>
            <Box sx={{ marginTop: '4rem', marginBottom: '2rem' }}>
              <h3>Job Description</h3>
            </Box>
            <Row>
              okoko
            </Row>
            
           
           
            <Divider />
            <Box sx={{ marginTop: '4rem', marginBottom: '2rem' }}>
              <h3>Job Instructions</h3>
            </Box>
            <Row style={{ marginTop: '3rem' }}>
             ok
            </Row>
           
            <Divider/>
            <Box sx={{ marginTop: '4rem', marginBottom: '2rem' }}>
              <h3>Job Requirements</h3>
            </Box>
            <Row style={{ marginTop: '2rem' }}>
              okokok
            </Row>
            
           
                <Divider/>
            <Box sx={{ marginTop: '4rem', marginBottom: '2rem' }}>
              <h3>Research Interests</h3>
            </Box>
            <Row style={{ marginTop: '2rem' }}>
             okokokok
            </Row>
           <div style={{marginTop:"2rem"}}>
            <Space>
            <Button onClick={showModal}>Send Proposal</Button>
            <Button>Add to wishlist</Button>
            </Space>
           </div>
        
        
          </div>
        </Card>
      </div>

        </div>
        </div>
    );
}


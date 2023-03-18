import React from 'react';

import { Card, Row,Col, Divider, Tag, Avatar} from 'antd';
import { Stack, Typography , Box} from '@mui/material';

export const ViewApplicant = () => {
    return (
        <div>
              <div>
            <div style={{ paddingInline: '2rem' }}>
        <Card style={{ padding: '30px 30px' }}>
          <div style={{ paddingInline: '5rem', paddingBlock: '3rem' }}>
            <Row>
            <Col span={12}>
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
              <Col span={12}>
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
            <Row>
              <Col span={4}>Fasih</Col>
              <Col span={4}>fasih@gmail.com</Col>
            </Row>
            
           
         
           
        
        
          </div>
        </Card>
      </div>

        </div>
            
        </div>
    );
}


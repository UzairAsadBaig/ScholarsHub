import React from 'react';
import { Card, Row,Col, Divider, Tag} from 'antd';
import { Stack, Typography , Box} from '@mui/material';

export const ViewJob = () => {
    
    return (
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
                  Created At
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
           
        
        
          </div>
        </Card>
      </div>

        </div>
    );
}


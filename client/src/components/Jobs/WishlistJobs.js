import React from 'react';
import { Card, Col, Row, Tag , Button} from 'antd';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { PageHeader } from '../Generic/PageHeader';
import { useNavigate } from 'react-router-dom';
export const WishlistJobs = () => {
    const navigate = useNavigate()
    return (
        <div>
        <PageHeader heading="Jobs" subHeading="You can find and apply for all jobs you like"/>
<div style={{paddingRight:"1rem"}}>
<Card style={{ paddingInline:"2rem", paddingBlock:'2rem'}}>
<h2>Jobs that you added to your wishlist</h2>
<div className='mt-10'>
<Card onClick={()=>{navigate('/dashboard/user/jobs/view')}}>
    <Row>
        <Col span={21}>

    <h3>Full Stack Developer</h3>
        </Col>
        <Col span={3}><Button>Remove from wishlist</Button></Col>
    </Row>
     <span>Research Engineer</span> - <small>Posted 6h ago</small>
    <div style={{paddingBlock:'1rem'}}>
        <div style={{fontSize:"1.3rem", opacity:0.9}}>
        this cjakldjasld asdjslajasldjlasd dfljadljasldd fljdasljthis cjakldjasld asdjslajasldjlasd dfljadljasldd fljdasljthis cjakldjasld asdjslajasldjlasd dfljadljasldd fljdasljthis cjakldjasld asdjslajasldjlasd dfljadljasldd fljdasljthis cjakldjasld asdjslajasldjlasd dfljadljasldd fljdaslj
        </div>
    <div style={{marginTop:"1.5rem"}}>
        <Row>
            <Col span={20}>
                <Tag>Web</Tag>
                <Tag>App</Tag>
                <Tag>ML</Tag>
            </Col>
            <Col span={4}>
                <span style={{marginLeft:'7rem'}}><LocationOnIcon/> Pakistan</span>
            </Col>
        </Row>
    </div>
    </div>
</Card>
</div>

</Card>
</div>
</div>
    );
}

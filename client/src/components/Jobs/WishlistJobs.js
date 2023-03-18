import React from 'react';
import { Card, Col, Row, Tag, Button } from 'antd';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { PageHeader } from '../Generic/PageHeader';
import { useNavigate } from 'react-router-dom';
import Spinner from '../Spinner';
import { useGetAllWishJobsQuery } from '../../services/nodeAPI';
import { useSelector } from 'react-redux';
export const WishlistJobs=() => {
    const navigate=useNavigate()
    const { user }=useSelector( state => state.user );
    const { data, error, isLoading }=useGetAllWishJobsQuery( user._id );
    if ( isLoading&&!data )
        return <Spinner />
    return (
        <div>
            {console.log( "====", data )}
            <PageHeader heading="Jobs" subHeading="You can find and apply for all jobs you like" />
            <div style={{ paddingRight: "1rem" }}>
                <Card style={{ paddingInline: "2rem", paddingBlock: '2rem' }}>
                    <h2>Jobs that you added to your wishlist</h2>
                    <div className='mt-10'>
                        {data.data.wishlist.map( ( el, i ) => (
                            <Card key={i}>
                                <Row>
                                    <Col span={21}>

                                        <h3 onClick={() => { navigate( `/dashboard/user/jobs/view/${el.id}` ) }}>{el.title}</h3>
                                    </Col>
                                    <Col span={3}><Button>Remove from wishlist</Button></Col>
                                </Row>
                                <span>{el.employer}</span>- <small>{el.date}</small>
                                <div style={{ paddingBlock: '1rem' }}>
                                    <div style={{ fontSize: "1.3rem", opacity: 0.9 }}>
                                        {el.description}
                                    </div>
                                    <div style={{ marginTop: "1.5rem" }}>
                                        <Row>
                                            <Col span={20}>
                                                {el.domain.map( ( _el, i ) => ( <Tag>{_el}</Tag> ) )}
                                            </Col>
                                            <Col span={4}>
                                                <span style={{ marginLeft: '7rem' }}><LocationOnIcon /> {el.country}</span>
                                            </Col>
                                        </Row>
                                    </div>
                                </div>
                            </Card>
                        ) )}
                    </div>

                </Card>
            </div>
        </div>
    );
}

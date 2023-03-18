import React from 'react';
import { Card, Col, Input, Row, Tag, Button } from 'antd';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { PageHeader } from '../Generic/PageHeader';
import { useNavigate } from 'react-router-dom';
import { useGetAllJobsQuery } from '../../services/nodeAPI';
import Spinner from '../Spinner';
const { Search }=Input;

export const ViewUserJobs=() => {
    const navigate=useNavigate()
    const onSearch=( value ) => console.log( value );

    const { data, error, isLoading }=useGetAllJobsQuery();
    if ( isLoading&&!data )
        return <Spinner />
    return (
        <div>
            {console.log( 'DATA:', data )}
            <PageHeader heading="Jobs" subHeading="You can find and apply for all jobs you like" />
            <div style={{ paddingRight: "1rem" }}>
                <Card style={{ paddingInline: "2rem", paddingBlock: '2rem' }}>
                    <div style={{ paddingBottom: '2rem' }}>
                        <Search placeholder="input search text" size='large' onSearch={onSearch} enterButton />
                    </div>
                    <h2>Jobs you might like</h2>
                    <div className='mt-10'>
                        {data.data.map( ( el, i ) => {
                            return ( <Card key={i} className='mt-3' onClick={() => { navigate( `/dashboard/user/jobs/view/${el.id}` ) }}>
                                <Row>
                                    <Col span={22}>

                                        <h3>{el.title}</h3>
                                    </Col>
                                    <Col span={2}><Button>Add to wishlist</Button></Col>
                                </Row>
                                <span>{el.employer.name}</span> - <small>{el.date}</small>
                                <div style={{ paddingBlock: '1rem' }}>
                                    <div style={{ fontSize: "1.3rem", opacity: 0.9 }}>
                                        {el.description}
                                    </div>
                                    <div style={{ marginTop: "1.5rem" }}>
                                        <Row>
                                            <Col span={20}>
                                                {el.domain.map( ( _el ) => <Tag>{_el}</Tag> )}
                                            </Col>
                                            <Col span={4}>
                                                <span style={{ marginLeft: '7rem' }}><LocationOnIcon /> {el.country}</span>
                                            </Col>
                                        </Row>
                                    </div>
                                </div>
                            </Card> )
                        } )}
                    </div>

                </Card>
            </div>
        </div>
    );
}
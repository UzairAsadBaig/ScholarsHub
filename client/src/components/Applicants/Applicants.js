import React from 'react';
import { Table } from 'antd';
import { PageHeader } from '../Generic/PageHeader';
import DoneIcon from '@mui/icons-material/Done';
import CloseIcon from '@mui/icons-material/Close';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { useNavigate } from 'react-router-dom';

export const Applicants = () => {
    const navigate = useNavigate()
    const columns = [
        {
          title: 'Applicant Name',
          dataIndex: 'name',
          key: 'name',
          render: (text) => <a>{text}</a>,
        },
        {
          title: 'Applicant Email',
          dataIndex: 'email',
          key: 'email',
        }, {
          title: 'Applied on',
          dataIndex: 'appliedOn',
          key: 'appliedOn',
        },
        {
          title: 'Job Title',
          dataIndex: 'jobTitle',
          key: 'jobTitle',
        },
      
        {
          title: 'Action',
          key: 'action',
          render: (_, record) => (
            <div>
                <span onClick={()=>navigate('/dashboard/applicants/view')}><VisibilityIcon/></span>&nbsp;
                <span><CloseIcon/></span>
            </div>
          ),
        },
      ];
      const data = [
        {
          key: '1',
          name: 'John Brown',
          email: 'test.com',
          appliedOn:'Feb 2,23',
          jobTitle: 'Developer',
        },
       
      ];
    return (
        <div>
        <PageHeader heading="Applicants" subHeading="You can find all applicants of job here"/>
        <div>
        <Table columns={columns} dataSource={data} />
        </div>
        </div>
    );
}


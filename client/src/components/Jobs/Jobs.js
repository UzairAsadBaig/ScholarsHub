import React, {useState} from 'react';
import { Table , Modal} from 'antd';
import { PageHeader } from '../Generic/PageHeader';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { useNavigate } from 'react-router-dom';

export const Jobs = () => {
  const navigate= useNavigate()
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
  const handleEdit=()=>{
    navigate('/dashboard/jobs/edit')
  }

    const columns = [
      {
        title:'No.',
        dataIndex:'no'
      },
        {
          title: 'Title',
          dataIndex: 'title',
       },
        {
          title: 'Country',
          dataIndex: 'country',
         
        },
        {
          title: 'Posted on',
          dataIndex: 'postedon',
        }, 
        {
          title: 'Domain',
          dataIndex: 'domain',
        }, 
        {
          title: 'Status',
          dataIndex: 'status',
        },
        {
        
            title: 'Action',
            key: 'action',
            render: (_, record) => (
              <div>
                <span onClick={()=>{navigate('/dashboard/jobs/view')}}>
              <VisibilityIcon/>
                </span>
                &nbsp;
                <span onClick={handleEdit}>
                <EditIcon/>
                </span>
                &nbsp;
                <span>
                <DeleteIcon onClick={showModal}/>
                </span>

                
              </div>
            ),
          },
      ];

      const data = [
        {
          key: '1',
          no:1,
          title: 'John Brown',
          country: 32,
          postedon: 'New York No. 1 Lake Park',
          status:'open',
          domain:'web app'
        },
       
      ];

      const onChange = (pagination, filters, sorter, extra) => {
        console.log('params', pagination, filters, sorter, extra);
      }

    return (
        <div>
             <Modal title="Delete Job" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
      </Modal>
            <PageHeader heading="Jobs" subHeading="All Jobs" btnText="Add Job" toLink='/dashboard/jobs/add'/>
            <Table columns={columns} dataSource={data} onChange={onChange} />
        </div>
    );
}


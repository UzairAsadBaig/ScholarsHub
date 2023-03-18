import React from 'react'
import { Spin } from 'antd';


const Spinner=( { marginTop="12rem", size="large" } ) => {
  // size=small,middle,large
  return (
    <div className='w-50 mx-auto text-center'>
      <Spin tip="Loading..." style={{ marginTop }} size={size}>
      </Spin>
    </div>
  )
}

{/* <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '80vh', width: '100%', color: 'white', fontWeight: 'bold' }}>
  <Spin size="large" tip="Loading..." style={{ color: '#265bc4' }} />
</div> */}
export default Spinner
import React, {useState} from 'react'
import {Input} from 'antd'
import { useSnackbar } from "notistack";

const Password=() => {

 
  return (

    <div id="password">

      <div className="mt-5">

        <h5 className='text-xl font-medium dark:text-white'>Security Settings</h5>
        <p className='test-base font-base text-gray-500 dark:text-white'>Update your profile password here.</p>
        <hr className='horizontal_bar w-64' />
      </div>

      <div className="gap-3 flex flex-wrap">

        <div className="pt-4 w-80">
          <span className='text-lg font-semibold dark:text-white'>Required Information</span>
          <p className='test-base font-base text-gray-500 dark:text-white'>Please provide all the required details to update your password</p>
        </div>

        <div className="">
          <div className=''><Input placeholder="Current Password" type="password" width='100%' name="password" /></div>
          <div className=''><Input placeholder="New Password" type="password" width="100%" name="newPassword" /></div>
          <div className=''><Input placeholder="Confirm Password" type="password" width="100%" name="confNewPassword" /></div>

        </div>

        {/* <hr className='horizontal_bar2' /> */}


      </div>
      <div className="text-end mt-5">
        <button 
          type="button"
          class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        >
          Update Password
        </button>
        {/* <button className='btn save_changes' style={{ marginRight: "-20px !important" }} >Update Password</button> */}

      </div>

    </div>
  )
}

export default Password
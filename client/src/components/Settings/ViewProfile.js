import React from "react";
import Avatar from "@mui/material/Avatar";
import { Descriptions } from "antd";


const ViewProfile = () => {

  return (
    <div id="details">
    

      <div className="w-100 space-y-4">
        <div className="gap-3 flex flex-wrap mt-4">
          <div className="w-72">
            <div className="md:pt-4">
              <span className="text-lg font-semibold dark:text-white">
                Profile Picture
              </span>
              <p className="test-base font-base text-gray-500 dark:text-white">
                This will be displayed on your profile.
              </p>
            </div>
          </div>

          <div className="md:w-50">
            <div className="d-flex">
              <div className="">
                <Avatar
                 
                  sx={{ width: 100, height: 100 }}
                  style={{ marginTop: "" }}
                />
              </div>

              <div className="ms-5 pt-4">
                <div>
                  <input
                    className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                    id="user_avatar"
                    type="file"
                    hidden
                  />
              
          
                </div>
              </div>

             </div>
          </div>

        </div>
        <div>
        <Descriptions layout="vertical" bordered>
    <Descriptions.Item label="Username">test</Descriptions.Item>
    <Descriptions.Item label="Email">t@t.com</Descriptions.Item>
    <Descriptions.Item label="Phone">090909</Descriptions.Item>
    <Descriptions.Item label="Country">Pakistan</Descriptions.Item>
    <Descriptions.Item label="Skills">Skills</Descriptions.Item>
    <Descriptions.Item label="Degree">BSSE</Descriptions.Item>
    <Descriptions.Item label="Institute">PUCIT</Descriptions.Item>
    <Descriptions.Item label="Skills">web</Descriptions.Item>
    <Descriptions.Item label="Language">Eng</Descriptions.Item>
  
    
  </Descriptions>
        </div>

        

      
      </div>
    </div>
  );
};

export default ViewProfile;

import React, { useState, useEffect } from "react";
import Avatar from "@mui/material/Avatar";
import {Input} from 'antd'
import { styled } from "@mui/material/styles";
import {  useSnackbar } from "notistack";


const Details = () => {
  const Input = styled("input")({
    display: "none",
  });
  const [userProfileData, setUserProfileData] = useState({});
  const [profileFormData, setProfileFormData] = useState({});


 

  return (
    <div id="details">
      <div className="mt-5">
        <p className="text-xl font-medium dark:text-white">Profile Details</p>
        <p className="test-base font-base text-gray-500 dark:text-white">
          Update your profile picture and personal details here.
        </p>
        <hr className="horizontal_bar w-80" />
      </div>

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
                  alt={userProfileData.firstname + userProfileData.lastname}
                  src={"https://www.meerkatsearch.com"+userProfileData.profile_img}
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
                  <button
                    type="button"
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-normal rounded text-sm px-4 py-2.5 mr-2 mb-2 focus:outline-none"
                    onClick={() => {
                      document.getElementById("user_avatar").click();
                    }}
                  >
                    Upload Image
                  </button>
          
                </div>
              </div>

             </div>
          </div>

        </div>

        {/* <hr className='horizontal_bar2' /> */}
        <div className="gap-3 flex flex-wrap mt-4">
          <div className="w-72">
            <div className="md:pt-3">
              <span
                className="text-lg font-semibold dark:text-white"
              >
                First name and Last name
              </span>
            </div>

          </div>
          <div className="gap-3 flex flex-wrap">
            <div className="md:w-50">
              <Input placeholder="Firstname" type="text" width="100%" name="firstname"/>
            </div>
            <div className="">
              <Input placeholder="Lastname" type="text" width="100%" name="lastname" />
            </div>
          </div>
        </div>

        <div className="gap-3 flex flex-wrap mt-4">
          <div className="w-72">
            <div className="md:pt-3">
              <span
                className="text-lg font-semibold dark:text-white"
              >
                Email Address
              </span>
            </div>
          </div>
          <div className="md:w-72">
            <div className="row">
              <div className="w-80">
                <Input placeholder="Email" type="email" width="100%" defaultValue={userProfileData.email} disabled={true}/>
              </div>
            </div>
          </div>
        </div>


        <div className="gap-3 flex flex-wrap mt-4">
          <div className="w-72">
            <div className="md:pt-3">
              <span
                className="text-lg font-semibold dark:text-white"
              >
                Username
              </span>
            </div>
          </div>

          <div className="md:w-72">
            <div className="row">
              <div className="w-80">
                <Input placeholder="Username" type="text" width="100%" defaultValue={userProfileData.username} disabled={true}/>
              </div>
            </div>
          </div>        
        </div>

        <div className="text-end mt-5">
          <button
            type="button"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
            Save Changes
          </button>

          {/* <button className='btn save_changes' style={{ marginRight: "-20px !important" }} >Save changes</button> */}
        </div>
      </div>
    </div>
  );
};

export default Details;

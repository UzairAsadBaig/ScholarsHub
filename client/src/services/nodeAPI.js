import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import Cookies from "js-cookie";



const baseUrl = "http://127.0.0.1:3001/api/v1";

export const nodeAPI = createApi({
  reducerPath: "nodeAPI",
  baseQuery: fetchBaseQuery({ baseUrl }),

  // Entities of API
  tagTypes: [
    "User",
    "Employee",
  ],

  endpoints: (builder) => ({
    //Optimize:  ************************** Authentication ******************************

    //********** Get All users query
    getAllUsers: builder.query({
      query: (body) => ({
        url: "/user/",
        method: "GET",
        headers: {
          authorization: `Bearer ${Cookies.get('jwt')}`
        }
      }),
      providesTags: [ 'User' ],
    }),   

     //********** Login query
    login: builder.mutation({
      query: (body) => ({
        url: "/user/login",
        method: "POST",
        body,
      }),
      // invalidatesTags: [ 'User' ],
    }),

    //********** Sign up query
    signup: builder.mutation({
      query: (body) => ({
        url: "/user/signup",
        method: "POST",
        body,
      }),
      // invalidatesTags: [ 'User' ],
    }),

    //********** Send Reset Password Link to Email
    passwordResetEmail: builder.mutation({
      query: (body) => ({
        url: "/auth/get-password-reset-link",
        method: "POST",
        body,
      }),
      // invalidatesTags: [ 'User' ],
    }),

    //********** Send Reset Password Link to Email
    resetPassword: builder.mutation({
      query: (body) => ({
        url: "/auth//password-reset",
        method: "POST",
        body,
      }),
      // invalidatesTags: [ 'User' ],
    }),
  }),
});

export const {
  useSignupMutation,
  useLoginMutation,
  usePasswordResetEmailMutation,
  useResetPasswordMutation,
  useGetAllUsersQuery
} = nodeAPI;

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
    getAllChatUsers: builder.query({
      
      query: (body) => {
        console.log('yaha dekho',body)
        return({
        url: `/${(body.role=='student' || body.role=='researcher')? 'user' : 'employer'}/chatlist/${body._id}`,
        method: "GET",
        headers: {
          authorization: `Bearer ${Cookies.get('jwt')}`
        }
      })},
      providesTags: [ 'User', 'Org' ],
    }),   

     //********** Login query
    loginUser: builder.mutation( {
      query: (body) => ({
        url: "/user/login/user",
        method: "POST",
        body,
      }),
      // invalidatesTags: [ 'User' ],
    }),
    //********** Login query
    loginOrg: builder.mutation( {
      query: (body) => ({
        url: "/employer/login/employer",
        method: "POST",
        body,
      }),
      // invalidatesTags: [ 'User' ],
    }),

    //********** Sign up User
    userSignup: builder.mutation( {
      query: ( body ) => ( {
        url: "/user/signup/user",
        method: "POST",
        body,
      } ),
      invalidatesTags: [ 'User' ],
    } ),
    //********** Sign up Organization
    orgSignup: builder.mutation( {
      query: ( body ) => ( {
        url: "/employer/signup/employer",
        method: "POST",
        body,
      } ),
      invalidatesTags: [ 'Org' ],
    } ),


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
    } ),
    //*********** Get all countries data
    getAllCountries: builder.query( {
      query: () => ( {
        url: 'https://restcountries.com/v2/all',
        method: 'GET',
        headers: {
          authorization: `Bearer ${Cookies.get( 'jwt' )}`
        }
      } )
    } ),
  }),
});

export const {
  useUserSignupMutation,
  useOrgSignupMutation,
  useLoginMutation,
  usePasswordResetEmailMutation,
  useResetPasswordMutation,
  useGetAllChatUsersQuery,
  useGetAllCountriesQuery,
  useLoginUserMutation,
  useLoginOrgMutation
} = nodeAPI;

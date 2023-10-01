
import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import { IVacation, IUser, ILogin, IError} from '../../models/models'

export const vacationsApi = createApi({
    reducerPath: 'vacationsApi',
    tagTypes: ['IVacation[]'],
    baseQuery: fetchBaseQuery({
        baseUrl:'http://localhost:4001/'
    }),
    refetchOnFocus:true,
    refetchOnMountOrArgChange:true,
    endpoints: build =>({
        getVacations: build.query<IVacation[], string>({
          query:(stepFrom='all')=>
              `vacations?${stepFrom && `_stepFrom=${stepFrom}`}`,   
              providesTags: ['IVacation[]'],       
      }),
        
        editVacations: build.query<IVacation[], string>({
          query:()=>
          `vacations?${`_stepFrom=all`}`, 
              providesTags: ['IVacation[]'],       
      }),
     
  
    
      
          registerUser: build.mutation<IUser,object>({
            query: (body) => ({
              url: '/users/new',
              method: 'POST',
              body,
              headers: {
                'Content-type': 'application/json; charset=UTF-8',
              },
              transformResponse: (response: {data: unknown,status:unknown} ) => response.data,
            }),
          }),

          loginUser: build.mutation<ILogin,object>({
            query: (payload) => ({
              url: '/users/login',
              method: 'POST',
              body:payload,
              headers: {
                'Content-type': 'application/json; charset=UTF-8',
              },
            
              transformResponse: (response: {data: unknown,error:IError} ) => response.data,
            }),
          }),

          addVacation: build.mutation<IVacation,object>({
            query: (payload) => ({
              url: '/vacations/new',
              method: 'POST',
              body: payload,
              headers: {
                'Content-type': 'application/json; charset=UTF-8',
              },
              transformResponse: (response: {data: unknown,status:unknown} ) => response.data,
            }),
    
            // invalidatesTags: ['IVacation[]'],
          }),

          putVacation: build.mutation<IVacation,object>({
            query: (payload) => ({
              url: '/vacations/edit',
              method: 'PUT',
              body: payload,
              headers: {
                'Content-type': 'application/json; charset=UTF-8',
              },
              transformResponse: (response: {data: unknown,status:unknown} ) => response.data,
            }),

            // invalidatesTags: ['IVacation[]'],
          }),


          deleteVacation: build.mutation<IVacation[], string>({
            query:(vcnId)=>({ 
            url:  `vacations/delete/${vcnId}`, 
            method: 'DELETE',
            }),
            invalidatesTags: ['IVacation[]'],
        }),

        

       
      
    })
})
export const {useGetVacationsQuery, useRegisterUserMutation, useAddVacationMutation,useDeleteVacationMutation, usePutVacationMutation, useLoginUserMutation, useEditVacationsQuery} = vacationsApi



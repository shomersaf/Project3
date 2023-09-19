
import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import { IVacation, IUser } from '../../models/models'

export const vacationsApi = createApi({
    reducerPath: 'vacationsApi',
    baseQuery: fetchBaseQuery({
        baseUrl:'http://localhost:4001/'
    }),
    refetchOnFocus:true,
    tagTypes: ['allVacations'],
    endpoints: build =>({
        getVacations: build.query<IVacation[], string>({
            query:()=>
                'vacations',   
                providesTags: ['allVacations'], 
        }),
      
          registerUser: build.mutation<IUser,object>({
            query: (payload) => ({
              url: '/users/new',
              method: 'POST',
              body: payload,
              headers: {
                'Content-type': 'application/json; charset=UTF-8',
              },
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
            }),

          }),
    })
})
export const {useGetVacationsQuery, useRegisterUserMutation, useAddVacationMutation } = vacationsApi




import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import { IVacation, IUser } from '../../models/models'

export const vacationsApi = createApi({
    reducerPath: 'vacationsApi',
    baseQuery: fetchBaseQuery({
        baseUrl:'http://localhost:4001/'
    }),
    refetchOnFocus:true,
    tagTypes: ['Post'],
    endpoints: build =>({
        getVacations: build.query<IVacation[], string>({
            query:()=>
                'vacations',    
        }),
        postUser: build.query<IUser,object>({
            query: (payload) => ({
              url: '/users/new',
              method: 'POST',
              body: payload,
              headers: {
                'Content-type': 'application/json; charset=UTF-8',
              },
            }),
            providesTags: ['Post'],
          }),
    })
})
export const {useGetVacationsQuery, usePostUserQuery, useLazyGetVacationsQuery,useLazyPostUserQuery } = vacationsApi


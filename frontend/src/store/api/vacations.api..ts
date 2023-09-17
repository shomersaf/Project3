
import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import { IVacation } from '../../models/models'
export const vacationsApi = createApi({
    reducerPath: 'vacations/api',
    baseQuery: fetchBaseQuery({
        baseUrl:'http://localhost:4001/'
    }),
    refetchOnFocus:true,
    endpoints: build =>({
        getVacations: build.query<IVacation[], string>({
            query:()=>({
                url: 'vacations'
            })
        })
    })
})
export const {useGetVacationsQuery } = vacationsApi
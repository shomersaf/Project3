
import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

export const vacationsApi = createApi({
    reducerPath: 'vacations/api',
    baseQuery: fetchBaseQuery({
        baseUrl:'http://localhost:4001'
    }),
    endpoints: build =>({
        getVacations: build.query({
            query:()=>({
                url: '/'
            })
        })
    })
})
export const {useGetVacationsQuery } = vacationsApi
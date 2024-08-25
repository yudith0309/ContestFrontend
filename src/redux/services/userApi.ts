"use client";     
//State Global  Import/typed

import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

//Data
type User = {  
    name:string
    email:string
    age: string
}

//Configure the base Domain/Router
export const userApi = createApi({
    reducerPath:'useAPI',
    baseQuery:fetchBaseQuery({
        baseUrl:'http://localhost:5000/'
    }),

    //Many Objects /Mutation alter data/Query send data
    endpoints:(builder)=>({
        getUser: builder.query<User[],null>({
            query: ()=>'students' //http/domain/users
        }),
        getUserByid: builder.query<User[],{id:string}>({
            query: ({id})=>`students/${id}` //http/domain/usrs/id
        })
    })    
})

export const {useGetUserQuery,useGetUserByidQuery} = userApi
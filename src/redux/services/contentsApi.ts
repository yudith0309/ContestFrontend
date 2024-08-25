"use client";     
//State Global  Import/typed

import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

//Data
type User = {  
    id:number
    name:string
    email:string
    userame: string
}

//Configure the base Domain/Router
export const userApi = createApi({
    reducerPath:'useAPI',
    baseQuery:fetchBaseQuery({
        baseUrl:'https://jsonplaceholder.typicode.com/'
    }),

    //Many Objects /Mutation alter data/Query send data
    endpoints:(builder)=>({
        getUser: builder.query<User[],null>({
            query: ()=>'users' //http/domain/users
        }),
        getUserByid: builder.query<User[],{id:string}>({
            query: ({id})=>`users/${id}` //http/domain/usrs/id
        })
    })    
})

export const {useGetUserQuery,useGetUserByidQuery} = userApi
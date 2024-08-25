"use client";

import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../redux/features/counter.Slice'
import { userApi } from './services/userApi'; //Api Users
import { setupListeners } from '@reduxjs/toolkit/dist/query'; //handle asynchronous functions
 
export const store = configureStore({
  //Global state
  reducer: {
    counterReducer,
    //Use name path the reducers of API User
    [userApi.reducerPath]: userApi.reducer 
  },
  //Function before arrive
  //Returns an array containing the default list of middleware.
  middleware:(getDefaultMiddleware)=>getDefaultMiddleware()
  .concat([userApi.middleware])
})

//Execute actions inside the store 
setupListeners(store.dispatch)

//Result and the given action synchronously
export type RootState = ReturnType<typeof store.getState>

//This only way to trigger a state change
export type AppDispatch= typeof store.dispatch  
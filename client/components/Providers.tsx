"use client"

import { useAppDispatch, useAppSelector } from '@/app/hooks/redux'
import { getMe } from '@/app/store/authSlice'
import store from '@/app/store/store'
import React, { useEffect } from 'react'
import { Provider } from 'react-redux'
import {ToastContainer} from "react-toastify"

const InitialState = () => {
  const dispatch = useAppDispatch();
  
  useEffect(() => {
    const currentUser = JSON.parse(localStorage.getItem("currentUser") || "null")
    if(!currentUser) {
      dispatch(getMe())
    }
  }, [dispatch])
  
  return null
}

const Providers = ({children}: {
    children: React.ReactNode
}) => {
  return (
    <Provider store={store}>
        <InitialState/>
        <ToastContainer/>
        {children}
    </Provider>
  )
}

export default Providers
"use client"

import { useAppDispatch } from '@/app/hooks/redux'
import store from '@/app/store/store'
import React, { useEffect } from 'react'
import { Provider } from 'react-redux'
import {ToastContainer} from "react-toastify"

const InitialState = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    //will do
  }, [])
}
const Providers = ({children}: {
    children: React.ReactNode
}) => {
  return (
    <Provider store={store}>
        <ToastContainer/>
        {children}
    </Provider>
  )
}

export default Providers
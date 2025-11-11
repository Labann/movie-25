"use client"

import store from '@/app/store/store'
import React from 'react'
import { Provider } from 'react-redux'
import {ToastContainer} from "react-toastify"
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
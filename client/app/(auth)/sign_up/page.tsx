"use client"
import React, { useState } from 'react'
import { useFormik } from "formik"
import * as Yup from "yup"
import { FiEye } from "react-icons/fi";
import { FiEyeOff } from "react-icons/fi";
import Link from 'next/link';
import { FcGoogle } from "react-icons/fc";
import { useAppDispatch } from '@/app/hooks/redux';
import { getMe, login_v2, sign_upV1 } from '@/app/store/authSlice';
import { toast } from 'react-toastify';
import { SpinnerCustom } from '@/components/ui/spinner';
import { useRouter } from 'next/navigation';
const Sign_up = () => {
  
    const [isSeen, setIsSeen] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const validationSchema = Yup.object({
      email : Yup.string().email("Invalid format").required(),
      password: Yup.string().min(3).required("Password is required")
    })
    const router = useRouter();
    const dispatch = useAppDispatch();
    const formik = useFormik({
      initialValues: {email: "", password: ''},
      validationSchema: validationSchema,
      onSubmit: async (values) => {
        setIsLoading(true)
        const action = await dispatch(sign_upV1(values));
        setIsLoading(false)
        if(action.type === "/auth/v1/sign_up/rejected"){
          toast.error(String(action.payload))
        }
        if(action.type === "/auth/v1/sign_up/fulfilled"){
          dispatch(getMe())
          toast.success("user created successfully")
          router.push("/home")
        }
      }
    })
    return (
     <div className="min-h-screen relative bg-primary p-4 bg-[url('/hero.png')] py-38">
      <div className="absolute top-0 left-0 w-full h-full bg-black/30 z-5"></div>
      <div  
        className="max-w-lg mx-auto py-6 rounded-md p-5 flex flex-col space-y-1 relative z-10 bg-white/10 border text-white">
        <form onSubmit={formik.handleSubmit} action="" className='flex flex-col w-full space-y-2'>
          <h3 className='text-center pb-4 md:text-xl text-lg'>Sign up to Movie</h3>
          <div className="w-full flex flex-col space-y-2">
            <label htmlFor="email">Email</label>
            <input 
              type="text"
              name='email'
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email} 
              placeholder='Enter your email' 
              className='text-sm rounded-xl p-2 border'
              />
              {formik.touched.email && formik.errors.email && <span className='text-red-500'>{formik.errors.email}</span>}
          </div>
          <div className="w-full flex flex-col space-y-2 relative">
            <label htmlFor="password">Password</label>
            <input 
              type={isSeen? "text": "password"}
              name='password' 
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
              placeholder='Enter your password' 
              className='text-sm p-2 rounded-xl border'
              />
              {
                isSeen? <FiEye 
                      onClick={() => setIsSeen(!isSeen)} 
                      className='absolute right-2 top-11 rounded-xl cursor-pointer'/>: 
                      <FiEyeOff
                        onClick={() => setIsSeen(!isSeen)} 
                        className='absolute right-2 top-11 cursor-pointer rounded-xl'
                        />
              }
              {formik.touched.password && formik.errors.password && <span className='text-red-500'>{formik.errors.password}</span>}
          </div>

          <button type='submit' className='bg-gray-semibold flex items-center justify-center text-sm w-full p-2 cursor-pointer rounded-xl capitalize'>
            {isLoading? <SpinnerCustom/>: "sign up now"}
          </button>
        </form>
        
        <div className="text-sm text-center">{"Already have an account? "}<Link href={"/login"} className='text-gray-light underline'>sign in</Link></div>
        <div className="flex items-center space-x-2">
          <div className="border border-gray-light flex-1"></div>
          <p className='text-xs'>or</p>
          <div className="border border-gray-light flex-1"></div>
        </div>
        <button onClick={() => dispatch(login_v2())} className='bg-gray-semibold max-w-lg mx-auto flex space-x-2 text-sm items-center justify-center mt-4 text-white w-full p-2 cursor-pointer rounded-xl capitalize'>
            <FcGoogle  />
            <p>Sing up with Google</p>          
        </button>
      </div>

      
    </div>
    )
}

export default Sign_up
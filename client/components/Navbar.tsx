"use client"
import React, {useState} from 'react'
import Image from 'next/image'
import { CiHome } from "react-icons/ci";
import { IoIosSearch } from "react-icons/io";
import { FaPlus } from "react-icons/fa6";
import Link from 'next/link';
import { useAppDispatch, useAppSelector } from '@/app/hooks/redux';
import { logout } from '@/app/store/authSlice';
const Navbar = () => {
  const {currentUser} = useAppSelector(state => state.auth);
  const dispatch = useAppDispatch();
  return (
    <div className={`${currentUser? `bg-primary`: `bg-default/60`} z-50 md:px-6 pr-2 fixed top-0 left-0 w-full flex items-center justify-between`}>
        <Link href={"/"} className="">
            <Image
                src={"/logo_.png"}
                alt='logo'
                width={150}
                height={150}
            />
        </Link>
        {
          
            <div className="md:flex hidden items-center mx-auto space-x-6 text-lg text-white">
              <Link href={"/home"}  className="flex space-x-2 items-center  focus:text-gray-semibold hover:text-gray-semibold">
                <CiHome size={"1.2em"}/>
                <span>Home</span>
              </Link>
              <Link href={"/search"} className="flex space-x-2 items-center  focus:text-gray-semibold hover:text-gray-semibold">
                <IoIosSearch size={"1.2em"}/>
                <span>Search</span>
              </Link>
              {currentUser && <Link href={"/watch_list"} className="flex space-x-2 items-center  focus:text-gray-semibold hover:text-gray-semibold">
                <FaPlus size={"1.2em"}/>
                <span>Watchlist</span>
              </Link>}
            </div>
          
        }
        {
          currentUser && (
            <Link href={"/profile"} className="flex space-x-1 text-white items-center">
              <span>My Profile</span>
              <Image
                src={"/avatar.png"}
                alt='avatar'
                width={30}
                height={30}
                className='rounded-full'
              />
            </Link>
          )
        }
        {!currentUser && <Link href={"/login"} className="flex spacex-x-2 items-center">
            <button className='text-sm bg-gray-semibold hover:bg-gray-light rounded-2xl md:px-12 px-6 py-1 text-white cursor-pointer'>sign in</button>
        </Link>}
        {
          currentUser && <button onClick={() => dispatch(logout())} className='text-sm bg-gray-semibold hover:bg-gray-light rounded-2xl md:px-12 px-6 py-1 text-white cursor-pointer'>logout</button>
        }
    </div>
  )
}

export default Navbar
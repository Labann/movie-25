"use client"
import React, {useEffect, useRef, useState} from 'react'
import Image from 'next/image'
import { CiHome } from "react-icons/ci";
import { IoIosSearch } from "react-icons/io";
import { FaPlus } from "react-icons/fa6";
import Link from 'next/link';
import { useAppDispatch, useAppSelector } from '@/app/hooks/redux';
import { logout } from '@/app/store/authSlice';
import { IoMdMenu } from "react-icons/io";
import { IoMdClose } from "react-icons/io";
const Navbar = () => {
  const {currentUser} = useAppSelector(state => state.auth);
  const dispatch = useAppDispatch();
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);
  return (
    <div ref={navRef}  className={`${currentUser? `bg-primary`: `bg-default/60`} z-50 md:px-6 pr-2 fixed top-0 left-0 w-full flex flex-col`}>
        <div className={`flex items-center justify-between w-full`}>
          <div className='flex space-x-2 items-center'>
              {
              isOpen? <IoMdMenu 
                      onClick={() => setIsOpen(!isOpen)} 
                      size={"1.5em"}
                      className='md:hidden cursor-pointer text-gray-light'/>
                      :<IoMdClose 
                        size={"1.5em"}
                      onClick={() => setIsOpen(!isOpen)} 
                      className='md:hidden cursor-pointer text-gray-light'/>
            }
            <Link href={"/"} className="">
                <Image
                    src={"/logo_.png"}
                    alt='logo'
                    width={150}
                    height={150}
                />
            </Link>
          </div>
          
          {
            
              <div className="md:flex hidden items-center mx-auto md:space-x-6 text-sm space-x-2">
                <Link href={"/home"}  className="flex space-x-2 items-center justify-between text-white focus:text-gray-semibold hover:text-gray-semibold">
                  <CiHome size={"1.2em"}/>
                  <span>Home</span>
                </Link>
                <Link href={"/search"} className="flex md:hidden space-x-2 items-center justify-between text-white focus:text-gray-semibold hover:text-gray-semibold">
                  <IoIosSearch size={"1.2em"}/>
                  <span>Search</span>
                </Link>
                {currentUser && <Link href={"/watch_list"} className="flex md:hidden space-x-2 items-center text-white focus:text-gray-semibold hover:text-gray-semibold">
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
      {isOpen && <div className="flex flex-col w-full space-y-2 text-center md:hidden">
          <Link href={"/home"}  className="flex space-x-2 items-center  focus:text-gray-semibold hover:text-gray-semibold">
                  <CiHome size={"1.2em"}/>
                  <span>Home</span>
          </Link>
          <Link href={"/search"} className="md:flex hidden space-x-2 items-center  focus:text-gray-semibold hover:text-gray-semibold">
                  <IoIosSearch size={"1.2em"}/>
                  <span>Search</span>
                </Link>
          {currentUser && <Link href={"/watch_list"} className="md:flex hidden space-x-2 items-center  focus:text-gray-semibold hover:text-gray-semibold">
            <FaPlus size={"1.2em"}/>
            <span>Watchlist</span>
          </Link>}
      </div>}
    </div>
    
  )
}

export default Navbar
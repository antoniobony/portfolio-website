import "./nav.css"
import Link from "next/link";
import React, { useState } from "react";
import { LogOut, Menu, MenuIcon, Moon, Settings, Sun } from "lucide-react";
import { useAppDispatch } from "@/app/redux";
import { useRouter } from "next/navigation";
import { Bio } from "@/app/data/constant";
interface NavbarProps {
  isSidebarCollapsed: boolean;
  isDarkMode:boolean
}

const Navbar: React.FC<NavbarProps> = ({ isSidebarCollapsed,isDarkMode }) => {
  const dispatch = useAppDispatch();
  
  const [isOpen,setIsOpen]=useState(false)

  return (
    <div className="flex w-full justify-between bg-white py-3 z-50 dark:bg-dark-bg sticky top-0">
      <div className="px-4">
        <h1 className="font-extrabold text-2xl text-white">PortFolio</h1>
      </div>
      <div className="h-full relative align-middle text-white px-4 md:hidden">
          <MenuIcon onClick={()=>setIsOpen(!isOpen)}/>
      </div>
      <div className="md:flex md:space-x-3 relative text-lg text-white hidden px-4">
        <Link href="#About" className="hover:text-purple-600 font-semibold cursor-pointer p-2">About</Link>
        <Link href="#Skills" className="hover:text-purple-600 font-semibold cursor-pointer p-2">Skills</Link>
        <Link href="#Experience" className="hover:text-purple-600 font-semibold cursor-pointer p-2">Experience</Link>
        <Link href="#Project" className="hover:text-purple-600 font-semibold cursor-pointer p-2">Projects</Link>
        <Link href="#Contact" className="hover:text-purple-600 font-semibold cursor-pointer p-2">Contact</Link>
      </div>
      {
        isOpen && (
          <div className="flex flex-col w-full absolute top-14 text-white bg-opacity-40 bg-gray-400 md:hidden">
            <Link href="#About" className="hover:text-purple-600 font-semibold cursor-pointer p-2">About</Link>
            <Link  href="#Skills" className="hover:text-purple-600 font-semibold cursor-pointer p-2">Skills</Link>
            <Link href="#Experience" className="hover:text-purple-600 font-semibold cursor-pointer p-2">Experience</Link>
            <Link href="#Project" className="hover:text-purple-600 font-semibold cursor-pointer p-2">Projects</Link>
            <Link href="#Contact" className="hover:text-purple-600 font-semibold cursor-pointer p-2">Contact</Link>
            <Link href={Bio.github} className="hover:text-purple-600 font-semibold cursor-pointer p-2" >Github Profile</Link>
          </div>
        )
      }
      <div className="md:flex hidden px-4 relative">
        <button className="w-full h-full transition ease-out duration-500  hover:bg-purple-600 hover:text-white  items-center border-[1px] border-solid rounded-xl border-purple-600 text-purple-600 text-base">
        <h1 className="font-bold p-2"><a href={Bio.github}>Github Profile</a></h1>
        </button>
      </div>
    </div>
  );
};


export default Navbar;



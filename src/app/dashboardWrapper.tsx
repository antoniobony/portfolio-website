"use client"

import React, { useEffect } from "react";
import Navbar from "@/app/(component)/Navbar/Navbar"; 
import { useAppSelector } from "./redux";
import StarsCanvas from './(component)/ui/stars';
 function DashboardLayout({children}:{children:React.ReactNode}) {
    const isSidebarCollapsed = useAppSelector((state)=> state.global.isSidebarCollapsed)

    useEffect(
        ()=>{
            document.documentElement.classList.add("dark")
        }
    )
    return (
      <div className="flex min-h-screen w-full bg-gray-50 text-gray-900">
        <main className={`flex w-full relative flex-col bg-gray-50 dark:bg-dark-bg  `}>
            <StarsCanvas/>
            <Navbar isDarkMode={true} isSidebarCollapsed={isSidebarCollapsed}/>
                {children}

        </main>
      </div>
    )
  }


const DashboardWrapper =({children}:{children:React.ReactNode})=>{
    return(
            <DashboardLayout>
                {children}
            </DashboardLayout>
    )
    
}

export default DashboardWrapper;
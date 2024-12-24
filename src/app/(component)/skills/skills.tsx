import { title } from "process";
import React from "react";
import {skills} from "@/app/data/constant"
import  {Tilt} from 'react-tilt'
import {motion } from "framer-motion"
import { headContentAnimation } from "../ui/motion";

export const Skills=()=>{
    return(
        <motion.div {...headContentAnimation}>
            <div className="flex flex-col justify-center relative z-[1] mx-auto mt-10 xl:mt-[220px]" id="Skills">
            <div className="flex flex-col   w-ful max-w-[1100px]  mx-auto">
                <div className="xl:text-5xl text-4xl mt-[12px] md:font-[52px] font-semibold md:mt-[20px] text-white mx-auto" >Skills</div>
                <div className="text-[18px] xl:text-xl md:text-[16px] font-semibold mt-[20px] md:mt-[40px] text-center text-gray-500">Here are some of my skills on which I have been working on for the past 3 years.</div>
            </div>
            <div className="flex flex-wrap w-full gap-[50px] justify-center mt-[20px] ">
                {
                    skills.map((skill,index)=>(
                    <Tilt key={index}>
                        <div key={index} className=" w-full max-w-[330px] sm:max-w-[500px] h-[339.5px] md:h-[243px] bg-[rgba(17,25,40,0.83)] border-[0.5px] border-[rgba(255,255,255,0.125)]  rounded-2xl pt-[10px]  sm:pt-[18px]  text-gray-300 " 
                        style={{boxShadow:"rgba(23,92,230,0.15) 0px 4px 24px"}}>
                            <div className="text-[28px] font-semibold text-center ">{skill.title}</div>
                            <div translate="no" className="flex justify-center flex-wrap gap-[12px] mb-[20px] py-5 px-2 mt-5">
                                {
                                    skill.skills.map((item,index_x)=>(
                                        <div key={index_x} className="flex flex-row text-[14px] p-2 sm:text-[16px] font-semibold  align-middle justify-center gap-2  text-center border-[0.5px] rounded-xl  border-solid border-[rgba(255,255,255,0.125)] ">
                                                <img src={item.image} alt={index_x+''} width={24} height={24}/>
                                                <p>{item.name}</p>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    </Tilt>
                    
                    ))
                }
            </div>
        </div>
        </motion.div>
        
    )
}
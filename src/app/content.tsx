import Image from 'next/image';
import './content.css' 
import { Meteors } from './(component)/meteor';
import Typewriter  from "typewriter-effect";
import {motion } from "framer-motion"
import {headContainerAnimation, headContentAnimation,headTextAnimation,slideAnimation} from "@/app/(component)/ui/motion"
import { Skills } from './(component)/skills/skills';
import { Experience } from './(component)/experience/Experience';
import { Project } from './(component)/project/Project';
import Contact from './(component)/Contact/Contact';
import Footer from './Footer/Footer';
import { Download } from 'lucide-react';
import Link from 'next/link';

const Content =()=>{
    return(
        <>
        <div className="flex  justify-center h-full relative pt-[80px] px-[30px] z-10 md:pt-[66px]  sm:[32px] sm:px-4">
            <motion.div {...headContainerAnimation}>
            <div className="flex flex-col-reverse h-full w-full md:space-x-56  md:flex-row xl:mt-16">
                <motion.div {...headTextAnimation}>
                <div className="flex flex-col w-full space-y-4  md:mb-[80px] sm:pl-10 max-w-[700px]">
                    <div className="flex xl:text-6xl  mx-auto sm:mx-0 md:mb-2 text-center text-3xl md:text-4xl font-bold  text-white ">
                        <p>Hi, I am Antonio </p>
                    </div>
                    <div className="flex font-semibold mx-auto sm:mx-0 md:text-3xl xl:text-5xl text-xl items-center  mb-4 md:mb-0 gap-3 ">
                        <p className="text-white">I am  a</p>
                        <span translate='no' className="cursor-pointer text-purple-400">
                        <Typewriter 
                        options={{
                            strings:["Full stack developer","Mobile developer"],
                            autoStart:true,
                            loop:true
                        }} />
                        </span>
                    </div>
                    <p className="xl:text-3xl md:text-2xl text-xl  text-gray-300 text-opacity-80 xl:leading-10 leading-[35px]">I am a motivated and versatile individual, eager to embrace new challenges and continuously expand my knowledge. 
                        With a passion for learning and a commitment to delivering high-quality results, 
                        I approach every opportunity with a positive attitude and a growth mindset. 
                        I am dedicated to making meaningful contributions and achieving excellence.. 
                    </p>
                    <Link href="./cv.png" target='_blank' rel='aza'>
                        <button  className="flex flex-row justify-between space-x-2 my-auto items-center h-14 mx-auto sm:mx-0 p-2 m-5 relative rounded-xl font-semibold text-lg text-white gradient 
                        hover:scale-105 transition-all duration-500 ease-in-out">
                            <Download stroke='white'/>
                            <p>Download my CV</p>
                        </button>
                    </Link>
                    
                </div>
                </motion.div>
                <motion.div {...headContentAnimation}>
                    <div className='h-[calc(530/2)px] w-[250px] md:h-[530px] md:w-[200px] mb-10 md:mb-0 relative overflow-hidden mx-auto md:mx-0'>
                        <Image src="/assets/profcile.png" alt='profile' width={300} height={300}/>
                    </div>
                </motion.div>
            </div>
            </motion.div>
        </div>
        <div style={{
             paddingBottom: "100px",
             background: "linear-gradient(38.73deg,rgba(204, 0, 187, 0.15) 0%,rgba(201, 32, 184, 0) 50%);linear-gradient(141.27deg,rgba(0, 70, 209, 0) 50%,rgba(0, 70, 209, 0.15) 100%)",
             width: "100%",
             clipPath: "polygon(0 0, 100% 0, 100% 100%, 30% 98%, 0 100%)"
        }
        }>
            <Skills/>
        </div>
        <Experience/>
        <Project/>
        <Contact/>
        <Footer/>
        </>
    )
}

export default Content
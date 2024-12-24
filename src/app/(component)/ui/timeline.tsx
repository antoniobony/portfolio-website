"use client";
import "../../content.css"
import {
  useMotionValueEvent,
  useScroll,
  useTransform,
  motion,
} from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import ExperienceCard, { exp } from "../Card/ExperienceCard";
import Image from "next/image";

export const Timeline = ({ data }: { data: exp[]  }) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div
      className="w-full  bg-transparent font-sans md:px-10"
      ref={containerRef}
    >
        <div className="flex flex-col   w-ful max-w-[1100px]  mx-auto">
            <div className="xl:text-5xl text-4xl mt-[12px] md:font-[52px] font-semibold md:mt-[20px] text-white mx-auto" >Experience</div>
            <div className="text-[18px] xl:text-xl md:text-[16px] font-semibold mt-[20px] md:mt-[40px] text-center text-gray-500">My work experience as a software engineer and working on different
            companies and projects.</div>
        </div>

      <div ref={ref} className="relative max-w-7xl mx-auto pb-20">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex justify-start pt-10 md:pt-40 md:gap-10"
          >
            <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
              <div className="h-10 absolute left-3 md:left-3 w-10 rounded-full bg-white dark:bg-black flex items-center justify-center">
                <Image src={item.img} alt={index+""} className="rounded-full" width={40} height={40}/>
              </div>
              <h3 className="hidden md:block text-xl md:pl-20 md:text-5xl font-bold text-neutral-500 dark:text-neutral-500 ">
                {item.company}
              </h3>
            </div>
            <div className="relative pl-20 pr-4 md:pl-4 w-full">
              <h3 className="md:hidden block text-2xl mb-4 text-left font-bold text-neutral-500 dark:text-neutral-500">
                {item.company}
              </h3>
              <ExperienceCard experience={item} key={index}/>{" "}
            </div>

          </div>
        ))}
        <div
          style={{
            height: height+ "px",
          }}
          className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-200 dark:via-neutral-700 to-transparent to-[99%]  [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] "
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0  w-[2px] gradient from-[0%] via-[50%]  rounded-full"
          />
        </div>
      </div>
    </div>
  );
};

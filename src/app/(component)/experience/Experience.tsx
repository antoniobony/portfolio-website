import Image from "next/image";
import React from "react";
import { Timeline } from "@/app/(component)/ui/timeline";
import { experiences} from "@/app/data/constant";
import { exp } from "../Card/ExperienceCard";

export function Experience() {
  return (
    <div className="w-full relative xl:mt-[180px] mt-10" id="Experiencs">
      <Timeline data={experiences as exp[]} />
    </div>
  );
}

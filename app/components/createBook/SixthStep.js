
import React, { useContext } from "react";
import { multiStepContext } from "../../StepContext";

import ImageCard from "../ImageCard";


export default function SixthStep() {
    const {setCurrentStep, userData, setUserData,submitData} = useContext(multiStepContext);
  return (
    <div>
      <div className="flex flex-col items-center mx-16 bg-white h-full pt-24 rounded-lg">
      <ImageCard key={1} src={'/images/building.jpg'} alt={'Image'} />
        <button className="btn self-center w-1/4 bg-btn text-primary p-3 m-4 rounded-lg"
        onClick={submitData} >Next Step</button>
      </div>
    </div>
  );
}

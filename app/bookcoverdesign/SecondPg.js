import {
  InputLabel,
  TextField,
  Select,
  MenuItem,
  FormControl,
  Slider,
  Typography,
} from "@mui/material";
import React, { useContext, useState } from "react";
import { multiStepContext } from "../StepContext";
import ImageCard from "../components/ImageCard";

export default function SecondPg() {
  const [selectedFile1, setSelectedFile1] = useState(null);
  const [selectedFile2, setSelectedFile2] = useState(null);
  const [selectedFile3, setSelectedFile3] = useState(null);


  const [generatedImage, setGeneratedImage] = useState('');



  const { setCurrentDesignStep, userData, setUserData } =
    useContext(multiStepContext);
  return (
    <div>
      <div className="flex flex-col mx-20 bg-white p-8 pl-12 rounded-lg ">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-8">
          <div className="col-span-1">
            <InputLabel className="text-black font-bold">
              Select Industry
            </InputLabel>
            <Select
              value={userData["industry"]}
              onChange={(e) =>
                setUserData({ ...userData, industry: e.target.value })
              }
              displayEmpty
              className="bg-primary rounded-3xl w-full mt-1 pb-4 h-[40%]"
              variant="filled"
              disableUnderline
              defaultValue={userData["industry"]}
              autoFocus={false}
            >
              <MenuItem value="Agency">Agency</MenuItem>
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </div>
          <div className="col-span-1">
            <InputLabel className="text-black font-bold">
              Select Layout
            </InputLabel>
            <Select
              value={userData["layout"]}
              onChange={(e) =>
                setUserData({ ...userData, layout: e.target.value })
              }
              displayEmpty
              className="bg-primary rounded-3xl w-full mt-1 pb-4 h-[40%]"
              variant="filled"
              disableUnderline
              defaultValue="Hungarian"
              autoFocus={false}
            >
              <MenuItem value="Hungarian">Hungarian</MenuItem>
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </div>
          <div className="col-span-1">
            <InputLabel className="text-black font-bold">
              Select Font
            </InputLabel>
            <Select
              value={userData["font"]}
              onChange={(e) =>
                setUserData({ ...userData, font: e.target.value })
              }
              displayEmpty
              className="bg-primary rounded-3xl w-full mt-1 pb-4 h-[40%]"
              variant="filled"
              disableUnderline
              defaultValue="Hungarian"
              autoFocus={false}
            >
              <MenuItem value="Hungarian">Hungarian</MenuItem>
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </div>
          <div className="col-span-1">
            <InputLabel className="text-black font-bold">
              Select Colors
            </InputLabel>
            <Select
              value={userData["colors"]}
              onChange={(e) =>
                setUserData({ ...userData, colors: e.target.value })
              }
              displayEmpty
              className="bg-primary rounded-3xl w-full mt-1 pb-4 h-[40%]"
              variant="filled"
              disableUnderline
              defaultValue="Hungarian"
              autoFocus={false}
            >
              <MenuItem value="Hungarian">Hungarian</MenuItem>
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="w-[45%]">
            <InputLabel className="text-black font-bold mb-1">
              Logo Preview
            </InputLabel>
            <img
              src={userData["logoUrl"]}
              alt="image"
              className=" object-cover rounded-lg"
            />
          </div>
        </div>
        <div className="flex flex-row justify-center">
        <button className="btn self-center row lg:w-1/6 md:w-1/3 bg-btn text-primary p-3 mt-6 rounded-lg"
        onClick={()=>submitData}
         >Save</button>
        <button className="btn self-center lg:w-1/6 md:w-1/3 bg-btn text-primary p-3 mt-6 ml-4 rounded-lg"
        onClick={()=>setCurrentDesignStep(1)}
         >Buy</button>
         </div>
      </div>
    </div>
  );
}

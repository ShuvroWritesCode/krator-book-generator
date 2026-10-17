import { InputLabel, TextField, Select, MenuItem, FormHelperText } from "@mui/material";
import React, { useContext, useState } from "react";
import { multiStepContext } from "../StepContext";
import axios from "axios";
// import {  createMuiTheme } from '@mui/core/styles';

// git commit -m "Book cover design & illustration integrated with backend"

export default function FirstPage() {
  const [illustration, setIllustration] = useState([]);
  const [promptError, setPromptError] = useState(false);
  const [styleError, setStyleError] = useState(false);

  const { setCurrentIllustrationStep, userData, setUserData } =
    useContext(multiStepContext);
    const [selectedStyle, setSelectedStyle] = useState(userData["style"] || '');

    const handleNextStep = async()=>{

      let hasError = false;

    if (!userData["illustrationPrompt"]) {
      setPromptError(true);
      hasError = true;
    }
    if (!userData["style"]) {
      setStyleError(true);
      hasError = true;
    }

    if(!hasError){

      setPromptError(false);
      setStyleError(false);

      const response = await axios.post(
        `http://localhost:3000/api/generate-illustration`,
        {
          userPrompt: userData["illustrationPrompt"], style: userData["style"], drawingStyle: userData["drawingStyle"], medium: userData["prefMedium"]
        }
      );

      console.log(response);
      setUserData({ ...userData, illustration1Url: response.data[0],illustration2Url: response.data[1], illustration3Url: response.data[2], illustration4Url: response.data[3] });

      setCurrentIllustrationStep(2);
    }
    }


    const handleStyleChange = (style) => {
      setStyleError(false);
      setSelectedStyle(style);
      setUserData({ ...userData, style: style });
    };


  return (
    <div>
      <div className="flex flex-col mx-20 bg-white p-8 pl-12 rounded-lg ">
        <div className="grid lg:grid-cols-2 md:grid-cols-1 gap-8">
          <div className="col-span-1">
              <InputLabel className="text-black font-bold">
                Write Prompt
              </InputLabel>
              <TextField
                value={userData["illustrationPrompt"]}
                onChange={(e) =>{
                  setUserData({ ...userData, illustrationPrompt: e.target.value });
                  setPromptError(false);}
                }
                placeholder="Hungarian"
                className="bg-primary rounded-3xl w-full mt-1"
                variant="filled"
                InputProps={{
                  style: {
                    border: "none",
                    borderRadius: "15px",
                    height: "2.5rem",
                    paddingBottom: "0.8rem",
                  },
                  disableUnderline: true,
                }}
              />
              {promptError && (
              <FormHelperText error>Please enter a prompt.</FormHelperText>
            )}
          </div>
          <div className="lg:col-span-2 grid lg:grid-cols-1 md:grid-cols-2 sm:grid-cols-1 gap-4">
            <div className="">
            <InputLabel className="text-black font-bold">Select Style</InputLabel>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4">
              <div
className={`bg-btn-purple h-[155px] mt-1 rounded-3xl hover:bg-gray-300 transition flex flex-row overflow-hidden ${selectedStyle === 'Cartoon' ? 'border-4 border-blue-500' : ''}`}
                onClick={() => handleStyleChange('Cartoon')}
              >
                <img
                  src="/images/style1.png"
                  alt="Cartoon"
                  className="object-cover rounded-lg w-full h-full"
                />
              </div>
              <div
className={`bg-btn-purple h-[155px] mt-1 rounded-3xl hover:bg-gray-300 transition flex flex-row overflow-hidden ${selectedStyle === 'Realistic' ? 'border-4 border-blue-500' : ''}`}
                onClick={() => handleStyleChange('Realistic')}
              >
                <img
                  src="/images/style2.png"
                  alt="Realistic"
                  className="object-cover rounded-lg w-full h-full"
                />
              </div>
              <div
className={`bg-btn-purple h-[155px] mt-1 rounded-3xl hover:bg-gray-300 transition flex flex-row overflow-hidden ${selectedStyle === 'SketchyDrawing' ? 'border-4 border-blue-500' : ''}`}
                onClick={() => handleStyleChange('SketchyDrawing')}
              >
                <img
                  src="/images/style3.png"
                  alt="Sketchy Drawing"
                  className="object-cover rounded-lg w-full h-full"
                />
              </div>
            </div>
            {styleError && (
              <FormHelperText error>Please enter a style.</FormHelperText>
            )}
        </div>
          </div>
          <div className="col-span-1">
            <InputLabel className="text-black font-bold">
              Select Drawing Style
            </InputLabel>

            <Select
              value={userData["drawingStyle"]}
              onChange={(e) =>
                setUserData({ ...userData, drawingStyle: e.target.value })
              }
              displayEmpty
              className="bg-primary rounded-3xl w-full mt-1 pb-4 h-[40%]"
              variant="filled"
              disableUnderline
              defaultValue="3D"
              autoFocus={false}
            >
              <MenuItem value="3D">3D</MenuItem>
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </div>
          <div className="col-span-1">
            <InputLabel className="text-black font-bold">
              Select Preferred Medium
            </InputLabel>

            <Select
              value={userData["prefMedium"]}
              onChange={(e) =>
                setUserData({ ...userData, prefMedium: e.target.value })
              }
              displayEmpty
              className="bg-primary rounded-3xl w-full mt-1 pb-4 h-[40%]"
              variant="filled"
              disableUnderline
              defaultValue="HD"
              autoFocus={false}
            >
              <MenuItem value="HD">HD</MenuItem>
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </div>
        </div>
        <button
          className="btn self-center lg:w-1/4 md:w-1/2 bg-btn text-primary p-3 m-4 mt-16 rounded-lg"
          onClick={handleNextStep}
        >
          Next Step
        </button>
      </div>
    </div>
  );
}

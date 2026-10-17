import {
  InputLabel,
  TextField,
  Select,
  MenuItem,
  FormHelperText
} from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { multiStepContext } from "../StepContext";
import axios from "axios";
// import {  createMuiTheme } from '@mui/core/styles';

export default function FirstPg() {
  // const [selectedFile1, setSelectedFile1] = useState(null);
  // const [selectedFile2, setSelectedFile2] = useState(null);
  // const [selectedFile3, setSelectedFile3] = useState(null);

  const [contrast, setContrast] = useState(100);
  const [logoNameError, setLogoNameError] = useState(false);
  const [industryError, setIndustryError] = useState(false);
  const [logoFontStyleError, setLogoFontStyleError] = useState(false);
  
  const { setCurrentDesignStep, userData, setUserData } =
    useContext(multiStepContext);

  const handleContrastChange = (event, newValue) => {
    setContrast(newValue);
  };

  const handleNextStep = async() => {
    let hasError = false;

    if (!userData["logoName"]) {
      setLogoNameError(true);
      hasError = true;
    }
    if (!userData["industry"]) {
      setIndustryError(true);
      hasError = true;
    }
    if (!userData["logoFontStyle"]) {
      setLogoFontStyleError(true);
      hasError = true;
    }
    if (!hasError) {
      setLogoNameError(false);
      setIndustryError(false);
      setLogoFontStyleError(false);

      const response = await axios.post(
        'http://localhost:3000/api/generate-logo',
        { industry: userData["industry"], fontStyle: userData["fontStyle"], authorStyle1: "warm",authorStyle2:"cold" }
        // {
        //   withCredentials: true,
        //   credentials: 'include',
        // }
      );
      
      setUserData({ ...userData, logoUrl: response.data });
      setCurrentDesignStep(2);
    }
  };


  useEffect(() => {
    if (!userData.logoName) {
      setUserData((prevData) => ({
        ...prevData,
        logoName: "",
        slogan: "",
        industry: "Agency",
        logoFontStyle: "Hungarian"
      }));
    }
  }, []);



  return (
    <div>
      <div className="flex flex-col mx-20 bg-white p-8 pl-12 rounded-lg ">
        <div className="grid lg:grid-cols-2 md:grid-cols-1 gap-8">
        <div className="">
            <InputLabel className="text-black font-bold">Logo Name</InputLabel>
            <TextField
              value={userData["logoName"]}
              onChange={(e) => {
                setUserData({ ...userData, logoName: e.target.value });
                setLogoNameError(false);
              }}
              placeholder="Xyno"
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
            {logoNameError && (
              <FormHelperText error>Please enter a logo name.</FormHelperText>
            )}
          </div>
          <div className="">
            <InputLabel className="text-black font-bold">
              Slogan (optional)
            </InputLabel>
            <TextField
              value={userData["slogan"]}
              onChange={(e) => {
                setUserData({ ...userData, slogan: e.target.value });
              }}
              placeholder="Xyno"
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
          </div>
          <div className="">
            <InputLabel className="text-black font-bold">
              Select Industry
            </InputLabel>
            <Select
              value={userData["industry"]}
              onChange={(e) =>{
                setUserData({ ...userData, industry: e.target.value });
                setIndustryError(false);}
              }
              displayEmpty
              className="bg-primary rounded-3xl w-full mt-1 pb-4 h-[40%]"
              variant="filled"
              disableUnderline
              defaultValue="Agency"
              autoFocus={false}
            >
              <MenuItem value="Agency">Agency</MenuItem>
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </div>
          <div className="">
            <InputLabel className="text-black font-bold">
              Select Font Style
            </InputLabel>
            <Select
              value={userData["logoFontStyle"]}
              onChange={(e) =>{
                setUserData({ ...userData, logoFontStyle: e.target.value });
                setLogoFontStyleError(false);}
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
          <div className="col-span-2 grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4">
            <div className="">
              <InputLabel className="text-black font-bold">
                About Author
              </InputLabel>
              <div className="bg-btn-purple h-[155px] mt-1 rounded-3xl hover:bg-gray-300 transition flex flex-row">
                <button className="bg-warmLow h-full w-1/4 rounded-tl-xl"></button>
                <button className="bg-warmMidLow h-full w-1/4">Warm</button>
                <button className="bg-warmMid h-full w-1/4"></button>
                <button className="bg-warmHigh h-full w-1/4 rounded-tr-xl"></button>
              </div>
            </div>
            <div className="">
              <InputLabel className="text-black font-bold">
                About Author
              </InputLabel>
              <div className="bg-btn-purple h-[155px] mt-1 rounded-3xl hover:bg-gray-300 transition flex flex-row">
                <button className="bg-cold-low h-full w-1/4 rounded-tl-xl"></button>
                <button className="bg-cold-mid-low h-full w-1/4">Cold</button>
                <button className="bg-cold-mid h-full w-1/4"></button>
                <button className="bg-cold-high h-full w-1/4 rounded-tr-xl"></button>
              </div>

            </div>
            <div className="">
              <InputLabel className="text-black font-bold">
                About Author
              </InputLabel>
              <div className="bg-btn-purple h-[155px] mt-1 rounded-3xl hover:bg-gray-300 transition flex flex-row">
                <button className="bg-contrast-low h-full w-[12.5%] rounded-tl-xl"></button>
                <button className="bg-contrast-mid-low h-full w-[37.5%]">Contrast</button>
                <button className="bg-contrast-mid h-full w-[37.5%]"></button>
                <button className="bg-contrast-high h-full w-[12.5%] rounded-tr-xl"></button>
              </div>
            </div>
          </div>
          
        </div>
        <button
          className="btn self-center lg:w-1/4 md:w-1/2 bg-btn text-primary p-3 m-4 mt-16 rounded-lg"
          onClick={handleNextStep}
        >
          Generate
        </button>
      </div>
    </div>
  );
}

import { FormHelperText, InputLabel, TextField } from "@mui/material";
import React, { useContext, useState } from "react";
import { multiStepContext } from "../StepContext";
import ImageCard from "../components/ImageCard";

export default function FourthStep1() {
  const { setCurrentFourthSubStep, userData, setUserData } =
    useContext(multiStepContext);
  const [titlePageNumberError, setTitlePageNumberError] = useState(false);

  const handleNextStep = () => {
    let hasError = false;

    if (!userData["titlePageNumber"]) {
      setTitlePageNumberError(true);
      hasError = true;
    } else {
      setTitlePageNumberError(false);
      setCurrentFourthSubStep(2);
    }
  };

  return (
    <div className="flex flex-col mx-20 bg-white p-8 pl-12 rounded-lg ">
      <div className="grid lg:grid-cols-2 md:grid-cols-1 gap-8">
        <div>
          <div className="">
            <InputLabel className="text-black font-bold">
              Author Name
            </InputLabel>
            <TextField
              value={userData["authorName"]}
              onChange={(e) =>
                setUserData({ ...userData, authorName: e.target.value })
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
          </div>
          <div className="">
            <InputLabel className="text-black font-bold">
              Page Number
            </InputLabel>
            <TextField
              value={userData["titlePageNumber"]}
              onChange={(e) => {
                setUserData({ ...userData, titlePageNumber: e.target.value });
                setTitlePageNumberError(false);
              }}
              placeholder="Richard"
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
            {titlePageNumberError && (
              <FormHelperText error>Please enter Page number.</FormHelperText>
            )}
          </div>
          <div className="">
            <InputLabel className="text-black font-bold">
              Additional Info
            </InputLabel>
            <TextField
              value={userData["additionalInfo"]}
              multiline
              rows={5}
              onChange={(e) =>
                setUserData({ ...userData, additionalInfo: e.target.value })
              }
              placeholder="Hungarian"
              className="bg-primary rounded-3xl w-full mt-1"
              variant="filled"
              InputProps={{
                style: {
                  border: "none",
                  borderRadius: "15px",
                  // height: "2.5rem",
                  paddingBottom: "0.8rem",
                },
                disableUnderline: true,
              }}
            />
          </div>
        </div>
        <div className="flex justify-end w-full">
          <img
            src="/images/building.jpg"
            alt="image"
            className="w-[65%] mr-8 h-full object-cover rounded-tr-lg rounded-br-lg"
          />
        </div>
      </div>
      <button
        className="btn self-center lg:w-1/4 md:w-1/2 bg-btn text-primary p-3 m-4 mt-16 rounded-lg"
        onClick={handleNextStep}
      >
        Next Step
      </button>
    </div>
  );
}

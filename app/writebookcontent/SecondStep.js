import { FormHelperText, InputLabel, TextField } from "@mui/material";
import React, { useContext, useState } from "react";
import { multiStepContext } from "../StepContext";

export default function SecondStep() {
  const { setCurrentWritingStep, userData, setUserData } =
    useContext(multiStepContext);
  const [aboutDescriptionError, setAboutDescriptionError] = useState(false);

  const handleNextStep = () => {
    let hasError = false;

    if (!userData["aboutDescription"]) {
      setAboutDescriptionError(true);
      hasError = true;
    } else {
      setAboutDescriptionError(false);
      setCurrentWritingStep(3);
    }
  };
  return (
    <div>
      <div className="center">
        <div className="flex flex-col mx-20 bg-white p-8 pl-12 rounded-lg">
          <InputLabel className="my-3 text-black font-bold">
            What will your book be about?
          </InputLabel>
          <TextField
            value={userData["aboutDescription"]}
            onChange={(e) => {
              setUserData({ ...userData, aboutDescription: e.target.value });
              setAboutDescriptionError(false);
            }}
            multiline
            rows={10}
            placeholder="Description"
            className="bg-primary w-full"
            variant="filled"
            InputProps={{
              style: {
                border: "none",
                borderRadius: "15px",
              },
              disableUnderline: true,
            }}
          />
          {aboutDescriptionError && (
            <FormHelperText error>
              Please enter Book Description.
            </FormHelperText>
          )}
          <button
            className="btn self-center lg:w-1/4 md:w-1/2 bg-btn text-primary p-3 m-4 mt-16 rounded-lg"
            onClick={handleNextStep}
          >
            Next Step
          </button>
        </div>
      </div>
    </div>
  );
}

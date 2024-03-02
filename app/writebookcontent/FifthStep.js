import { InputLabel, TextField } from "@mui/material";
import React, { useContext, useState } from "react";
import { multiStepContext } from "../StepContext";
import axios from "axios";

export default function FifthStep() {
  const { setCurrentWritingStep, userData, setUserData } =
    useContext(multiStepContext);


  const handleBackGenerateImage = async () => {
    try {
      // Make a POST request to the backend API

      // console.log(userData["back-cover-prompt"]);

      // const prompt = JSON.stringify("prompt":selectedPrompt1)
      // console.log(prompt)
      const response = await axios.post(
        "http://localhost:3001/api/generate-image",
        { prompt: "Create an image for a book cover design for the following subject: " + userData["cover-prompt"] }
      );

      // Update state with the generated image URL

      console.log(response.data.data[0].url);
      setUserData({ ...userData, "back-cover-image": response.data.data[0].url });
      // console.log(userData["book-cover-image"]);
    } catch (error) {
      console.error("Error generating image:", error);
    }
  };

  const handleFrontGenerateImage = async () => {
    try {
      // Make a POST request to the backend API

      // console.log(userData["back-cover-prompt"]);

      // const prompt = JSON.stringify("prompt":selectedPrompt1)
      // console.log(prompt)
      const response = await axios.post(
        "http://localhost:3000/api/generate-image",
        { prompt: "Create an image for a book cover design for the following subject: " + userData["cover-prompt"] }
      );

      // Update state with the generated image URL
      console.log(response.data.data[0].url);
      setUserData({ ...userData, "front-cover-image": response.data.data[0].url });
      // console.log(userData["book-cover-image"]);
    } catch (error) {
      console.error("Error generating image:", error);
    }
  };

  return (
    <div>
      <div className="flex flex-col mx-20 bg-white p-8 pl-12 rounded-lg">
        <InputLabel className="my-3 text-black font-bold">
          Write Prompt for Generation Cover
        </InputLabel>
        <TextField
          value={userData["cover-prompt"]}
          onChange={(e) =>
            setUserData({ ...userData, "cover-prompt": e.target.value })
          }
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
        <div className="flex flex-row justify-center">
          <button
          type="submit"
            onClick={handleFrontGenerateImage}
           className="btn self-center row md:w-1/4 lg:w-1/12 bg-btn text-primary p-3 mt-6 rounded-lg">
            Front Cover
          </button>
          <button
            type="submit"
            onClick={handleBackGenerateImage}
            className="btn self-center md:w-1/4 lg:w-1/12 bg-btn text-primary p-3 mt-6 ml-4 rounded-lg"
          >
            Back Cover
          </button>
        </div>
        <button
          className="btn self-center lg:w-1/4 md:1/2 bg-btn text-primary p-3 m-4 rounded-lg"
          onClick={() => setCurrentWritingStep(6)}
        >
          Next Step
        </button>
      </div>
    </div>
  );
}

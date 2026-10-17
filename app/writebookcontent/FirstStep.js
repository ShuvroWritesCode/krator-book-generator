import { FormHelperText, InputLabel, TextField } from "@mui/material";
import React, { useContext, useState } from "react";
import { multiStepContext } from "../StepContext";

export default function FirstStep() {
  const [selectedFile1, setSelectedFile1] = useState(null);
  const [selectedFile2, setSelectedFile2] = useState(null);
  const [selectedFile3, setSelectedFile3] = useState(null);
  const [bookTitleError, setBookTitleError] = useState(false);
  const [authorNameError, setAuthorNameError] = useState(false);
  const [aboutAuthorError, setAboutAuthorError] = useState(false);
  const [file1Error, setFile1Error] = useState(false);
  const [chaptersError, setChaptersError] = useState(false);
  const [pagesError, setPagesError] = useState(false);
  const [file2Error, setFile2Error] = useState(false);
  const [file3Error, setFile3Error] = useState(false);

  const handleFileChange = (event, fileNumber) => {
    const file = event.target.files[0];
    switch (fileNumber) {
      case 1:
        setSelectedFile1(file);
        setFile1Error(false);
        break;
      case 2:
        setSelectedFile2(file);
        setFile2Error(false);
        break;
      case 3:
        setSelectedFile3(file);
        setFile3Error(false);
        break;
      default:
        break;
    }
  };

  const { setCurrentWritingStep, userData, setUserData } =
    useContext(multiStepContext);

  const handleNextStep = () => {
    let hasError = false;

    if (!userData["bookTitle"]) {
      setBookTitleError(true);
      hasError = true;
    }
    if (!userData["authorName"]) {
      setAuthorNameError(true);
      hasError = true;
    }
    if (!userData["aboutAuthor"]) {
      setAboutAuthorError(true);
      hasError = true;
    }
    if (!selectedFile1) {
      setFile1Error(true);
      hasError = true;
    }
    if (!userData["chapterNumbers"]) {
      setChaptersError(true);
      hasError = true;
    }
    if (!userData["pageNumbers"]) {
      setPagesError(true);
      hasError = true;
    }
    if (!selectedFile2) {
      setFile2Error(true);
      hasError = true;
    }
    if (!selectedFile3) {
      setFile3Error(true);
      hasError = true;
    }

    if (!hasError) {
      // Clear all errors and proceed to next step
      setBookTitleError(false);
      setAuthorNameError(false);
      setAboutAuthorError(false);
      setFile1Error(false);
      setChaptersError(false);
      setPagesError(false);
      setFile2Error(false);
      setFile3Error(false);
      // Proceed to next step
      setCurrentWritingStep(2);
    }
  };

  return (
    <div>
      <div className="flex flex-col mx-20 bg-white p-8 pl-12 rounded-lg ">
        <div className="grid lg:grid-cols-2 md:grid-cols-1 gap-8">
          <div className="">
            <InputLabel className="text-black font-bold">Book Title</InputLabel>
            <TextField
              value={userData["bookTitle"]}
              onChange={(e) => {
                setUserData({ ...userData, bookTitle: e.target.value });
                setBookTitleError(false);
              }}
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
            {bookTitleError && (
              <FormHelperText error>Please enter a book title.</FormHelperText>
            )}
          </div>
          <div className="">
            <InputLabel className="text-black font-bold">
              Author Name
            </InputLabel>
            <TextField
              value={userData["authorName"]}
              onChange={(e) => {
                setUserData({ ...userData, authorName: e.target.value });
                setAuthorNameError(false);
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
            {authorNameError && (
              <FormHelperText error>
                Please enter an author name.
              </FormHelperText>
            )}
          </div>
          <div className="">
            <InputLabel className="text-black font-bold">
              About Author
            </InputLabel>
            <TextField
              value={userData["aboutAuthor"]}
              multiline
              rows={5}
              onChange={(e) => {
                setUserData({ ...userData, aboutAuthor: e.target.value });
                setAboutAuthorError(false);
              }}
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
            {aboutAuthorError && (
              <FormHelperText error>
                Please provide information about the author.
              </FormHelperText>
            )}
          </div>
          <div className="col-span-1">
            <InputLabel className="text-black font-bold">
              About Author
            </InputLabel>
            <label htmlFor="uploadInput1" className="cursor-pointer">
              <div className="bg-btn-purple h-[155px] mt-1 rounded-3xl hover:bg-gray-300 transition w-full flex flex-col items-center justify-center">
                {selectedFile1 ? (
                  <img
                    src={URL.createObjectURL(selectedFile1)}
                    alt="Selected Image"
                    className="w-full h-full object-contain rounded-lg"
                  />
                ) : (
                  <span className="text-logo ">Click to upload a photo</span>
                )}
              </div>
            </label>

            <input
              id="uploadInput1"
              type="file"
              accept="image/*"
              className="hidden"
              onChange={(e) => handleFileChange(e, 1)}
            />
            {file1Error && (
              <FormHelperText error>Please upload a photo.</FormHelperText>
            )}
          </div>
          <div className="">
            <InputLabel className="text-black font-bold">
              Number of Chapters
            </InputLabel>
            <TextField
              value={userData["chapterNumbers"]}
              onChange={(e) => {
                setUserData({ ...userData, chapterNumbers: e.target.value });
                setChaptersError(false);
              }}
              placeholder="01"
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
            {chaptersError && (
              <FormHelperText error>
                Please provide number of chapters.
              </FormHelperText>
            )}
          </div>
          <div className="">
            <InputLabel className="text-black font-bold">
              Number of Pages
            </InputLabel>
            <TextField
              value={userData["pageNumbers"]}
              onChange={(e) => {
                setUserData({ ...userData, pageNumbers: e.target.value });
                setPagesError(false);
              }}
              placeholder="01"
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
            {pagesError && (
              <FormHelperText error>
                Please provide number of pages.
              </FormHelperText>
            )}
          </div>
          <div className="col-span-1">
            <InputLabel className="text-black font-bold">
              Upload Bar Code
            </InputLabel>
            <label htmlFor="uploadInput2" className="cursor-pointer">
              <div className="bg-btn-purple h-[155px] mt-1 rounded-3xl hover:bg-gray-300 transition w-full flex flex-col items-center justify-center">
                {selectedFile2 ? (
                  <img
                    src={URL.createObjectURL(selectedFile2)}
                    alt="Selected Bar Code"
                    className="w-full h-full object-contain rounded-lg"
                  />
                ) : (
                  <span className="text-logo ">Upload a Bar Code</span>
                )}
              </div>
            </label>

            <input
              id="uploadInput2"
              type="file"
              accept="image/*"
              className="hidden"
              onChange={(e) => handleFileChange(e, 2)}
            />
            {file2Error && (
              <FormHelperText error>Please upload a bar code.</FormHelperText>
            )}
          </div>
          <div className="col-span-1">
            <InputLabel className="text-black font-bold">
              Upload Logo
            </InputLabel>
            <label htmlFor="uploadInput3" className="cursor-pointer">
              <div className="bg-btn-purple h-[155px] mt-1 rounded-3xl hover:bg-gray-300 transition w-full flex flex-col items-center justify-center">
                {selectedFile3 ? (
                  <img
                    src={URL.createObjectURL(selectedFile3)}
                    alt="Selected Logo"
                    className="w-full h-full object-contain rounded-lg"
                  />
                ) : (
                  <span className="text-logo ">Upload a Bar Code</span>
                )}
              </div>
            </label>

            <input
              id="uploadInput3"
              type="file"
              accept="image/*"
              className="hidden"
              onChange={(e) => handleFileChange(e, 3)}
            />
            {file3Error && (
              <FormHelperText error>Please upload a photo.</FormHelperText>
            )}
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

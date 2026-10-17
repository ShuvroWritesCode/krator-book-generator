import { InputLabel } from "@mui/material";
import React, { useContext, useState } from "react";
import { multiStepContext } from "../StepContext";
import ImageCard from "../components/ImageCard";

export default function SecondPage() {
  const { setCurrentIllustrationStep,submitData, userData, setUserData } =
    useContext(multiStepContext);

    const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    { id: 1, src: userData["illustration1Url"], alt: "Image 1" },
    { id: 2, src: userData["illustration2Url"], alt: "Image 2" },
    { id: 3, src: userData["illustration3Url"], alt: "Image 3" },
    { id: 4, src: userData["illustration4Url"], alt: "Image 4" },
  ];

  const handleImageClick = (id) => {
    setSelectedImage(id);
  };


  return (
    <div>
      <div className="flex flex-col items-start mx-16 bg-white h-full p-8">
      <div>
        <InputLabel className="text-black font-bold ml-2">
          Illustration Preview
        </InputLabel>
        </div>
        <div className="flex flex-wrap">
          {images.map((image) => (
            <ImageCard
              key={image.id}
              src={image.src}
              alt={image.alt}
              onClick={() => handleImageClick(image.id)}
              selected={selectedImage === image.id}
              border="rounded-xl"
            />
          ))}
        </div>
        <div className="self-center flex flex-row justify-center w-full">
          <button className="btn self-center row lg:w-1/6 md:w-1/2 bg-btn text-primary p-3 mt-6 rounded-lg"
          onClick={()=>submitData}>
            Save
          </button>
          <button className="btn self-center lg:w-1/6 md:w-1/2 bg-btn text-primary p-3 ml-4 mt-6 rounded-lg"
          onClick={() => setCurrentIllustrationStep(3)}
          >
            Buy
          </button>
        </div>
      </div>
    </div>
  );
}

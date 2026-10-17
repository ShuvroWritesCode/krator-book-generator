import React, { useContext, useEffect, useState } from "react";
import { multiStepContext } from "../StepContext";
import ImageCard from "../components/ImageCard";
import Preloader from "../components/Preloader"; // Import the preloader component

export default function SixthStep() {
    const { setCurrentWritingStep, userData } = useContext(multiStepContext);
    const [imageUrl, setImageUrl] = useState('');
    const [imageLoaded, setImageLoaded] = useState(false); // State to track whether the image is loaded

    useEffect(() => {
        setImageUrl(userData['back-cover-image']);
    }, [userData]);

    // Function to handle image load event
    const handleImageLoad = () => {
        setImageLoaded(true); // Set imageLoaded state to true when the image is loaded
    };

    return (
        <div className="flex flex-col items-center mx-16 bg-white h-full pt-24 rounded-lg">
            {!imageLoaded && !imageUrl && <Preloader />} {/* Display preloader if image is not loaded and imageUrl is not available */}
            {imageUrl && <ImageCard src={imageUrl} alt="Image" onLoad={handleImageLoad} />} {/* Render ImageCard when imageUrl is available */}
            <button
                className="btn self-center lg:w-1/4 md:w-1/2 bg-btn text-primary p-3 m-4 rounded-lg"
                onClick={() => setCurrentWritingStep(7)}
                // disabled={!imageLoaded} // Disable button until the image is loaded
            >
                Next Step
            </button>
        </div>
    );
}

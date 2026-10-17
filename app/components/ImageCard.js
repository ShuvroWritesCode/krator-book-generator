
import React from 'react';

const ImageCard = ({ src, alt,onClick, selected, border='rounded-tr-lg rounded-br-lg'}) => {
  return (
    <div className="flex-none w-full md:w-1/2 lg:w-1/4 p-2" onClick={onClick}>
    <div className={`relative w-full h-96 ${selected ? 'border-4 border-blue-500' : ''}`}>
        <img
          src={src}
          alt={alt}
          className={`w-full h-full object-cover ${border} ${selected ? 'rounded-xl' : ''}`}
        />
      </div>
    </div>
  );
};

export default ImageCard;

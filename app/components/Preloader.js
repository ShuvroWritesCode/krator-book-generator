import React from "react";

const Preloader = () => {
  return (
    <div className="preloader">
      <figure>
        <object
          type="image/svg+xml"
          data="https://cdn.svgator.com/images/2023/06/generative-ai-preloader.svg"
          alt="Generative AI preloader example"
          img=""
          width="100%"
        >
          <img
            src="https://cdn.svgator.com/images/2023/06/generative-ai-preloader.svg"
            alt="Generative AI preloader example"
            className="lightense-target"
          />
        </object>
      </figure>
    </div>
  );
};

export default Preloader;

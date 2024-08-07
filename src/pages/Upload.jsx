import React, { useContext, useState } from "react";
import ImageContext from "../Provider/ImageProvider";
import BeforeAfter from "../components/BeforeAfter";

const Upload = () => {
  const { imageurl, prevImg, scale } = useContext(ImageContext);
  const [isHold, setIsHold] = useState(false);
  return (
    <section className="m-auto w-fit text-center">
      <div className="before_after max-w-[30rem] h-64 border-2 rounded-md mt-10 mx-2 overflow-hidden relative">
        <img
          style={{ transform: `scale(${scale})` }}
          className="w-full h-full object-contain object-center transition opacity-100 duration-300 ease-in"
          src={imageurl}
          alt="demoimg2"
        />
        <img
          style={{ transform: `scale(${scale})`, opacity: !isHold ? 0 : 1 }}
          className="prev_Img w-full h-full object-contain object-center absolute top-0 bottom-0 transition duration-300 ease-in "
          src={prevImg}
          alt="demoimg2"
        />
      </div>

      <BeforeAfter setIsHold={setIsHold} isHold={isHold} />

      <div>
        <a
          href={imageurl}
          download={"cleancut_removebg.png"}
          className="bg-blue-500 hover:bg-blue-600 px-5 py-3 text-white text-lg rounded-full block mt-4 mx-2"
        >
          Dowanlod
        </a>
      </div>
    </section>
  );
};

export default Upload;

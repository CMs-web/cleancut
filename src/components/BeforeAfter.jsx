import { useContext } from "react";
import ImageContext from "../Provider/ImageProvider";

function BeforeAfter({ setIsHold, isHold }) {
  const { setScale, scale } = useContext(ImageContext);
  const scaleDown = () => {
    if (scale > 1) {
      setScale((prev) => prev - 0.2);
    }
  };

  let holdTimeout;

  const handleMouseDown = () => {
    holdTimeout = setTimeout(() => {
      setIsHold(true);
    }, 500);
  };

  const handleMouseUp = () => {
    clearTimeout(holdTimeout);
    if (isHold) {
      // console.log("Button was held down!");
      setIsHold(true)
      console.log(isHold);
    } else {
      // console.log("Button was clicked but not held down.");
      setIsHold(false)
      console.log(isHold)
    }
    setIsHold(false);
  };

  return (
    <div className="flex justify-between items-center mt-2">
      <button
        className={`${scale <= 1 && "cursor-not-allowed"}`}
        onClick={scaleDown}
      >
        <span className="text-3xl font-medium hover:text-yellow-700">
          -
        </span>
      </button>
      |
      <span
        className="text-3xl font-medium hover:text-yellow-700 cursor-pointer"
        onClick={() => setScale((prev) => prev + 0.2)}
      >
        +
      </span>
      |
      <svg
        data-v-de2d7b1b=""
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="text-typo  hover:text-yellow-900 cursor-pointer relative"
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
      >
        <path
          d="M12 3.75C12 3.33579 11.6642 3 11.25 3C10.8358 3 10.5 3.33579 10.5 3.75V6H5C3.89543 6 3 6.89543 3 8V16C3 17.1046 3.89543 18 5 18H10.5V20.25C10.5 20.6642 10.8358 21 11.25 21C11.6642 21 12 20.6642 12 20.25L12 3.75Z"
          fill="currentColor"
        ></path>
        <path
          d="M14 18H19C20.1046 18 21 17.1046 21 16V8C21 6.89543 20.1046 6 19 6H14V7.5H19C19.2761 7.5 19.5 7.72386 19.5 8V16C19.5 16.2761 19.2761 16.5 19 16.5H14V18Z"
          fill="currentColor"
        ></path>
      </svg>
    </div>
  );
}

export default BeforeAfter;

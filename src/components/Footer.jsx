import { useContext } from "react";
import ImageContext from "../Provider/ImageProvider";
import DemoImg from "./DemoImg";

function Footer() {
  const { imageurl, setPrevImg, setImage } = useContext(ImageContext);
  const handleImageSelect = (file) => {
    const blobUrl = URL.createObjectURL(file);
    setPrevImg(blobUrl);
    setImage(file)
  };
  return (
    <footer className="text-center">
      {!imageurl && <DemoImg onSelect={handleImageSelect} />}
      <h1 className="mt-5 text-sm leading-4 opacity-70 mb-3">
        By uploding image you agree to our Terms of Services. <br /> To learn
        more about how cleancut handles your personal data, check our Privacy
        Policy.
      </h1>
    </footer>
  );
}

export default Footer;

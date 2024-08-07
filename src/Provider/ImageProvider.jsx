import { createContext, useState } from "react";
const apiKey = import.meta.env.VITE_API_KEY;

const ImageContext = createContext()

export const ImageProvider = ({ children }) => {
     const [image, setImage] = useState(null); 
    const [imageurl, setImageUrl] = useState("");
    const [isLoading, setIsLoading] = useState(false)
    const [prevImg, setPrevImg] = useState(null)
    const [scale, setScale] = useState(1)

    
    async function getImg(image) {
         setIsLoading(true)
       const formData = new FormData();
       formData.append("image_file", image);
       formData.append("size", "auto");

       const res = await fetch("https://api.remove.bg/v1.0/removebg", {
         method: "POST",
         headers: {
           "X-Api-Key": apiKey,
         },
         body: formData,
       });

       const data = await res.blob();
        const url = URL.createObjectURL(data);
        setIsLoading(false)
       setImageUrl(url);
    }
    
    
    return (
      <ImageContext.Provider
        value={{
          image,
          setImage,
          imageurl,
          setImageUrl,
          getImg,
          isLoading,
          prevImg,
          setPrevImg,
          scale,
          setScale,
        }}
      >
        {children}
      </ImageContext.Provider>
    );
}

export default ImageContext
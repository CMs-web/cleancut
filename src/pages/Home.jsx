import React, { useContext, useEffect } from "react";
import ImageContext from "../Provider/ImageProvider";
import Dropzone from "react-dropzone";
import DragOverley from "../components/DragOverley";

const Home = () => {
  const { image, setImage, imageurl, getImg, isLoading, setPrevImg } =
    useContext(ImageContext);
  useEffect(() => {
    if (image) {
      getImg(image);
    }
  }, [image]);

  const handleImages = (e) => {
    setImage(e.target.files[0]);
    const blobUrl = URL.createObjectURL(e.target.files[0]);
    setPrevImg(blobUrl);
  };

  return (
    <Dropzone onDrop={(acceptedFiles) => {
      const blobUrl = URL.createObjectURL(acceptedFiles[0]);
      setPrevImg(blobUrl);
      setImage(acceptedFiles[0])
    }}>
      {({ getRootProps, getInputProps, isDragActive }) => (
        <div className="text-center" {... getRootProps() } >
          <main className="py-16 text-center ">
            {isDragActive && <DragOverley />}
            <h1 className="text-3xl font-semibold text-gray-700 leading-normal">
              Upload an image to <br /> remove the background instantly.
            </h1>

            <form className="text-center mt-10 w-48 m-auto">
              <label
                htmlfor="file-upload"
                className="text-xl bg-blue-500 text-white p-4 rounded-full cursor-pointer font-semibold relative "
              >
                <input
                  id="file-upload"
                  type="file"
                  className="hidden"
                  accept="image/*"
                  onChange={(e) => handleImages(e)}
                  {...getInputProps()}
                />
                Upload Image
                {isLoading && (
                  <span className="loader absolute left-1/3 top-1"></span>
                )}
              </label>
            </form>
            <h1 className="text-2xl mt-8 font-normal text-gray-600">
              or drop a file
            </h1>
          </main>

          {imageurl && (
            <img
              src={imageurl}
              alt="Processed Image"
              className="mt-8 mx-auto"
            />
          )}
        </div>
      )}
    </Dropzone>
  );
};

export default Home;

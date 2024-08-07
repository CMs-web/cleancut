function DemoImg({onSelect}) {

        const handleImageClick = (url) => {
            fetch(url)
                .then((res) => res.blob())
                .then((blob) => {
                    const file = new File([blob], "demo_img.jpg", { type: blob.type });
                    onSelect(file);
                });
        };

        return (
          <div>
            <h1 className="text-lg text-gray-500 font-semibold">
              No image try on of these::
            </h1>
            <div className="demo_image flex justify-center items-center gap-2 mt-2 cursor-pointer">
              <img
                src="https://plus.unsplash.com/premium_photo-1664536392896-cd1743f9c02c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGVyc29ufGVufDB8fDB8fHww"
                alt="demoimg"
                onClick={() =>
                  handleImageClick(
                    "https://plus.unsplash.com/premium_photo-1664536392896-cd1743f9c02c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGVyc29ufGVufDB8fDB8fHww"
                  )
                }
              />
              <img
                src="https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="demoimg2"
                onClick={() =>
                  handleImageClick(
                    "https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  )
                }
              />
              <img
                src="https://plus.unsplash.com/premium_photo-1666229410352-c4686b71cea2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZG9nc3xlbnwwfHwwfHx8MA%3D%3D"
                alt="demoimg3"
                onClick={() =>
                  handleImageClick(
                    "https://plus.unsplash.com/premium_photo-1666229410352-c4686b71cea2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZG9nc3xlbnwwfHwwfHx8MA%3D%3D"
                  )
                }
              />
              <img
                src="https://plus.unsplash.com/premium_photo-1664303847960-586318f59035?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y2Fyc3xlbnwwfHwwfHx8MA%3D%3D"
                alt="demoImg4"
                onClick={() =>
                  handleImageClick(
                    "https://plus.unsplash.com/premium_photo-1664303847960-586318f59035?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y2Fyc3xlbnwwfHwwfHx8MA%3D%3D"
                  )
                }
              />
            </div>
          </div>
        );
    }


export default DemoImg

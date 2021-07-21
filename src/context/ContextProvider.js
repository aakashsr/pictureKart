import React, { useState,useEffect } from "react";
const ImageContext = React.createContext();

function ContextProvider(props) {
  const [photos, setPhotos] = useState([]);

  useEffect(() =>{
    fetch(
        "https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json"
      )
        .then((res) => res.json())
        .then((value) => setPhotos(value));
  },[])
  

    // console.log(photos);
  return (
    <div>
      <ImageContext.Provider value={photos}>
        {props.children}
      </ImageContext.Provider>
    </div>
  );
}

export { ContextProvider, ImageContext };

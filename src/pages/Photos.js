import React, { useContext } from "react";
import { ContextProvider, ImageContext } from "../context/ContextProvider";
import Image from "../components/Image";
import { getClass } from "../utils/index";

function Photos() {
  const photos = useContext(ImageContext);
  return (
    <main className="photos">
        {photos.map((photo, i) => (
          <Image img={photo} className={getClass(i)} />
        ))}
    </main>
  );
}

export default Photos;

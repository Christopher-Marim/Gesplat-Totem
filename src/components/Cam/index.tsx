import React, { useRef, useCallback } from "react";

import Webcam from "react-webcam";

const videoConstraints = {
  width: 1280,
  height: 720,
  facingMode: "user",
};



export const WebcamComponent= () => {
  const webcamRef = useRef(null);

  /* const capture = React.useCallback(() => {
    //@ts-ignore
    const imageSrc = webcamRef.current.getScreenshot();
    var link = document.createElement("a");
    link.href = imageSrc;
    link.download = "Download.jpg";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    alert(imageSrc);
  }, [webcamRef]); */
  return (
    <>
      <Webcam
        audio={false}
        ref={webcamRef}
        width={'100%'}
        height={'100%'}
        screenshotFormat="image/jpeg"
        videoConstraints={videoConstraints}
        style={{borderRadius:20}}
      />
     {/*  <button onClick={capture}>Capture photo</button> */}
    </>
  );
};

// Import dependencies
import React, { useRef, useState, useEffect } from "react";
import * as tf from "@tensorflow/tfjs";
// 1. TODO - Import required model here
// e.g. import * as tfmodel from "@tensorflow-models/tfmodel";
// import * as cocossd from '@tensorflow-models/coco-ssd'
import Webcam from "react-webcam";
import "./App.css";
// 2. TODO - Import drawing utility here
import {drawRect, drawText} from "./utilities";
import modal from '../src/model.json'
function App() {
  const webcamRef = useRef(null);
  const imageRef = useRef(null);
  const canvasRef = useRef(null);
  const canvasNumberOfPersons = useRef(null);
  // Main function
  const runCoco = async () => {
    // 3. TODO - Load network
    // const net = await cocossd.load();
    //  const net = await tf.loadLayersModel(modal);
     const net = await tf.loadGraphModel('https://raw.githubusercontent.com/tdphu96/ComputerVisionTemplate/master/src/model.json');
    //  Loop and detect hands
    //   setInterval(() => {
    //       // detect(net);
    //       detectMT(net);
    //   }, 1000)
      // setInterval(() => {
      //   detectImage(net);
      // }, 1000)
  };


  // const detect = async (net) => {
  //  try {
  //      if (
  //          typeof webcamRef.current !== "undefined" &&
  //          webcamRef.current !== null
  //      ) {
  //          const videoWidth = webcamRef.current.videoWidth;
  //          const videoHeight = webcamRef.current.videoHeight;
  //
  //          webcamRef.current.width = videoWidth;
  //          webcamRef.current.height = videoHeight;
  //
  //          // Set canvas height and width
  //          canvasRef.current.width = videoWidth;
  //          canvasRef.current.height = videoHeight;
  //          canvasNumberOfPersons.current.width = videoWidth;
  //          canvasNumberOfPersons.current.height = videoHeight;
  //
  //
  //          // 4. TODO - Make Detections
  //          const obj = await net.detect(webcamRef?.current);
  //
  //          console.log(obj)
  //          if(obj) webcamRef.current.play()
  //          // Draw mesh
  //          const ctx = canvasRef?.current.getContext("2d");
  //
  //          const txtNumber = canvasNumberOfPersons?.current.getContext("2d");
  //          // 5. TODO - Update drawing utility
  //          drawRect(obj, ctx)
  //
  //          drawText(obj, txtNumber)
  //      }
  //  }catch (e) {
  //      console.log(e)
  //  }
  // };

  const detectMT = async () => {
      // const saveResults = await model.save(modal);
      // const example = tf.FromPixels(webcamRef?.current);  // for example
      // const prediction = model.predict(example);
      // console.log('prediction', prediction)
  }

  // const detectImage = async (net) => {
  //   // Check data is available
  //  try {
  //      if (
  //          typeof imageRef.current !== "undefined" &&
  //          imageRef.current !== null
  //      ) {
  //          const imgWidth = imageRef.current.clientWidth;
  //          const imgHeight = imageRef.current.clientHeight;
  //
  //          console.log("imgWidth\n" + "imgHeight", imgWidth, imgHeight)
  //          // // Set img width
  //          imageRef.current.width = imgWidth;
  //          imageRef.current.height = imgHeight;
  //
  //          console.log(imageRef?.current)
  //
  //          // Set canvas height and width
  //          canvasRef.current.width = imgWidth;
  //          canvasRef.current.height = imgHeight;
  //
  //
  //          // 4. TODO - Make Detections
  //          const obj = await net.detect(imageRef?.current);
  //
  //          console.log(obj)
  //          const ctx = canvasRef?.current.getContext("2d");
  //          //
  //          console.log(canvasRef?.current)
  //          // // 5. TODO - Update drawing utility
  //          drawRect(obj, ctx)
  //      }
  //  }catch (e) {
  //      console.log(e)
  //  }
  // };

  useEffect(()=>{runCoco()},[]);


  return (
    <div className="App">
      <header className="App-header">
          {/*<video*/}
          {/*    crossOrigin="anonymous"*/}
          {/*    ref={webcamRef}*/}
          {/*    // className={styles.video}*/}
          {/*    preload={'auto'}*/}
          {/*    // controls={true}*/}
          {/*    autoPlay*/}
          {/*    src={'http://192.168.1.18:3001/play_video/camera98/MAC000E53343CF9_20221224142211'}*/}
          {/*    // src={'https://scontent.cdninstagram.com/v/t39.25447-2/10000000_862875388297961_5035094090997620976_n.mp4?_nc_cat=105&vs=cb6918bb2112b83d&_nc_vs=HBksFQAYJEdJQ1dtQURwUWdIVnh4QURBUERnbEJCbVBfQkZibWRqQUFBRhUAAsgBABUAGCRHSUNXbUFCRDBfY0trdG9CQUpDVXJOWVlzYmtuYnJGcUFBQUYVAgLIAQBLB4gScHJvZ3Jlc3NpdmVfcmVjaXBlATENc3Vic2FtcGxlX2ZwcwAQdm1hZl9lbmFibGVfbnN1YgAgbWVhc3VyZV9vcmlnaW5hbF9yZXNvbHV0aW9uX3NzaW0AKGNvbXB1dGVfc3NpbV9vbmx5X2F0X29yaWdpbmFsX3Jlc29sdXRpb24AHXVzZV9sYW5jem9zX2Zvcl92cW1fdXBzY2FsaW5nABFkaXNhYmxlX3Bvc3RfcHZxcwAVACUAHAAAJsahj5vanNsBFQIoAkMzGAt2dHNfcHJldmlldxwXQLNQ1T987ZEYKWRhc2hfaTRsaXRlYmFzaWNfNXNlY2dvcF9ocTJfZnJhZ18yX3ZpZGVvEgAYGHZpZGVvcy52dHMuY2FsbGJhY2sucHJvZDgSVklERU9fVklFV19SRVFVRVNUGwqIFW9lbV90YXJnZXRfZW5jb2RlX3RhZwZvZXBfaGQTb2VtX3JlcXVlc3RfdGltZV9tcwEwDG9lbV9jZmdfcnVsZQd1bm11dGVkE29lbV9yb2lfcmVhY2hfY291bnQBMBFvZW1faXNfZXhwZXJpbWVudAAMb2VtX3ZpZGVvX2lkDzcwOTA1MDcyMDg3NDIzMxJvZW1fdmlkZW9fYXNzZXRfaWQPNDExMzUxOTg0NTA4OTIyFW9lbV92aWRlb19yZXNvdXJjZV9pZA80ODIwNzkyMzczMzUxMzkcb2VtX3NvdXJjZV92aWRlb19lbmNvZGluZ19pZBA1OTIzMDY1NTk3NzQzOTAyDnZ0c19yZXF1ZXN0X2lkACUCHAAlxAEbB4gBcwQ5OTY5AmNkCjIwMjMtMDEtMDkDcmNiATADYXBwBVZpZGVvAmN0GUNPTlRBSU5FRF9QT1NUX0FUVEFDSE1FTlQTb3JpZ2luYWxfZHVyYXRpb25fcwg0OTQ0LjgzNAJ0cxVwcm9ncmVzc2l2ZV9lbmNvZGluZ3MA&ccb=1-7&_nc_sid=41a7d5&efg=eyJ2ZW5jb2RlX3RhZyI6Im9lcF9oZCJ9&_nc_ohc=_DT2VPYssuwAX_V_0RC&_nc_ht=scontent-sin6-2.xx&edm=APRAPSkEAAAA&oh=00_AfBb8WmoQ9NI4rDKyk0p4uQ6QolTAwLW1c0maZQb4joh2A&oe=63C298E7&_nc_rid=867114490712404'}*/}
          {/*    // src={'http://192.168.1.18:3001/play_video/camera98/MAC000E53343CF9_20221224141532'}*/}
          {/*    // src={'http://115.78.5.184:8890/cgi-bin/guest/Video.cgi?media=jpeg&profile=1'}*/}
          {/*    // src={'http://192.168.1.18:3001/play_video/camera98/MAC000E53343CF9_20221217141202'}*/}
          {/*      style={{*/}
          {/*        position: "absolute",*/}
          {/*        marginLeft: "auto",*/}
          {/*        marginRight: "auto",*/}
          {/*        left: 0,*/}
          {/*        right: 0,*/}
          {/*        textAlign: "center",*/}
          {/*        zindex: 9,*/}
          {/*        width: '100%',*/}
          {/*        height: '100%',*/}
          {/*      }}*/}
          {/*/>*/}

          {/*<img*/}
          {/*    crossOrigin="anonymous"*/}
          {/*    ref={imageRef}*/}
          {/*    src="https://camerabox.vn/uploads/news/2019_12/chup-anh-nhom-tuyet-dep.jpg"*/}
          {/*    // src="http://admin:admin@115.78.5.184:8890/cgi-bin/guest/Video.cgi?media=jpeg&profile=1"*/}
          {/*    alt="1231"*/}
          {/*     style={{*/}
          {/*         position: "absolute",*/}
          {/*         marginLeft: "auto",*/}
          {/*         marginRight: "auto",*/}
          {/*         left: 0,*/}
          {/*         right: 0,*/}
          {/*         textAlign: "center",*/}
          {/*         zindex: 5,*/}
          {/*         width: '100%',*/}
          {/*         height: '100%',*/}
          {/*     }}*/}

          {/*/>*/}
        <Webcam
          ref={webcamRef}
          muted={true}
          style={{
            position: "absolute",
            marginLeft: "auto",
            marginRight: "auto",
            left: 0,
            right: 0,
            textAlign: "center",
            zindex: 9,
            width: 640,
            height: 480,
          }}
        />

        {/*<canvas*/}
        {/*    onClick={() => webcamRef.current.play()}*/}
        {/*  ref={canvasRef}*/}
        {/*  style={{*/}
        {/*    position: "absolute",*/}
        {/*    marginLeft: "auto",*/}
        {/*    marginRight: "auto",*/}
        {/*    // background: '#f11f1130',*/}
        {/*    left: 0,*/}
        {/*    right: 0,*/}
        {/*    textAlign: "center",*/}
        {/*    zindex: 8,*/}
        {/*  width: '100%',*/}
        {/*  height: '100%',*/}
        {/*  }}*/}
        {/*/>*/}
            {/*<canvas*/}
            {/*  ref={canvasNumberOfPersons}*/}
            {/*  style={{*/}
            {/*    position: "absolute",*/}
            {/*    marginLeft: "auto",*/}
            {/*    marginRight: "auto",*/}
            {/*    // background: '#f11f1130',*/}
            {/*    left: 0,*/}
            {/*    right: 0,*/}
            {/*    textAlign: "center",*/}
            {/*    zindex: 9,*/}
            {/*  width: '100%',*/}
            {/*  height: '100%',*/}
            {/*  }}*/}
            {/*/>*/}
      </header>
    </div>
  );
}

export default App;

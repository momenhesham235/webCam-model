"use strict";

const webCamElement = document.getElementById("webcam");
const canvasElement = document.getElementById("canvas");

const constraints = {
  navigator: {
    getUserMedia: {
      video: true,
      facingMode: "environment",
    },
  },
};

const webcam = new Webcam(webCamElement, constraints, canvasElement);

webcam.onSuccess = () => {
  console.log("webcam on success");
};

function cameraFlip() {
  console.log("flip");
  webcam.flip();
}

webcam.start();

function takePicture() {
  let picture = webcam.snap();
  document.querySelector("a").href = picture;
}

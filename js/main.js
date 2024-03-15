"use strict";

const webCamElement = document.getElementById("webcam");
const canvasElement = document.getElementById("canvas");

const constraints = {
  audio: false,
  video: true,
  image: {
    width: {
      min: 320,
      ideal: 640,
      max: 640,
    },
    height: {
      min: 240,
      ideal: 480,
      max: 480,
    },
    aspectRatio: {
      ideal: 1.7777777777777777,
    },
    frameRate: {
      min: 15,
      ideal: 30,
      max: 30,
    },
    imageQuality: {
      min: 0,
      ideal: 1,
      max: 1,
    },
    noiseReduction: {
      min: 0,
      ideal: 1,
      max: 1,
    },
    resizeQuality: {
      min: 0,
      ideal: 1,
      max: 1,
    },
    imageSmoothing: {
      min: 0,
      ideal: 1,
      max: 1,
    },
  },
  facingMode: "environment",
};

const webcam = new Webcam(webCamElement, constraints, canvasElement);

function cameraFlip() {
  console.log("flip");
  webcam.flip();
  webcam.start();
}

webcam.start();
function takePicture() {
  let picture = webcam.snap();

  document.querySelector("a").href = picture;
}

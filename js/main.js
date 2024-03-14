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

webcam.start();

function takePicture() {
  let picture = webcam.snap();
  document.querySelector("a").href = picture;
}

"use strict";

const webCamElement = document.getElementById("webcam");
const canvasElement = document.getElementById("canvas");

const constraints = {
  video: true,
  facingMode: "externally",
};

const webcam = new Webcam(webCamElement, constraints, canvasElement);

webcam.start();

function takePicture() {
  let picture = webcam.snap();
  document.querySelector("a").href = picture;
}

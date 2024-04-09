"use client";
import React, { useRef, useState } from "react";
import classes from "./image-picker.module.css";
import Image from "next/image";
const ImagePicker = ({ name, label }) => {
  const [pickedImage, setPickedImage] = useState("");
  const imageInputRef = useRef();
  function handlePickImage() {
    imageInputRef.current.click();
    if (!pickedImage) {
      setPickedImage(
        "https://cdn.pixabay.com/photo/2024/02/15/09/30/schnitzel-8575034_1280.png"
      );
    }
  }
  return (
    <div className={classes.picker}>
      <label htmlFor={name}>{label}</label>
      <div className={classes.controls}>
        <div className={classes.preview}>
          {!pickedImage && <p>No image pciked yet</p>}
          {pickedImage && (
            <Image src={pickedImage} fill alt="Image selected by the user" />
          )}
        </div>
        <input
          className={classes.input}
          name={name}
          type="file"
          id={name}
          onChange={(e) => {
            console.log(e.target.files);
          }}
          ref={imageInputRef}
          accept="='image/png, image/jpeg"
        ></input>
        <button
          onClick={() => {
            console.log("Image Picker", imageInputRef.current.click);
            handlePickImage();
          }}
          className={classes.button}
          type="button"
        >
          Pick and image
        </button>
      </div>
    </div>
  );
};

export default ImagePicker;

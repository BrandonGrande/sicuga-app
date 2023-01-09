import React,{useContext} from "react";
import '../../css/filePhoto.css'
import {QuestionContext} from './QuestionForm';

export const FilePhoto = () =>{
  
    const {parametric,updateParametric} = useContext(QuestionContext);

    const changeImage = (e) => {
      if (e.target.files[0] !== undefined) {
        const reader = new FileReader();
        reader.readAsDataURL(e.target.files[0]);
        reader.onload = (e) => {
          e.preventDefault();
          updateParametric({
              ...parametric,
              filePhoto:e.target.result
          });
        };
      }
    };

    return (
        <div className="d-flex justify-content-center">
        <div className="image-upload-wrap">
          <input
            className="file-upload-input"
            type="file"
            accept="image/*"
            multiple
            onChange={(e) => {
              changeImage(e);
            }}
          />
        <div className="center">
          <img
            src={parametric.filePhoto}
            alt=""
            className="imageSize"
          />
        </div>
        </div>
        </div>
    )
}
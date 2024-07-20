import React, { useState } from "react";
import "./StudentCard.css";
import Photo from "./img.jpeg";

const StudentCard = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className="card">
      <img src={Photo} alt="Student Photo" className="photo-img" />
      <h2 className="title">Name: DHARSHINI DS </h2>
      <p className="details">Registration No: 212221230022 </p>
      <button className="toggle-button" onClick={toggleVisibility}>
        {isVisible ? "Hide Details" : "Show Details"}
      </button>
      {isVisible && (
        <div className="additional-info">
          <p>Department: Artificial Intelligence and Data Science</p>
          <p>Email ID: shinishi008@gmail.com</p>
          <p>Father's Name: G Durai Moni</p>
        </div>
      )}
    </div>
  );
};

export default StudentCard;
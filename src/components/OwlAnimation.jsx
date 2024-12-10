import React from "react";
import "./OwlAnimation.css";
import owlImage from "../assets/owl.png"; // Укажите правильный путь к изображению

const OwlAnimation = () => {
    return (
        <div className="owl-container">
            <img src={owlImage} alt="Flying Owl" className="owl" />
        </div>
    );
};

export default OwlAnimation;

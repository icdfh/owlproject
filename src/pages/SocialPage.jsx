import React from "react";
import { FaTelegramPlane, FaInstagram, FaGithub } from "react-icons/fa"; // Иконки
import "./SocialPage.css";

const SocialPage = () => {
    return (
        <div className="social-page">
            <h1 className="social-title">Свяжитесь со мной</h1>
            <div className="social-icons">
                <a
                    href="https://t.me/biahavor"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-icon"
                >
                    <FaTelegramPlane />
                </a>
                <a
                    href="https://www.instagram.com/makoozez/?utm_source=ig_web_button_share_sheet"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-icon"
                >
                    <FaInstagram />
                </a>
                <a
                    href="https://github.com/icdfh"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-icon"
                >
                    <FaGithub />
                </a>
            </div>
        </div>
    );
};

export default SocialPage;

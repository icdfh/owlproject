import React from "react";
import { Link } from "react-router-dom"; // Импортируем Link
import "./Footer.css";

const Footer = () => {
    return (
        <footer className="footer">
            <Link to="/social" className="footer-link"> {/* Ссылка на страницу с иконками */}
                by icdfh
            </Link>
        </footer>
    );
};

export default Footer;

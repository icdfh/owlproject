import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";

const Navbar = ({ sections, onLogin, onLogout, isAdmin }) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const navigate = useNavigate();

    const handleLinkClick = () => {
        setMenuOpen(false); // Закрываем меню после выбора пункта
    };

    return (
        <nav className="navbar">
            {/* Логотип слева */}
            <div className="navbar-logo" onClick={() => navigate("/")}>
                Сова Минерва
            </div>

            {/* Кнопка для бургер-меню на мобильных */}
            <button
                className="menu-toggle"
                onClick={() => setMenuOpen(!menuOpen)}
            >
                ☰
            </button>

            {/* Ссылки в центре */}
            <ul className={`navbar-links ${menuOpen ? "show" : ""}`}>
                <li onClick={handleLinkClick}>
                    <Link to="/">Home</Link>
                </li>
                {sections.map((section) => (
                    <li key={section.id} onClick={handleLinkClick}>
                        <Link to={`/section/${section.id}`}>
                            {section.title}
                        </Link>
                    </li>
                ))}
                {isAdmin && (
                    <li onClick={handleLinkClick}>
                        <Link to="/admin">Admin</Link>
                    </li>
                )}
            </ul>

            {/* Кнопки справа */}
            <div className="navbar-buttons">
                {isAdmin ? (
                    <>
                        <button onClick={() => navigate("/admin")}>Admin</button>
                        <button onClick={onLogout}>Logout</button>
                    </>
                ) : (
                    <button onClick={onLogin}>Login</button>
                )}
            </div>
        </nav>
    );
};

export default Navbar;

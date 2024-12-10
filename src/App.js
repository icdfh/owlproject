import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from "react-router-dom";
import AdminPanel from "./components/AdminPanel";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import OwlAnimation from "./components/OwlAnimation";
import SectionPage from "./components/SectionPage";
import Footer from "./components/Footer";
import SocialPage from "./pages/SocialPage"; // Импортируем новую страницу

const ScrollManager = ({ children }) => {
    const location = useLocation();

    useEffect(() => {
        if (location.pathname === "/admin") {
            document.body.style.overflow = "auto"; // Включаем скролл для админа
        } else {
            document.body.style.overflow = "hidden"; // Убираем скролл для всех других страниц
        }
    }, [location.pathname]);

    return children;
};

const App = () => {
    const [sections, setSections] = useState(() => {
        const savedSections = localStorage.getItem("sections");
        return savedSections ? JSON.parse(savedSections) : [];
    });

    const [isAdmin, setIsAdmin] = useState(() => {
        return localStorage.getItem("isAdmin") === "true";
    });

    useEffect(() => {
        localStorage.setItem("sections", JSON.stringify(sections));
    }, [sections]);

    const handleAdminLogin = () => {
        const password = prompt("Введите пароль для входа в админпанель:");
        if (password === "111203") {
            localStorage.setItem("isAdmin", "true");
            setIsAdmin(true);
        } else {
            alert("Неверный пароль!");
        }
    };

    const handleAdminLogout = () => {
        localStorage.removeItem("isAdmin");
        setIsAdmin(false);
    };

    return (
        <Router>
            <ScrollManager>
                <OwlAnimation />
                <Navbar
                    sections={sections}
                    onLogin={handleAdminLogin}
                    onLogout={handleAdminLogout}
                    isAdmin={isAdmin}
                />
                <Routes>
                    {/* Главная страница */}
                    <Route path="/" element={<Home />} />

                    {/* Админпанель */}
                    <Route
                        path="/admin"
                        element={
                            isAdmin ? (
                                <AdminPanel sections={sections} setSections={setSections} />
                            ) : (
                                <Navigate to="/" replace />
                            )
                        }
                    />

                    {/* Динамические страницы разделов */}
                    <Route
                        path="/section/:id"
                        element={<SectionPage sections={sections} />}
                    />

                    {/* Страница с социальными сетями */}
                    <Route path="/social" element={<SocialPage />} />

                    {/* Добавьте другие маршруты здесь */}
                </Routes>
                <Footer /> {/* Добавляем футер */}
            </ScrollManager>
        </Router>
    );
};

export default App;

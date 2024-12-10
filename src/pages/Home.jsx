import React from "react";
import "./Home.css"; // Подключаем CSS
import qrCode from "../assets/qr.png"; // Импортируем изображение

const Home = () => {
    return (
        <div className="home-container">
            <h1 className="home-title">Клуб "Сова Минервы"</h1>
            <p className="home-description">
                Клуб "Сова Минервы" — это интеллектуальное сообщество для тех, кто стремится к глубокому пониманию мира через философию, науку, искусство и обсуждение актуальных идей.
                Название клуба отсылает к знаменитой метафоре Гегеля, где "сова Минервы" расправляет крылья лишь с наступлением сумерек, символизируя мудрость, которая приходит с осознанием и рефлексией.
            </p>
            <div className="qr-section">
                <h2 className="qr-title">Instagram</h2>
                <img
                    className="qr-code"
                    src={qrCode}
                    alt="QR Code"
                />
            </div>
        </div>
    );
};

export default Home;

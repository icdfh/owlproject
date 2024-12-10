import React from "react";
import { useParams } from "react-router-dom";
import "./SectionPage.css";

const SectionPage = ({ sections }) => {
    const { id } = useParams(); // Получаем ID раздела из URL
    const section = sections.find((sec) => sec.id === Number(id)); // Находим текущий раздел

    if (!section) {
        return <h1>Раздел не найден</h1>;
    }

    return (
        <div
            className="section-page"
            style={{
                backgroundColor: section.backgroundColor || "#ffffff",
                color: section.textColor || "#000000",
                fontFamily: section.fontFamily || "Arial", // Устанавливаем шрифт
                minHeight: "100vh",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "20px",
            }}
        >
            <div className="section-content">
                <h1 className="section-title">{section.title}</h1>
                <p className="section-content">{section.content}</p>
                {section.image && (
                    <div className="section-image-wrapper">
                        <img
                            src={section.image}
                            alt="Section"
                            className="section-image"
                        />
                    </div>
                )}
            </div>
            {section.link && (
                <a
                    href={section.link}
                    className="section-link"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <i className="fas fa-external-link-alt"></i> Подробнее
                </a>
            )}
        </div>
    );
};

export default SectionPage;

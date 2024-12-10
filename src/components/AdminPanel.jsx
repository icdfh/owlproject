import React, { useState } from "react";
import "./AdminPanel.css";

const AdminPanel = ({ sections, setSections }) => {
    const [newSection, setNewSection] = useState({
        title: "",
        content: "",
        backgroundColor: "#ffffff",
        textColor: "#000000",
        fontFamily: "Arial",
        image: null,
        link: "",
    });
    const [editingId, setEditingId] = useState(null);
    const [searchQuery, setSearchQuery] = useState(""); // Поле для поиска

    const saveToLocalStorage = (updatedSections) => {
        localStorage.setItem("sections", JSON.stringify(updatedSections));
        setSections(updatedSections);
    };

    const addSection = () => {
        if (!newSection.title.trim()) {
            alert("Название раздела обязательно!");
            return;
        }
        const updatedSections = [
            ...sections,
            { ...newSection, id: Date.now() },
        ];
        saveToLocalStorage(updatedSections);
        setNewSection({
            title: "",
            content: "",
            backgroundColor: "#ffffff",
            textColor: "#000000",
            fontFamily: "Arial",
            image: null,
            link: "",
        });
    };

    const deleteSection = (id) => {
        const updatedSections = sections.filter((section) => section.id !== id);
        saveToLocalStorage(updatedSections);
    };

    const startEditing = (id) => {
        const section = sections.find((section) => section.id === id);
        setEditingId(id);
        setNewSection({ ...section });
    };

    const saveEdit = () => {
        const updatedSections = sections.map((section) =>
            section.id === editingId ? { ...newSection, id: editingId } : section
        );
        saveToLocalStorage(updatedSections);
        setEditingId(null);
        setNewSection({
            title: "",
            content: "",
            backgroundColor: "#ffffff",
            textColor: "#000000",
            fontFamily: "Arial",
            image: null,
            link: "",
        });
    };

    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.onloadend = () => {
            setNewSection({ ...newSection, image: reader.result });
        };
        reader.readAsDataURL(file);
    };

    const filteredSections = sections.filter((section) =>
        section.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="admin-panel">
            <div className="admin-header">
                <h1>Admin Panel</h1>
                <input
                    type="text"
                    placeholder="Поиск разделов..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="search-input"
                />
            </div>
            <div className="admin-form">
                <input
                    type="text"
                    placeholder="Название"
                    value={newSection.title}
                    onChange={(e) =>
                        setNewSection({ ...newSection, title: e.target.value })
                    }
                />
                <textarea
                    placeholder="Описание"
                    value={newSection.content}
                    onChange={(e) =>
                        setNewSection({ ...newSection, content: e.target.value })
                    }
                ></textarea>
                <input
                    type="text"
                    placeholder="Ссылка"
                    value={newSection.link}
                    onChange={(e) =>
                        setNewSection({ ...newSection, link: e.target.value })
                    }
                />
                <div className="color-pickers">
                <div className="color-picker-wrapper">
                    <label>Цвет фона:</label>
                    <input
                        type="color"
                        value={newSection.backgroundColor}
                        onChange={(e) =>
                            setNewSection({
                                ...newSection,
                                backgroundColor: e.target.value,
                            })
                        }
                    />
                </div>
                <div className="color-picker-wrapper">
                    <label>Цвет текста:</label>
                    <input
                        type="color"
                        value={newSection.textColor}
                        onChange={(e) =>
                            setNewSection({
                                ...newSection,
                                textColor: e.target.value,
                            })
                        }
                    />
                </div>
                </div>
                <select
                    value={newSection.fontFamily}
                    onChange={(e) =>
                        setNewSection({ ...newSection, fontFamily: e.target.value })
                    }
                >
                    <option value="Arial">Arial</option>
                    <option value="Georgia">Georgia</option>
                    <option value="Times New Roman">Times New Roman</option>
                    <option value="Courier New">Courier New</option>
                    <option value="Verdana">Verdana</option>
                </select>
                <input type="file" accept="image/*" onChange={handleImageUpload} />
                {editingId ? (
                    <button onClick={saveEdit}>Сохранить изменения</button>
                ) : (
                    <button onClick={addSection}>Добавить раздел</button>
                )}
            </div>
            <div className="admin-sections">
                {filteredSections.map((section) => (
                    <div
                        key={section.id}
                        className="admin-section-card"
                        style={{
                            backgroundColor: section.backgroundColor,
                            color: section.textColor,
                            fontFamily: section.fontFamily,
                        }}
                    >
                        <h2>{section.title}</h2>
                        {section.image && (
                            <img
                                src={section.image}
                                alt="Section"
                                style={{ maxWidth: "100%", height: "auto" }}
                            />
                        )}
                        <p>{section.content}</p>
                        {section.link && (
                            <a
                                href={section.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{ color: section.textColor }}
                            >
                                Перейти по ссылке
                            </a>
                        )}
                        <button onClick={() => startEditing(section.id)}>
                            Редактировать
                        </button>
                        <button onClick={() => deleteSection(section.id)}>
                            Удалить
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AdminPanel;

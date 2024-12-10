export const getSections = () => {
    const sections = localStorage.getItem("sections");
    if (sections) {
        return JSON.parse(sections);
    }
    const defaultSections = [
        { id: 1, title: "Section 1", content: "Content for Section 1" },
        { id: 2, title: "Section 2", content: "Content for Section 2" },
        { id: 3, title: "Section 3", content: "Content for Section 3" },
        { id: 4, title: "Section 4", content: "Content for Section 4" },
    ];
    localStorage.setItem("sections", JSON.stringify(defaultSections));
    return defaultSections;
};

export const saveSections = (sections) => {
    localStorage.setItem("sections", JSON.stringify(sections));
};

const content = document.getElementById("content");
const sidebar = document.getElementById("sidebar");

// Aktif menüyü değiştir
function setActive(link) {
    document.querySelectorAll(".sidebar a").forEach(a => {
        a.classList.remove("active");
    });

    link.classList.add("active");
}

async function loadDoc(folder, file) {
    try {
        const path = folder
            ? `notes/${folder}/${file}.md`
            : `notes/${file}.md`;

        const response = await fetch(path);

        if (!response.ok) {
            throw new Error("Dosya bulunamadı");
        }

        const markdown = await response.text();

        content.innerHTML = marked.parse(markdown);

    } catch (error) {

        content.innerHTML = `<h2>${error.message}</h2>`;

    }
}

async function buildSidebar() {

    const response = await fetch("config.json");
    const folders = await response.json();

    sidebar.innerHTML = "";

    // Introduction
    const introLink = document.createElement("a");

    introLink.href = "#";
    introLink.textContent = "Introduction";

    introLink.addEventListener("click", (event) => {

        event.preventDefault();

        setActive(introLink);
        loadDoc("", "introduction");

    });

    sidebar.appendChild(introLink);

    // Kategoriler
    for (const folder of folders) {

        const menuResponse = await fetch(`notes/${folder}/menu.json`);
        const menu = await menuResponse.json();

        const title = document.createElement("h3");
        title.textContent = folder.toUpperCase();

        sidebar.appendChild(title);

        for (const item of menu) {

            const link = document.createElement("a");

            link.href = "#";
            link.textContent = item.title;

            link.addEventListener("click", (event) => {

                event.preventDefault();

                setActive(link);
                loadDoc(folder, item.file);

            });

            sidebar.appendChild(link);

        }
    }

    // İlk açılış
    setActive(introLink);
    loadDoc("", "introduction");
}

buildSidebar();
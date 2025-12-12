const projects = [
  { id: "01", title: "Profile", folder: "01. Profile", img: "01. Profile.png" },
  { id: "02", title: "PhotoBook", folder: "02. PhotoBook", img: "02. PhotoBook.png" },
  { id: "03", title: "PhotoBook 2", folder: "03. PhotoBook2", img: "03. PhotoBook2.png" },
  { id: "04", title: "RecipeBook", folder: "04. RecipeBook", img: "04. RecipeBook.png" },
  { id: "05", title: "RecipeBook 2", folder: "05. RecipeBook2", img: "05. RecipeBook2.png" },
  { id: "06", title: "Jewelry", folder: "06. Jewelry", img: "06. Jewelry.png" },
  { id: "07", title: "Work Profile", folder: "07. WorkProfile", img: "07. WorkProfile.png" },
  { id: "08", title: "Book Store", folder: "08. BookStore", img: "08. BookStore.png" },
  { id: "09", title: "Totally", folder: "09. Totally", img: "09. Totally.png" },
  { id: "10", title: "Corporate", folder: "10. Corporate", img: "10. Corporate.png" },
  { id: "11", title: "Creation", folder: "11. Creation", img: "11. Creation.png" },
  { id: "12", title: "Furniture Design", folder: "12. FurnitureDesign", img: "12. FurnitureDesign.png" },
  { id: "13", title: "Blog", folder: "13. Blog", img: "13. Blog.png" },
  { id: "14", title: "Coffee", folder: "14. Coffee", img: "14. Coffee.png" },
  { id: "15", title: "Bright House", folder: "15. BrightHouse", img: "15. BrightHouse.png" },
  { id: "16", title: "Sneakers", folder: "16. Sneakers", img: "16. Sneakers.png" },
  { id: "17", title: "BBBEinglish", folder: "17. BBBEnglish", img: "17. BBBEnglish.png" },
  { id: "18", title: "Flower", folder: "18. Flower", img: "18. Flower.png" },
];

const grid = document.getElementById("grid");
const search = document.getElementById("search");

function render(list) {
  grid.innerHTML = "";

  if (!list.length) {
    grid.innerHTML = `<div class="empty">No projects match your search.</div>`;
    return;
  }

  for (const p of list) {
    const a = document.createElement("a");
    a.className = "card";
    a.href = `./${p.folder}/${p.entry || "index.html"}`;

    a.innerHTML = `
      <div class="thumb">
        <img src="./thumbnail/${p.img}" alt="${p.title}">
      </div>
      <div class="meta">
        <h3 class="name">${p.title}</h3>
        <span class="go">↗</span>
      </div>
    `;

    grid.appendChild(a);
  }
}

function escapeHtml(str) {
  return String(str).replace(/[&<>"']/g, (m) => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#039;"
  }[m]));
}

render(projects);

search.addEventListener("input", () => {
  const q = search.value.trim().toLowerCase();
  const filtered = projects.filter(p =>
    (p.title || "").toLowerCase().includes(q) ||
    (p.desc || "").toLowerCase().includes(q) ||
    (p.folder || "").toLowerCase().includes(q)
  );
  render(filtered);
});

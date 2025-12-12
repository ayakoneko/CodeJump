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
    grid.innerHTML = `
      <div class="rounded-xl border border-white/15 bg-white/5 p-4 text-slate-100/80">
        No projects match your search.
      </div>`;
    return;
  }

  for (const p of list) {
    const a = document.createElement("a");
    a.href = `./${p.folder}/${p.entry || "index.html"}`;
    a.className = "group block text-slate-50 no-underline";

    a.innerHTML = `
      <div class="relative overflow-hidden rounded-2xl border border-white/10 bg-black/25
        shadow-[0_10px_30px_rgba(0,0,0,0.30)]
        transition duration-150 group-hover:-translate-y-0.5 group-hover:border-white/20">

        <div class="aspect-[16/10]">
          <img src="./thumbnail/${p.img}" alt="${escapeHtml(p.title)}"
            class="h-full w-full object-cover scale-[1.01] transition duration-500 group-hover:scale-[1.07]" />
        </div>
      </div>

      <div class="mt-2.5 flex items-center justify-between px-1">
        <h3 class="m-0 text-base font-semibold text-slate-50/95">${escapeHtml(p.title)}</h3>
        <span class="grid h-7 w-7 place-items-center rounded-lg border border-white/10 bg-white/8 text-white/90">
          ↗
        </span>
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

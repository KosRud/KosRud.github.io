window.addEventListener("load", () => {
    document.querySelectorAll("main > table").forEach((table) => {
        table.outerHTML = `<div class="table-wrapper">${table.outerHTML}</div>`;
    });
});

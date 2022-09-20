window.addEventListener("load", () => {
    document.querySelectorAll("main > table").forEach((table) => {
        table.outerHTML = `<div class="hor-scroll-wrapper">${table.outerHTML}</div>`;
    });

    document.querySelectorAll("figure").forEach((figure) => {
        figure.innerHTML = `<div>${figure.innerHTML}</div>`;
    });
});
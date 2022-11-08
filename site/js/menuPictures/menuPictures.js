const replaceDict = {
    "HTML, CSS": "/js/menuPictures/html-css.png",
    JS: "/js/menuPictures/js.png",
};

window.addEventListener("load", () => {
    const nav = document.querySelector("nav");
    let html = nav.innerHTML;
    for (const text in replaceDict) {
        const replacement = `<img src="${replaceDict[text]}" style="height: 2.2rem; position: absolute; right: 4px;">`;
        html = html.replace(`(${text})`, replacement);
    }
    nav.innerHTML = html;
});

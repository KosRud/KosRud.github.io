window.addEventListener("load", () => {
    document.querySelectorAll(".image-row").forEach((imageRow) => {
        imageRow.querySelectorAll("img").forEach((img) => {
            const div = document.createElement("div");
            const aspect = img.naturalWidth / img.naturalHeight;
            div.style.flex = aspect;
            div.appendChild(img);
            imageRow.appendChild(div);
        });
    });
});

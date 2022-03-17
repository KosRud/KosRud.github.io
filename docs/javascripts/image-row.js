$(".image-row").each(
	(index, image_row) => {
		jQuery(image_row).find("img").each(
			(index, img) => {
				div = document.createElement("div");
				let aspect = img.naturalWidth / img.naturalHeight;
				div.style.flex = aspect;
				div.appendChild(img);
				image_row.appendChild(div);
			}
		);
	}
)


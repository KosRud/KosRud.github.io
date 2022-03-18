$('span:contains("For students (HTML, CSS)")').each(
    (index, element) => {
        element.innerHTML = 'For students <img src="/js/menuPictures/html-css.png" style="height: 100%; float: right;">';
    }
)

$('span:contains("For students (JS)")').each(
    (index, element) => {
        element.innerHTML = 'For students <img src="/js/menuPictures/js.png" style="height: 100%; float: right;">';
    }
)

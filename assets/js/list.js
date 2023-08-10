
document.addEventListener("DOMContentLoaded", function () {
    fetch("./public/build/list.html")
        .then(response => response.text())
        .then(data => {
            const listContainer = document.querySelector("#list-container");
            if (listContainer) {
                listContainer.innerHTML = data;
            }
        });
});

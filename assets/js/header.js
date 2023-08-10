
document.addEventListener("DOMContentLoaded", function () {
    fetch("./public/build/header.html")
        .then(response => response.text())
        .then(data => {
            const headerContainer = document.querySelector("#header-container");
            if (headerContainer) {
                headerContainer.innerHTML = data;
            }
        });
});

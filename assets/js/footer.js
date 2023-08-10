
document.addEventListener("DOMContentLoaded", function () {
    fetch("./public/build/footer.html")
        .then(response => response.text())
        .then(data => {
            const footerContainer = document.querySelector("#footer-container");
            if (footerContainer) {
                footerContainer.innerHTML = data;
            }
        });
});

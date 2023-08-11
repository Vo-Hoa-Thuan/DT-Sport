document.getElementById("userIconLink").addEventListener("click", function(event) {
    event.preventDefault(); // Ngăn chuyển hướng mặc định

    // Hiển thị đoạn mã HTML mục tiêu (modal)
    document.getElementById("registrationFormContainer").style.display = "block";
});

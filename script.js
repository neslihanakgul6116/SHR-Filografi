document.addEventListener("DOMContentLoaded", () => {
    // .menu-toggle yerine .hamburger olarak değiştirdik kanka:
    const menuToggle = document.querySelector(".hamburger"); 
    const menu = document.querySelector(".menu");

    if (menuToggle && menu) {
        menuToggle.addEventListener("click", () => {
            // Hem menüyü açıyoruz hem de hamburger ikonunu "X" şekline dönüştürüyoruz:
            menuToggle.classList.toggle("active");
            menu.classList.toggle("active");
        });
    }
});

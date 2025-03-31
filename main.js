document.addEventListener("DOMContentLoaded", function () {
    const menuButton = document.querySelector(".header-mobile__menu");
    const menu = document.querySelector(".menu");

    // Находим кнопки в шапке
    const desktopLogin = document.querySelector(".header-login");
    const desktopSignup = document.querySelector(".header-btn");

    // Создаем карточку для кнопок в мобильном меню
    const menuCard = document.createElement("div");
    menuCard.classList.add("menu-card");

    function handleResize() {
        if (window.innerWidth <= 768) {
            // Если мобильный экран - переносим кнопки в меню
            if (!menuCard.innerHTML.trim()) {
                menuCard.innerHTML = `
                    <a href="" class="header-login">Login</a>
                    <a href="" class="header-btn btn">Sign Up</a>
                `;
                menu.appendChild(menuCard);
            }
            // Убираем кнопки из шапки
            if (desktopLogin) desktopLogin.style.display = "none";
            if (desktopSignup) desktopSignup.style.display = "none";
        } else {
            // Если десктоп - показываем кнопки в шапке и убираем из меню
            if (desktopLogin) desktopLogin.style.display = "inline-block";
            if (desktopSignup) desktopSignup.style.display = "inline-block";

            menuCard.innerHTML = ""; // Очищаем мобильное меню
        }
    }

    // Запускаем при загрузке и при изменении размера экрана
    handleResize();
    window.addEventListener("resize", handleResize);

    // Открытие/закрытие меню
    menuButton.addEventListener("click", function () {
        menu.classList.toggle("active");
        menuButton.classList.toggle("open");
    });
});

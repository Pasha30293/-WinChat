// =========================================
// WINCHAT
// Interactive Website
// =========================================


// =========================================
// BUTTONS
// =========================================

const tryButtons = document.querySelectorAll(
    ".button-primary, .nav-button"
);


tryButtons.forEach(button => {

    button.addEventListener("click", event => {

        event.preventDefault();

        alert(
            "🚀 WinChat скоро будет доступен!"
        );

    });

});


// =========================================
// SCROLL ANIMATION
// =========================================

const animatedElements =
    document.querySelectorAll(
        ".feature, .why-card, .coming-content"
    );


const observer =
    new IntersectionObserver(
        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.style.opacity = "1";

                    entry.target.style.transform =
                        "translateY(0)";

                    observer.unobserve(
                        entry.target
                    );
                }

            });

        },
        {
            threshold: 0.12
        }
    );


animatedElements.forEach(element => {

    element.style.opacity = "0";

    element.style.transform =
        "translateY(25px)";

    element.style.transition =
        "opacity .6s ease, transform .6s ease";

    observer.observe(element);

});


// =========================================
// CHAT PREVIEW
// =========================================

const chatItems =
    document.querySelectorAll(
        ".chat-item"
    );


chatItems.forEach(item => {

    item.addEventListener(
        "click",
        () => {

            chatItems.forEach(chat => {

                chat.classList.remove(
                    "active"
                );

            });

            item.classList.add(
                "active"
            );

        }
    );

});


// =========================================
// YEAR
// =========================================

const year =
    document.querySelector(
        "[data-year]"
    );


if (year) {

    year.textContent =
        new Date().getFullYear();

}
<script src="script.js"></script>


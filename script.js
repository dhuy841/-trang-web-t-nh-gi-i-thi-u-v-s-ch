const menuToggle = document.querySelector(".menu-toggle");
const siteMenu = document.querySelector("#site-menu");

if (menuToggle && siteMenu) {
  menuToggle.addEventListener("click", () => {
    const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
    menuToggle.setAttribute("aria-expanded", String(!isOpen));
    menuToggle.setAttribute("aria-label", isOpen ? "Mở menu điều hướng" : "Đóng menu điều hướng");
    siteMenu.classList.toggle("is-open", !isOpen);
  });

  siteMenu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      menuToggle.setAttribute("aria-expanded", "false");
      menuToggle.setAttribute("aria-label", "Mở menu điều hướng");
      siteMenu.classList.remove("is-open");
    });
  });
}

const newsletterForm = document.querySelector(".newsletter-form");

if (newsletterForm) {
  newsletterForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const emailInput = newsletterForm.querySelector('input[type="email"]');
    const message = newsletterForm.querySelector(".form-message");

    if (!(emailInput instanceof HTMLInputElement) || !(message instanceof HTMLElement)) {
      return;
    }

    message.textContent = "Cảm ơn bạn! Đây là bản xem trước — biểu mẫu chưa kết nối dịch vụ email.";
    newsletterForm.reset();
  });
}

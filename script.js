window.addEventListener("DOMContentLoaded", () => {
  const contactForm = document.getElementById("contactForm");
  const toggleButtons = document.querySelectorAll(".toggle-image");
  const modeToggle = document.querySelector(".mode-toggle");
  const closeIntro = document.querySelector(".close-intro");

  if (contactForm) {
    contactForm.addEventListener("submit", (event) => {
      event.preventDefault();
      const formData = new FormData(contactForm);
      const name = formData.get("name");

      alert(`${name}님, 메시지가 정상적으로 제출되었습니다. 곧 연락드릴게요!`);
      contactForm.reset();
    });
  }

  if (modeToggle) {
    modeToggle.addEventListener("click", () => {
      const isDark = document.body.classList.toggle("dark-mode");
      modeToggle.textContent = isDark ? "Light Mode" : "Dark Mode";
    });
  }

  if (closeIntro) {
    closeIntro.addEventListener("click", () => {
      const activeContent = document.querySelector(".project-content.active");
      if (activeContent) {
        activeContent.classList.remove("active");
      }
    });
  }

  toggleButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const card = button.closest(".project-card");
      const imageWrapper = card.querySelector(".project-image");
      const isVisible = imageWrapper.classList.toggle("visible");
      button.textContent = isVisible ? "이미지 숨기기" : "이미지 보기";
    });
  });
});

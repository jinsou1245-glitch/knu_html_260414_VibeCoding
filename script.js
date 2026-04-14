const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(contactForm);
  const name = formData.get("name");

  alert(`${name}님, 메시지가 정상적으로 제출되었습니다. 곧 연락드릴게요!`);
  contactForm.reset();
});

const messageSubmit =
  "⛵️Thank you for submitting your message. We will respond as soon as possible.⛵️";

document.getElementById("contactForm").addEventListener("submit", (event) => {
  event.preventDefault();
  alert(messageSubmit);
});

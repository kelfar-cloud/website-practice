window.addEventListener("scroll", () => {
  const header = document.querySelector("header");
  header.classList.toggle("scroll-nav", window.scrollY > 500);
})

const button = document.querySelector("#contact_button");
button.addEventListener("click", () => {
  window.location.href = "service.html";
});

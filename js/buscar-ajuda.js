document.querySelectorAll(".accordion-toggle").forEach(button => {
  button.addEventListener("click", () => {
    const parent = button.parentElement;
    parent.classList.toggle("open");
  });
});

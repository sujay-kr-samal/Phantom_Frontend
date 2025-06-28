function showSection(id) {
  document.querySelectorAll("section").forEach(section => {
    section.classList.remove("active");
  });
  const targetSection = document.getElementById(id);
  if (targetSection) {
    targetSection.classList.add("active");
  }
}

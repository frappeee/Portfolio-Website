const btnEn = document.getElementById("btn-en");
const btnId = document.getElementById("btn-id");
const aboutEn = document.getElementById("about-en");
const aboutId = document.getElementById("about-id");

// Listen for a click on the English button
btnEn.addEventListener("click", () => {
  aboutEn.classList.remove("hidden");
  aboutId.classList.add("hidden");

  btnEn.classList.add("active");
  btnId.classList.remove("active");
});

// Listen for a click on the Indonesian button
btnId.addEventListener("click", () => {
  aboutId.classList.remove("hidden");
  aboutEn.classList.add("hidden");

  btnId.classList.add("active");
  btnEn.classList.remove("active");
});

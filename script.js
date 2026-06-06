const reviews = [
  "Amazing editing skills and fast delivery. Highly recommended!",
  "Professional, creative and easy to work with.",
  "My YouTube videos now look much more engaging.",
  "Best video editor I've worked with."
];

let index = 0;

setInterval(() => {
  index = (index + 1) % reviews.length;
  document.getElementById("review").textContent = reviews[index];
}, 3000);

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();

    document.querySelector(this.getAttribute("href"))
      .scrollIntoView({
        behavior: "smooth"
      });
  });
});
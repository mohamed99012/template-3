let skills = document.getElementById("skills");
let spans = document.querySelectorAll(".skills .ratio-div span");
window.onscroll = function () {
  if (window.scrollY >= skills.offsetTop - 100) {
    spans.forEach((span) => {
      span.style.width = span.dataset.width;
    });
  }
};


// UI VAR
const moreBtn = document.getElementById("js-more-btn"),
  more = document.getElementById("js-more");
moreBtn.addEventListener("click", e => {
  more.classList.toggle("d-none");
  if (moreBtn.textContent === "Load more") {
    moreBtn.textContent = "Load less";
  } else {
    moreBtn.textContent = "Load more";
  }
});

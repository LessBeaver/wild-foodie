const button = document.getElementById('open-modal');
const div = document.getElementById('modal');

const btnOpen = document.getElementById("open-modal");
const btnClose = document.getElementById("close-modal");
const btnClose2 = document.getElementById("quit-modal");
const btnClose3 = document.getElementById("close-modal2");
const modal = document.getElementById("modal");
const modal2 = document.getElementById("modal2");

btnOpen.addEventListener("click", () => {
  modal.style.display = "block"
})

btnClose.addEventListener("click", () => {
  modal.style.display = "none"
})

btnClose2.addEventListener("click", () => {
  modal2.style.display = "block";
  modal.style.display = "none"
})

btnClose3.addEventListener("click", () => {
  modal.style.display = "none"
  modal2.style.display = "none";
})


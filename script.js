setTimeout(() => {
  document.getElementById("intro").style.display = "none";
  document.getElementById("story").classList.remove("hidden");
}, 5000);

setTimeout(() => {
  document.getElementById("story").style.display = "none";
  document.getElementById("proposal").classList.remove("hidden");
}, 12000);

setTimeout(() => {
  document.getElementById("proposal").style.display = "none";
  document.getElementById("final").classList.remove("hidden");
}, 20000);
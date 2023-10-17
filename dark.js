window.addEventListener("load", (event) => {
  const theme = localStorage.getItem("theme");
  if (theme == "dark") {
    changeTheme();
  }
});

function changeTheme() {
  document.body.classList.toggle("dark-mode");
  if (document.body.classList.contains("dark-mode")) {
    document.getElementById("icon").src = "sun.png";
    localStorage.setItem("theme", "dark");
  } else {
    document.getElementById("icon").src = "moon.png";
    localStorage.setItem("theme", "light");
  }
}

console.log("JS LOADED SUCCESSFULLY");

function addPlayer() {
  const name = prompt("Enter player name:");
  if (!name) return;

  const container = document.getElementById("players");

  console.log("Adding player:", name);

  const div = document.createElement("div");
  div.style.padding = "10px";
  div.style.margin = "10px";
  div.style.background = "#222";
  div.style.borderRadius = "8px";
  div.textContent = name;

  container.appendChild(div);
}

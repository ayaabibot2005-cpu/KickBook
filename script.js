function addPlayer() {
  const name = prompt("Enter player name:");
  if (!name) return;

  const div = document.createElement("div");
  div.className = "card";
  div.innerHTML = "<h3>" + name + "</h3>";

  document.getElementById("players").appendChild(div);
}

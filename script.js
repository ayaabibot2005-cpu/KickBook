function addPlayer() {
  const name = prompt("Enter player name:");
  if (!name) return;

  const container = document.getElementById("players");

  const card = document.createElement("div");
  card.className = "card";
  card.textContent = name;

  container.appendChild(card);
}

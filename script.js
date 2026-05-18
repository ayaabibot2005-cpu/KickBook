function addPlayer() {
  const name = prompt("Player name:");
  if (!name) return;

  const number = prompt("Shirt number:");
  const position = prompt("Position (GK / DEF / MID / ATT):");
  const goals = prompt("Goals scored:");
  const matches = prompt("Matches played:");

  const container = document.getElementById("players");

  const card = document.createElement("div");
  card.className = "card";

  card.innerHTML = `
    <h3>⚽ ${name}</h3>
    <p>🔢 Number: ${number || "-"}</p>
    <p>📍 Position: ${position || "-"}</p>
    <p>⚽ Goals: ${goals || "0"}</p>
    <p>🎮 Matches: ${matches || "0"}</p>
  `;

  container.appendChild(card);
}

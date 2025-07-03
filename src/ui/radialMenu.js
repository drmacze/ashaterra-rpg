export function renderRadialMenu() {
  const radial = document.getElementById('radialMenu');
  radial.innerHTML = `
    <div style="display:flex; gap: 2em;">
      <button onclick="alert('Enter Dungeon')">Dungeon</button>
      <button onclick="alert('Open Pact')">Pact</button>
      <button onclick="alert('Inventory')">Inventory</button>
      <button onclick="alert('Codex')">Codex</button>
    </div>
  `;
}

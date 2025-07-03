import statEmoji from '../data/statDefinition.json' assert { type: 'json' };

export function renderHUD() {
  const hud = document.createElement('div');
  hud.style.position = 'absolute';
  hud.style.bottom = '1em';
  hud.style.left = '1em';
  hud.style.background = 'rgba(0,0,0,0.5)';
  hud.style.padding = '1em';
  hud.style.border = '1px solid red';
  hud.style.fontSize = '1.2em';
  hud.innerHTML = `
    Stats:<br/>
    ${Object.entries(statEmoji).map(([stat, icon]) => `${icon} ${stat}: 10`).join('<br/>')}
  `;
  document.body.appendChild(hud);
}

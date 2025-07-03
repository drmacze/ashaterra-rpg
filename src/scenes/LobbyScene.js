import { GAME_CONFIG } from '../../config.js';
import { renderHUD } from '../scenes/HUDScene.js';

window.loadLobbyScene = (username) => {
  const app = document.getElementById('app');
  app.innerHTML = `
    <div style="padding: 2em;">
      <h2>✠ Champion of ${GAME_CONFIG.worldName}: ${username}</h2>
      <div id="radialMenu"></div>
    </div>
  `;

  renderRadialMenu();
  renderHUD();
};

import { renderRadialMenu } from '../ui/radialMenu.js';

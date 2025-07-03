// Entry point for Ashaterra Game
import './src/scenes/LoginScene.js';
import './src/scenes/LobbyScene.js';
import './src/scenes/HUDScene.js';

document.addEventListener('DOMContentLoaded', () => {
  const username = localStorage.getItem('username');
  if (username) {
    window.loadLobbyScene(username);
  } else {
    window.loadLoginScene();
  }
});

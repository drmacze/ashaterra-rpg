window.loadLoginScene = () => {
  const app = document.getElementById('app');
  app.innerHTML = `
    <div style="text-align: center;">
      <h1 style="font-size: 3em;">Welcome to Ashaterra</h1>
      <p style="font-style: italic;">Land of Pact and Flame</p>
      <input id="usernameInput" placeholder="Enter your name" style="font-size: 1.5em; padding: 0.5em;" />
      <br/><br/>
      <button onclick="startGame()" style="font-size: 1.5em;">Begin Journey</button>
    </div>
  `;

  window.startGame = () => {
    const username = document.getElementById('usernameInput').value.trim();
    if (username) {
      localStorage.setItem('username', username);
      window.loadLobbyScene(username);
    }
  };
};

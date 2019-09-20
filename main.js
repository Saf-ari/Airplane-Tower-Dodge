
// Javascript Canvas Intro!

/**
 *  This is called once after the HTML of the page loads
 *
 */
function Start() {

  // Initialize Spaceship
  InitializeSpaceship();
  TOWER1.x = GAME.canvas.width;
  TOWER2.x = 4.0/3 * GAME.canvas.width;
  TOWER3.x = 5.0/3 * GAME.canvas.width;
  TOWER1.height = Math.random() * GAME.canvas.height;
  TOWER2.height = Math.random() * GAME.canvas.height;
  TOWER3.height = Math.random() * GAME.canvas.height;
}

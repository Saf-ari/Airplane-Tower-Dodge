/**
 *  handleShipAnimation moves the ship based on its direction and
 *    keyboard control
 *
 */
function handleShipAnimation() {
  if (CONTROLS.ship.forward) {
    var radians = (Math.PI / 180) * SPACE_SHIP.rotation,
        cos = Math.cos(radians),
        sin = Math.sin(radians);
    SPACE_SHIP.x += SPACE_SHIP.speed * sin;
    SPACE_SHIP.y +=  SPACE_SHIP.speed * cos;
  }
  if (CONTROLS.ship.backward) {
    var radians = (Math.PI / 180) * SPACE_SHIP.rotation,
        cos = Math.cos(radians),
        sin = Math.sin(radians);
    SPACE_SHIP.x -= SPACE_SHIP.speed * sin;
    SPACE_SHIP.y -=  SPACE_SHIP.speed * cos;
  }
  if (CONTROLS.ship.rotateClockwise) {
    SPACE_SHIP.rotation -= 4;
  }
  if (CONTROLS.ship.rotateCounterClockwise) {
    SPACE_SHIP.rotation += 4;
  }

  // Check if asteroid is leaving the boundary, if so, switch sides
  if (SPACE_SHIP.x > GAME.canvas.width) {
    SPACE_SHIP.x = 0;
  } else if (SPACE_SHIP.x < 0) {
    SPACE_SHIP.x = 600;
  } else if (SPACE_SHIP.y > GAME.canvas.height) {
    SPACE_SHIP.y = 0;
  } else if (SPACE_SHIP.y < 0) {
    SPACE_SHIP.y = 300;
  }
}

function RenderTowers(context) {
  var canvas = document.getElementById('canvas');
  HandleTowerMovement();
  context.fillRect(TOWER1.x, 0, 75, TOWER1.height);
  context.fillRect(TOWER1.x, TOWER1.height + 100, 75, GAME.canvas.height - TOWER1.height);
  context.fillRect(TOWER2.x, 0, 75, TOWER2.height);
  context.fillRect(TOWER2.x, TOWER2.height + 100, 75, GAME.canvas.height - TOWER2.height);
  context.fillRect(TOWER3.x, 0, 75, TOWER3.height);
  context.fillRect(TOWER3.x, TOWER3.height + 100, 75, GAME.canvas.height - TOWER3.height);
}

function HandleTowerMovement() {
  if (TOWER1.x < -1 * TOWER1.width){
    TOWER1.x = GAME.canvas.width;
    TOWER1.height = Math.random() * GAME.canvas.height;
  };
  if (TOWER2.x < -1 * TOWER2.width){
    TOWER2.x = GAME.canvas.width;
    TOWER2.height = Math.random() * GAME.canvas.height;
  };
  if (TOWER3.x < -1 * TOWER3.width){
    TOWER3.x = GAME.canvas.width;
    TOWER3.height = Math.random() * GAME.canvas.height;
  };
  TOWER1.x -= 1;
  TOWER2.x -= 1;
  TOWER3.x -= 1;
}

function runGame() {
  var canvas = document.getElementById('mainCanvas');
  var context = canvas.getContext('2d');

  if (GAME.started) {

    // 1 - Reposition the objects
    //handleShipAnimation();
    HandleTowerMovement();

    // 2 - Clear the CANVAS
    context.clearRect(0, 0, 600, 300);

    // 3 - Draw new items
    //RenderSpaceship(context);
    RenderTowers(context);

  } else {
    context.font = "30px Arial";
    context.fillText("Game Over      Level " + GAME.level, 135, 200);
  }
  window.requestAnimationFrame(runGame);
}

window.requestAnimationFrame(runGame);


// Populate a global variable for the spaceship
function InitializeAirplane() {
  var canvas = document.getElementById('mainCanvas');
  var context = canvas.getContext('2d');
  context.scale(1,1);
  AIRPLANE = {
    x : 100,
    y : GAME.canvas.width / 2,
    gravity : 1.5,
    initialized : true,
    score : 0
  }
/**  RenderSpaceship
 *
 *  Renders all spaceship points after adjusting them for the rotation and position
 *    in space
 */
/*
function RenderAirplane(context) {
  if (!SPACE_SHIP.initialized) {
    return;
  }
  */
/*
  // Move to the point where drawing will start
  var rotatedPoint = RotateAroundOrigin(
    SPACE_SHIP.positions[0].x,
    SPACE_SHIP.positions[0].y,
    SPACE_SHIP.rotation
  );
  context.moveTo(SPACE_SHIP.x + rotatedPoint[0],SPACE_SHIP.y +  rotatedPoint[1]);
  SPACE_SHIP.latest.x = SPACE_SHIP.x + rotatedPoint[0];
  SPACE_SHIP.latest.y = SPACE_SHIP.y + rotatedPoint[1];
  // Begin rendering the space ship points (rotating them each time)
  context.beginPath();
  for (var i = 0; i < SPACE_SHIP.positions.length; i++) {
    var rotatedPoint = RotateAroundOrigin(
      SPACE_SHIP.positions[i].x,
      SPACE_SHIP.positions[i].y,
      SPACE_SHIP.rotation
    );
    context.lineTo(
      SPACE_SHIP.x + (rotatedPoint[0] * SPACE_SHIP.scale),
      SPACE_SHIP.y + (rotatedPoint[1] * SPACE_SHIP.scale)
    );
  }
  */
  context.lineWidth = 1;
  switch (SPACE_SHIP.health) {
    case 3:
      context.strokeStyle = 'green';
      break;
    case 2:
      context.strokeStyle = 'blue';
      break;
    case 1:
      context.strokeStyle = 'orange';
      break;
    case 0:
      context.strokeStyle = 'red';
      break;
    default:
      context.strokeStyle = 'white';
      break;
  }
  context.stroke();
}

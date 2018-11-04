// Udacity provided code (ES5)
// Enemies our player must avoid
// var Enemy = function() {
//     // Variables applied to each of our instances go here,
//     // we've provided one for you to get started
//
//     // The image/sprite for our enemies, this uses
//     // a helper we've provided to easily load images
//     this.sprite = 'images/enemy-bug.png';
// };
//
// // Update the enemy's position, required method for game
// // Parameter: dt, a time delta between ticks
// Enemy.prototype.update = function(dt) {
//     // You should multiply any movement by the dt parameter
//     // which will ensure the game runs at the same speed for
//     // all computers.
// };
//
// // Draw the enemy on the screen, required method for game
// Enemy.prototype.render = function() {
//     ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
// };

//Convert provided enemy class to ES6
class Enemy {
  constructor(x, y){
    this.x = x;
    this.y = y;
    this.sprite = 'images/enemy-bug.png';
  }

  // Update the enemy's position
  // Parameter: dt, a time delta between ticks
  update(dt) {
    const canvas = document.querySelector('canvas');
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    if (this.x >= canvas.width) {
      this.x = -101; //101 is width of bug images
    } else {
      this.x += 100*dt;
    }
  };

  // Draw the enemy on the screen, required method for game
  render() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
  }
}

// This class requires an update(), render() and
// a handleInput() method.
class Player {
  constructor(){
    const _initX = 202;
    const _initY = 387;
    let x = _initX;
    let y = _initY;
    this.sprite = 'images/char-boy.png';
    this.x = x;
    this.y = y;
  }

  // Update the player's position
  update() {

  };

  // Draw the player on the screen
  render() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
  }

  handleInput(key) {
    const canvas = document.querySelector('canvas');
    switch (key) {
      case 'up':
        // console.log("Up key pressed");
        if (this.y > 0) {
          this.y -= 85;
        }
        break;
      case 'down':
        // console.log("Down key pressed");
        //387 is strating position
        if (this.y < 387) {
          this.y += 85;
        }
      break;
      case 'left':
        // console.log("Left key pressed");
        if (this.x > 0) {
          this.x -= 101;
        }
        break;
      case 'right':
        // console.log("Right key pressed");
        if (this.x < canvas.width-101) {
          this.x += 101;
        }
      break;
    }
  }
}


// Instantiate objects.
const player = new Player();
const enemy1 = new Enemy(0,55);
const enemy2 = new Enemy(0,140);
const enemy3 = new Enemy(0,225);
const allEnemies = [enemy1,enemy2,enemy3];

// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});

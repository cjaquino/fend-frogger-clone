class Enemy {
  constructor(x, y, speed){
    this.x = x;
    this.y = y;
    this.speed = speed;
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
      // change to random speed from 100-500
      this.speed = Math.random()*400 + 100;
    } else {
      this.x += this.speed*dt;
    }

    //collision detection
    if (player.y == this.y && player.x >= this.x && player.x < this.x + 70) {
      player.x = 202;
      player.y = 397;
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
    const _initY = 397;
    let x = _initX;
    let y = _initY;
    this.sprite = 'images/char-boy.png';
    this.x = x;
    this.y = y;
  }

  // check for win condition
  update() {
    const modal = document.querySelector('.modal');
    if (this.y == -28) {
      modal.style.display = 'block';
    }
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
          console.log(this.y);
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
const enemy1 = new Enemy(-101,57,300);
const enemy2 = new Enemy(-101,142,200);
const enemy3 = new Enemy(-101,227,150);
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

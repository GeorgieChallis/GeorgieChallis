// Bubble animation code by onecompileman on github
var bubbles = [];

let font,
  fontsize = 40;

function preload() {
  // Ensure the .ttf or .otf font stored in the assets directory
  // is loaded before setup() and draw() are called
  font = loadFont('assets/SourceSansPro-Regular.otf');
}

function setup() {
  createCanvas(710, 400);

  // Set text characteristics
  textFont(font);
  textSize(fontsize);
  textAlign(CENTER, CENTER);
}

function draw() {
  background(60);
  
      bubbles.forEach((bubble) => {
        bubble.update();
        bubble.show();
    });

  // Align the text in the center
  // and run drawWords() in the middle of the canvas
  textAlign(CENTER);
  drawWords(width * 0.5);
}

function drawWords(x) {
  // The text() function needs three parameters:
  // the text to draw, the horizontal position,
  // and the vertical position
  fill(254);
  text('Georgie Challis', x, 200);
  textSize(35);
  fill(210);
  text("Hello! I'm", x, 160);
  textSize(40);
}

function mousePressed() {
    const pos = createVector(mouseX, mouseY) // x, y    
    const vel = createVector(random(-4,4),
                             random(-4,4));
    const col = (color(
        random(0,255), // min, max
        random(0,255),
        random(0,255)
    ));
    const radius = random(50,150);

    bubbles.push(
        new Bubble(pos,vel,col,radius)
    );
}


var Bubble = (function () {

    function Bubble(pos, vel, col, radius) {
        this.pos = pos;
        this.vel = vel;
        this.col = col;
        this.radius = radius;
    }

    Bubble.prototype.show = function () {
        noStroke();
        fill(this.col);
        ellipse(this.pos.x, this.pos.y, this.radius, this.radius);
    }

    Bubble.prototype.update = function () {
        this.pos.add(this.vel);
        this.edges();
    }

    Bubble.prototype.edges = function () {
        if (this.pos.x - (this.radius / 2) < 0 || this.pos.x + (this.radius / 2) > width) {
            this.vel.x *= -1;
        }

        if (this.pos.y - (this.radius / 2) < 0 || this.pos.y + (this.radius / 2) > height) {
            this.vel.y *= -1;
        }
    }

    return Bubble;
    
})();

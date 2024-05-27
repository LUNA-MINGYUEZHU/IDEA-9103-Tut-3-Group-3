function setup() {
  //Create a window size canvas:
  createCanvas(windowWidth, windowHeight); 
  //Set stroke color to black:
  stroke(0); 
   //Set fill color to black:
  fill(0);
  //Set angle mode to degrees:
  angleMode(DEGREES); 
}


function draw() {
  //Set background color:
  background(247, 241, 223);
   //Move the origin to the center of the canvas:
  translate(width / 2, height / 2);

//Name the drawing functions:
draw1();
draw2();
draw3();
draw4();
draw5();
draw6();
draw7();

//Draw black lines:
blackLine(280 - width / 2, 731 - height / 2, 190, 4);
blackLine(338 - width / 2, 755 - height / 2, 960, 4);
blackLine(112 - width / 2, 659 - height / 2, 210, 6);
blackLine(128 - width / 2, 666 - height / 2, 210, 6);
blackLine(140 - width / 2, 672 - height / 2, 210, 6);
blackLine1(308 - width / 2, 525 - height / 2, 505, 10);
blackLine1(336 - width / 2, 540 - height / 2, 505, 10);
blackLine1(436 - width / 2, 595 - height / 2, 45, 8);
blackLine1(460 - width / 2, 610 - height / 2, 17, 8);
}

//Draw a black rect:
function blackLine(x, y, w, h) {
  push(); 
  translate(x, y); 
  rotate(-28); 
  rect(0, 0, w + 4, h); 
  pop(); 
}

//Draw another black rect:
function blackLine1(x, y, w, h) {
  push();
  translate(x, y);
  rotate(-28);
  rect(0, 0, w - 12, h); 
  pop();
}

//Draw rest blacklines:
function draw1() {
  push();
  translate(68 - width / 2, 575 - height / 2);
  rotate(-28);
  for (let i = 0; i < 22; i++) {
    stroke(200 - i * 4);
    let y = i * 6;
    let x1 = 0 + i * 4.5;
    let x2 = 480 - i * 3.7;
    line(x1, y, x2, y); 
  }
  pop();
}

//Draw rest blacklines:
function draw2() {
  push();
  translate(843 - width / 2, 154 - height / 2);
  rotate(-28);
  for (let i = 0; i < 57; i++) {
    if (i >= 20 && i < 33) {
      noStroke(); 
    } else {
      stroke(200 - i * 2); 
    }
    let y = i * 6;
    let x1 = 0 - i * 4;
    let x2 = 69 + i * 3.3;
    line(x1, y, x2, y); 
    if (i == 7) {
      rect(x1, y, 80, 10); 
      rect(x2, y, 260, 10); 
    } else if (i == 13) {
      rect(x1, y, 124, 8); 
      rect(x2, y, 260, 10); 
    } else if (i == 17) {
      rect(x1, y, 154, 6); 
    }
  }
  pop();
}

//Draw rest blacklines:
function draw3() {
  push();
  translate(153 - width / 2, 530 - height / 2);
  rotate(-28);
  for (let i = 0; i < 54; i++) {
    let y = i * 6;
    let x1 = 0 + i * 4;
    let x2 = x1 + 50;
    line(x1, y, x2, y); // Draw a line
  }
  pop();
}

//Draw rest blacklines:
function draw4() {
  push();
  translate(238 - width / 2, 712 - height / 2);
  rotate(-28);
  for (let i = 0; i < 20; i++) {
    if (i >= 10 && i < 14) {
      noStroke(); 
    } else {
      stroke(170); 
    }
    let y = i * 6;
    let x1 = 0 + i * 5;
    let x2 = x1 + 1280;
    line(x1, y, x2, y); 
  }
  pop();
}

//Draw rest blacklines:
function draw5() {
  push();
  translate(144 - width / 2, 609 - height / 2);
  rotate(-28);
  for (let i = 0; i < 2; i++) {
    let y = i * 24;
    let x1 = 0 + i * 16;
    let x2 = x1 + 1200;
    line(x1, y, x2, y); 
  }
  pop();
}

//Draw rest blacklines:
function draw6() {
  push();
  translate(94 - width / 2, 651 - height / 2);
  rotate(-28);
  for (let i = 0; i < 9; i++) {
    let y = i * 6;
    let x1 = 0 + i * 5;
    let x2 = 440 - i * 3;
    line(x1, y, x2, y); 
  }
  pop();
}

//Draw rest blacklines:
function draw7() {
  push();
  translate(812 - width / 2, 423 - height / 2);
  rotate(-28);
  rect(0, 0, 311, 5);
  pop();
}
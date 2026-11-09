fly = 0
fly1 = -10



function setup() {
  createCanvas(400, 600);

}

function draw() {
  background(220);

background(204, 205, 255);

//sun
let pulse = random(7,6);
  
fill(0)
fill(225)
fill(255,200,0,100);
circle(mouseX, mouseY, width / pulse);
fill(255,255,0);
circle(mouseX, mouseY, width / 8);
fill(255,255,255);
circle(mouseX, mouseY, width / 10);
  
//birds
let heightL = (30,100);
let heightL1 = (30,80);
  
fill(0);
ellipse(fly, heightL, -10, 5);

fill(0);
ellipse(fly1, heightL1, -10, 5)  ;
  
fly = fly + 1;
fly1 = fly1 + 1;
  
if (fly > width) {
  fly = 0;
  fly1 = -10;
  random(heightL);
  
}


  
  //left clouds
fill(255, 235, 235);
circle(70,170,158);
circle(30,130,168);
  
fill(220,216,228);
circle(70,170,150);
circle(30,130,150);

//rightCLouds
 fill(255, 235, 235);
circle(230,200,80);
circle(282,166,105);
circle(327,137,85);
circle(360,100,80);
circle(375,250,210);
circle(450,130,210);
circle(420,20,85);
  
fill(220,216,228);
circle(230,200,75);
circle(282,166,100);
circle(327,137,75);
circle(360,100,75);
circle(375,250,200);
circle(450,130,200);
circle(420,20,75);


  
//darkClouds
fill(169,169,198);
circle(375,230,150);
circle(410,130,100);

circle(30,170,130);
circle(120,200,80);

//water
fill(0,0,210);
rect(0, 195, 3000, 3000);


//greenery
fill(0, 235, 0);
rect(0, 230, 1000, 1000);

//greeneryDark
fill(0, 180, 0);
rect(0, 255, 1000, 1000);

//cliff
fill(135, 69, 19);
arc(190, 270, 3000, 3000, 0, PI);

//underFall
fill(128,38,0);
rect(145, 270, 40, 550);


let x = random(148,150);
let xT = random(30,32);
//fall
fill(0,0,210);
rect(x, 230, xT, 550);

noStroke();

  

}


/*
//random strokeWeight
//thickness of lines
  stWeight = random(1)
  stWeightC = random(1,5);

//random alpha
  rAlpha = random(10,20);
  rAlphaC = random(.2,.5);

//random origin
  rCords = random(10,400);
//random Increments
  rI = random(800,1050);
//angle of lines
  angle = random(360);
//space between lines
  rSpace = random(2,20);

  defaultCor = 0

  randomColor = [random(50, 255), random(50, 255), random(80, 255)];

  rColor = random(randomColor);

function setup() {

  windowTitle("Proj2 - FOLDS")
 size(800,800)

}


function draw() {
  

      background(random(fill([1,150,255])))
      stroke(stWeight)
      strokeWeight(stWeight)
  
      fill(0)

      background(0,225,0,20)

//for variable = start, stop, step do
  // code to repeat
//end

//MAIN
      translate(0,-500)

//SCRAP fill(rColor,rAlpha)

//PINK1
      stroke(255,72, 176,rAlpha)
      strokeWeight(stWeight)
      rotate(angle)
      for (i = 1; i<randomColor;) {
  
    for (i = 1; i<8; i+=1) {
  push()
      for (lineX = 0; lineX<rI; lineX+=rSpace) {
    line(lineX, angle, rI, 100000)
      }
  pop()
  ///////////////////////////////////////////
    }

   
//YELLOW1
//SCRAP fill(255,232, 0, rAlpha)

//translate(0,0)


      stroke(255,232, 0, rAlpha)
      strokeWeight(stWeight)
      rotate(angle)

      for (i = 1; i<8; i+=1 ) { 
  push()
      for (lineA = 0; rI; lineA+=rSpace) { 
        line(lineA, angle, rI, 100000)
      }
  pop()
    }


//translate(0,0)

//BLUE1
      stroke(0, 120, 191, rAlpha)
      strokeWeight(stWeight)
      rotate(angle)
    for (i = 1; i<8; i+=1) {
  push()
    for (lineB = 0; lineB<rI; lineB+=rSpace) {
    line(lineB, angle, rI, 100000)
  }
  
  pop()
}
////////////////////////////////////////////////////////////
rTranslate = [1200, -500]      
translate(rTranslate,rTranslate)

//PINK CIRCLE
fill(255,72, 176,rAlphaC)
      stroke(255,72, 176, rAlpha)
      strokeWeight(stWeightC)
      rotate(angle)
    for (i = 1; i<2; i+=1) {
  push()
        // for (let circB = 0; i<rI; i+=20) {

    for (circX = 0; circX<rI; circX+=10){
      //curve(x1,y1,x2,y2,x3,y3,x4,y4)
      circle(circX, circX, circX)
    
    }
  
  
  pop()

  }

//YELLOW CIRCLE
fill(255,232, 0,rAlphaC)
      stroke(255,232, 0, rAlpha)
      strokeWeight(stWeightC)
      rotate(angle)
    for (i = 1; i<2; i+=1) {
  push()
    for (circA = 0; circA<rI; circA+=10) {
      //curve(x1,y1,x2,y2,x3,y3,x4,y4)
      circle(circA, circA, circA)
    
    }
  
  
  pop()

  }

//for (let i=start; i<limit; i+=step) {...}	
//for i=start, limit, step do ... end	

//BLUE CIRCLE
fill(0, 120, 191,rAlphaC)
      stroke(0, 120, 191, rAlpha)
      strokeWeight(stWeightC)
      rotate(angle)
    for (i = 1; i<5; i+=1) {
  push()
    for (circB = 0; i<rI; i+=20) { 
      //curve(x1,y1,x2,y2,x3,y3,x4,y4)
      circle(circB, circB, circB)
    
    }
  
  
  pop()

  

noStroke()

  }
save('test1.png')
}
  }

    
//end */
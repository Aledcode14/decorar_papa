var hands = new HandRecognizer();


var myPainter = new Painter()


function setup() {
    createCanvas(windowWidth, windowHeight);
  
    frameRate(30);
  figure();
  colors();
    
}

function draw() {
  
  
    hands.predict();
  var dedoColor = hands.getLeftLandmark(Landmarks.Pointer_Tip);
  
  
    var thumbTip = hands.getRightLandmark(Landmarks.Thumb_Tip);
    var pointerTip =  hands.getRightLandmark(Landmarks.Pointer_Tip);
  
    var landmarkDist;
    if (hands.rightHandVisible()){
        landmarkDist = dist(thumbTip.x, thumbTip.y, pointerTip.x, pointerTip.y);
    } else{
        landmarkDist = Infinity;
    }
    var threshold = 30;
    if (landmarkDist < threshold) {    
        console.log("Pinched!");
        myPainter.penDown(thumbTip.x,thumbTip.y);
    } else {
        myPainter.penUp();
    }
  
  if(pointerTip.x >= (windowWidth/4-110) && pointerTip.x <= (windowWidth/4-80) &&
         pointerTip.y >= (windowHeight/2-200) && pointerTip.y <= (windowHeight/2-160)){
        myPainter.penDownBl(thumbTip.x,thumbTip.y);
      }
  
  else if(pointerTip.x >= (windowWidth/4-110) && pointerTip.x <= (windowWidth/4-80) &&
         pointerTip.y >= (windowHeight/2-150) && pointerTip.y <= (windowHeight/2-110)){
        myPainter.penDownR(thumbTip.x,thumbTip.y);
      }
  else if(pointerTip.x >= (windowWidth/4-110) && pointerTip.x <= (windowWidth/4-80) &&
         pointerTip.y >= (windowHeight/2-100) && pointerTip.y <= (windowHeight/2-60)){
        myPainter.penDownG(thumbTip.x,thumbTip.y);
      }
  else if(pointerTip.x >= (windowWidth/4-110) && pointerTip.x <= (windowWidth/4-80) &&
         pointerTip.y >= (windowHeight/2-50) && pointerTip.y <= (windowHeight/2-10)){
        myPainter.penDownB(thumbTip.x,thumbTip.y);
      }
  
  if(pointerTip.x >= (windowWidth/4-120) && pointerTip.x <= (windowWidth/4-80) &&
         pointerTip.y >= (windowHeight/2) && pointerTip.y <= (windowHeight/2+30)){
    clear();
    figure();
    colors();
      }
    
    hands.drawLandmarks(false);
  
  
  

}

function colors(){
  strokeWeight(2)
  //stroke("black");
  fill("black");
  rect(windowWidth/4-110,windowHeight/2-200,40,40);
  
  //stroke("red");
  fill("#F13C10");
  rect(windowWidth/4-110,windowHeight/2-150,40,40);
  
  fill("#098B15");
  rect(windowWidth/4-110,windowHeight/2-100,40,40);
  
  fill("#A620CA");
  rect(windowWidth/4-110,windowHeight/2-50,40,40);
  
  noStroke();
  fill("#079BBF");
  rect(windowWidth/4-120,windowHeight/2,60,30);
  fill("black");
  text("limpiar", windowWidth/4-107,windowHeight/2+18)
}

function figure(){
   strokeWeight(2);
    stroke("black");
  fill(153, 102, 0);
    ellipse(windowWidth/2, windowHeight/2, 400, 500);
  
    fill(255,255,255);
    circle(windowWidth/2-50, windowHeight/2-80, 70);
    circle(windowWidth/2+50, windowHeight/2-80, 70);
  
    fill(0,0,0);
    circle(windowWidth/2-50, windowHeight/2-80, 30);
    circle(windowWidth/2+50, windowHeight/2-80, 30);
}
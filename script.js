//let doge;

//function preload()
//{
//   doge = loadImage("image.jpeg");
//}
//function setup() {
//    createCanvas(windowHeight, windowWidth)
//    imageMode(CENTER);
//    
//    image(doge, width/2.5, height/2);
//}

let Ephesis;
function preload() {
    Ephesis = loadFont("Ephesis.ttf");

}

function setup() {
    createCanvas(windowWidth, windowHeight)
    textFont(Ephesis, 100);
    fill(0, 0, 255);
    textStyle(ITALIC);
    textAlign(CENTER, CENTER);
    text("Hello There!", width/2, height/2);
}
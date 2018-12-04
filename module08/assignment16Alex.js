let xPos;
let yPos;
function setup() {
    // create canvas
    createCanvas(800, 500);
    // set background color
    background('#c63939');
}
function draw() {

    for (xPos = 40; xPos < width; xPos = xPos + 40) {
        for (yPos = 20; yPos < height; yPos = yPos + 100) {
            fill(xPos/4, yPos*0.5, (xPos+yPos)/20)
            ellipse(xPos, yPos, 20);
            if (yPos == 220){
                fill(255,255,0);
                ellipse(xPos, yPos, 10);
            }
        }
    }
}
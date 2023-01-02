img = "";

function preload() {
    img = loadImage("laptop.jpg");
}

function setup() {
    canvas = createCanvas(640,420);
    canvas.center();
}

function draw() {
    image(img,0,0,640,420);
    fill("lightgreen");
    text("Laptop",45,25);
    noFill();
    stroke("lightgreen");
    rect(30,05,555,395);
}
img = "";
status = "";

function preload() {
    img = loadImage("forest.jpg");
}

function setup() {
    canvas = createCanvas(640, 456);
    canvas.position(450, 250);

    cocossd = ml5.objectDetector("cocossd", modelLoaded);
    document.getElementById("status").innerHTML = "Status: Detecting Objects";
}

function draw() {
    image(img, 0, 0, 640, 456)
}

function modelLoaded() {
    console.log("COCO SSD initialized");
    status = true;
    cocossd.detect(img, gotResults);
}

function gotResults(error, results) {
    if(error) {
        console.error(error)
    }

    console.log(results);
}
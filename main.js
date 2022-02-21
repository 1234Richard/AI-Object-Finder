status = "";

function setup() {
    canvas = createCanvas(500, 450);
    canvas.position(500, );300
    video = createCapture(VIDEO);
    video.size(500, 450)
    video.hide();
}

function start() {
    objectDetector = ml5.objectDetector("cocossd", modelLoaded);
    document.getElementById("status").innerHTML = "Status: Detecting Objects";
    object_name = document.getElementById("object_name").value;
}

function modelLoaded() {
    console.log("Model loaded!");
    status = true;
}

function draw() {
    image(video, 0, 0, 500, 450);
}
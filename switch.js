s = "";

function preload() {
    loadImage("IMG_20211018_133849.jpg");
}

function setup() {
    canvas = createCanvas(380, 380);
    canvas.position(430, 200);
    od = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status: Dectecting Object";
}

function modelLoaded() {
    console.log("Model Loaded");
    s = true;
}

function gotResult(error, result) {
    if(error){
        console.log(error);
    }
    else{
        console.log(result);
        objects = result;
    }
}
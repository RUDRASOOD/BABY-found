song = "";
status1 = "";
objects = [];


function setup() {
    canvas = createCanvas(380, 380)
    canvas.center();
    video = createCapture(VIDEO);
    video.size(380,380);
    video.hide();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById
}
function preload() {
    song = loadImage('old_telephone.mp3');
}

function draw() {
    image(video, 0, 0, 380, 380);
   
    if(status1 != "")
    {
        r = random(255);
        g = random(255);
        b = random(255);
        objectDetector.detect(video, gotResults);
for (i = 0; i < objects.length; i++)
{
    document.getElementById("status").innerHTML = "Status : object detected";

    fill(r,g,b);
    percent = floor(objects[i].confidence * 100);
    text(objects[i].label + " " + percent + "%", objects[i].x + 15, objects[i].y + 15);
    noFill();
    stroke(r,g,b);
    rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
if(objects[i] == "person") 
{
    document.getElementById("number_of_objects").innerHTML = "BABY FOUND!";
}
if(objects[i] != "person")
{
    document.getElementById("number_of_objects").innerHTML = "BABY NOT FOUND!";
    song.play();

}

 
}
    }
}

function modelLoaded() {
    console.log("Model Loaded!")
    status1 = true;
  
}

function gotResults(error, results) {
    if (error) {
        console.log(error);
    }
    console.log(results);
    objects = results;
}


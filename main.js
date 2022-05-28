function preload(){

}
function setup(){
    canvas = createCanvas(500,350);
    canvas.position(410,300);
    video = createCapture(VIDEO);
    video.hide();
}
function take_snapshot(){
    save("intro-to-p5.jpg");
    image(video,0,0,200,200);
}
function draw(){
    fill(255,0,0);
    stroke(255,0,0);
    circle(0,0,30);
    circle(500,0,30);
    circle(0,350,30);
    circle(500,350,30);
}
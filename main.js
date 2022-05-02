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
    image(video,0,0,500,350);
}

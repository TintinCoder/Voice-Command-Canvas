var draw_circle = false;
var draw_rectangle = false;
var draw_triangle = false;
var x = 0;
var y = 0;
var canvas;

var SpeechRecognition = window.webkitSpeechRecognition;

var recognition = new SpeechRecognition();

function start(){
    document.getElementById('status').innerHTML = `System is listening. Please speak`;
    recognition.start();
}

recognition.onresult = event => {
    console.log(event);

    let content = event.results[0][0].transcript;
    console.log(content);

    document.getElementById('status').innerHTML = `Shape recognised. Drawing a ${content}`;
    if(content == "circle") {
        x = Math.floor(Math.random() * 900);
        y = Math.floor(Math.random() * 600);
        document.getElementById('status').innerHTML = "Started drawing a circle";
        draw_circle = true;
    }
    if(content == "rectangle") {
        x = Math.floor(Math.random() * 900);
        y = Math.floor(Math.random() * 600);
        document.getElementById('status').innerHTML = "Started drawing a rectangle";
        draw_rectangle = true;
    }
    if(content == "Triangle") {
        x = Math.floor(Math.random() * 900);
        y = Math.floor(Math.random() * 600);
        document.getElementById('status').innerHTML = "Started drawing a triangle";
        draw_triangle = true;
    }
}

function setup(){
    canvas = createCanvas(900, 600);
}

function draw () {
    if(draw_circle){
        var radius = Math.floor(Math.random() * 100);
        circle(x, y, radius)
        document.getElementById('status').innerHTML = 'Circle is drawn !!!!';
        draw_circle = false;
    }
    if(draw_rectangle){
        var width = Math.floor(Math.random() * 240);
        var height = Math.floor(Math.random() * 120);
        rect(x, y, width, height)
        document.getElementById('status').innerHTML = 'Rectangle is drawn !!!!';
        draw_rectangle = false;
    }
    if(draw_triangle){
        triangle(30, 75, 58, 20, 86, 75)
        document.getElementById('status').innerHTML = 'Triangle is drawn !!!!';
        draw_triangle = false;
    }
    
}
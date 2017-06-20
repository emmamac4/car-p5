//let's build some functions in p5.js

//functions are essentionally actions -- they make stuff happen


//defined a setup function

function setup(){
    // call the create canvas and background functions
    //numbers -- data type that is a number (width, length) (color)
    createCanvas(800,600)
    background(150)
}

// variables in JS are created using the var keyword
// variables contain values
// assign values to variables with the equal sign
var position = 100
var speed = 8

//goal is to animate the tron bike
function draw(){
    clear()
    background(150)
    fill(255)
    rect(position, 100, 150, 60, 20)
      // string -- data type that is a series of characters
    fill("dodgerblue")
    ellipse(position, 150, 75, 75)
    ellipse(position+150, 150, 75, 75)
    
     position = position + speed
    
    // Conditional -- allows your program to make decisions
    if (position > 800){
        speed = speed * -1
    }
    if (position < 0){
        speed = speed * -1
    }
    
    fill(0)
    textSize(40)
    //concatenate - to chain together - when you want to take one string and put something onto the string
    text("position: " + position, 30, 30)
    text("speed: " + speed, 60, 60)
    
}
// setup() is called once at page-load
function setup() {
    createCanvas(1000,600); // make an HTML canvas element width x height pixels
}

// draw() is called 60 times per second
function draw() {
    let hr = hour(); //0-23 
    let min = minute(); //0-59
    let sec = second(); //0-59
    let hourString = "thisisexactlytwentyfour!";
    let secondString = "excited_to_learn_data_viz_and_build_clear_visual_stories_now"; 
    let minuteString = "hi_professor_excited_to_join_class_and_learn_together_thanks";

    /*
    background(225);
    textSize(15);
    fill(180);
    text(hr, 10, 30);
    fill(100);
    text(min, 10, 60);
    fill(0);
    text(sec, 10, 90);*/
    textFont("monospace");

    // seconds
    textSize(20);
    for (let i = 0; i < secondString.length; i++) {
        if (secondString[i] === " ") {
            continue;
        }

        if (i < sec) {
        fill(0); // black
        } else {
        fill(160); // gray
        }

        text(secondString[i], 20 + i * textWidth(secondString[i]), 300);
    }

    // minutes
    for (let i = 0; i < minuteString.length; i++) {
        if (minuteString[i] === " ") {
            continue;
        }

        if (i < min) {
        fill(0); // black
        } else {
        fill(160); // gray
        }

        text(minuteString[i], 20 + i * textWidth(minuteString[i]), 250);
    }

    // hour
    textSize(30);
    for (let i = 0; i < hourString.length; i++) {
        if (hourString[i] === " ") {
            continue;
        }

        if (i < hr) {
        fill(0); // black
        } else {
        fill(160); // gray
        }

        text(hourString[i], 20 + i * textWidth(hourString[i]), 200);
    }
    
    



}
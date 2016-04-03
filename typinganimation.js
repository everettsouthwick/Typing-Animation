//-----=[DO NOT TOUCH THESE VARIABLES]=-----
var captionLength = 0;
var newCaption = '';
var i = 0;

//-----=[MODIFY THESE VARIABLES]=-----
var targetElement = "#caption"; //The target element on the page where the content will be displayed and updated. MUST follow CSS syntax (# for ids, . for classes).
var captions = ["Cycle 1", "Cycle 2", "Cycle 3"]; //Content array that will be typed to the screen.
var cursorSpeed = 750; //How fast the cursor blinks, in ms.
var eraseSpeed = 50; //How fast each character is erased from the caption, in ms.
var typeSpeed = 100; //How fast each character is typed into the caption, in ms.
var timeBetweenCycle = 750; //How long in between each new word cycle, in ms.
var timeBetweenErase = 1500; //How long in between each erase cycle, in ms.

$(function () {
    setInterval('cursorAnimation()', cursorSpeed);
    currentCaption = $(targetElement);
    cycle();
});

function cycle() {
    newCaption = captions[i];
    if (i === (captions.length - 1)) {
        i = 0;
    }
    else {
        i++;
    }
    type();
}

function type() {
    currentCaption.html(newCaption.substr(0, captionLength++));
    if (captionLength < newCaption.length + 1) {
        setTimeout('type()', typeSpeed);
    } else {
        captionLength = 0;
        newCaption = '';
        setTimeout('eraseEffect()', 750)
    }

}

function eraseEffect() {
    newCaption = currentCaption.html();
    captionLength = newCaption.length;
    if (captionLength > 0) {
        erase();
    } else {
        setTimeout('eraseEffect()', 1500);
    }
}

function erase() {
    currentCaption.html(newCaption.substr(0, captionLength--));
    if (captionLength >= 0) {
        setTimeout('erase()', eraseSpeed);
    } else {
        captionLength = 0;
        newCaption = '';
        setTimeout('cycle()', timeBetweenCycle);
    }
}

function cursorAnimation() {
    $('#cursor').animate({
        opacity: 0
    }, 'fast', 'swing').animate({
        opacity: 1
    }, 'fast', 'swing');
}
// ***### ALL JS SLIDESHOW ###***###
// make the main container div
var slidesDiv = document.createElement('div');
// style the div
slidesDiv.style.backgroundColor = "#CCC";
slidesDiv.style.width = "90%";
slidesDiv.style.minWidth = "800px";
slidesDiv.style.margin = "20px auto";
slidesDiv.style.border = "3px solid #999";
slidesDiv.style.borderRadius = "30px";
slidesDiv.style.padding = "30px";
slidesDiv.style.height = "620px";
slidesDiv.addEventListener('click', setRandomColor);
document.body.appendChild(slidesDiv); // output div to body

// make the big pic div
var bigPicDiv = document.createElement('div');
// style the div
bigPicDiv.style.backgroundColor = "#999";
bigPicDiv.style.width = "74%";
bigPicDiv.style.float = "left";
bigPicDiv.style.border = "2px solid #777";
bigPicDiv.style.borderRadius = "20px";
bigPicDiv.style.padding = "1%";
bigPicDiv.style.height = "540px";
bigPicDiv.style.marginBottom = "20px";
slidesDiv.appendChild(bigPicDiv);

// make the thumbs div
var thumbsDiv = document.createElement('div');
// style the div
thumbsDiv.style.backgroundColor = "#999";
thumbsDiv.style.width = "20%";
thumbsDiv.style.float = "right";
thumbsDiv.style.border = "2px solid #777";
thumbsDiv.style.borderRadius = "20px";
thumbsDiv.style.padding = "1%";
thumbsDiv.style.height = "540px";
thumbsDiv.style.marginLeft = "1%";
thumbsDiv.style.overflowY = "scroll";
slidesDiv.appendChild(thumbsDiv);

function setRandomColor() {
    // Math Class Random Number for Random Hex Color
    var randNum = '#' + Math.floor(Math.random()*16777215).toString(16);
    slidesDiv.style.backgroundColor = randNum;
}

// Big Pic Image
var bigPic = new Image();
bigPic.src = "images/bunny01.jpg";
bigPic.style.width = "100%";
bigPic.style.height = "auto";
bigPic.style.marginBottom = "15px";
bigPicDiv.appendChild(bigPic);

// bunny pic array
var picArr = ["bunny01.jpg", "bunny02.jpg", "bunny03.jpg", "bunny04.jpg", "bunny05.jpg", "bunny06.jpg", "bunny07.jpg", "bunny08.jpg", "bunny09.jpg", "bunny10.jpg", "bunny11.jpg", "bunny12.jpg", "bunny13.jpg"];

// Thumb Pics (13 made using a loop)
for(var i=0; i<picArr.length; i++) {
    var thumbPic = new Image();
    // store the jpg file name in a custom property
    thumbPic.picFile = picArr[i];
    thumbPic.src = "images/" + picArr[i];
    thumbPic.style.width = "100%";
    thumbPic.style.height = "auto";
    thumbPic.style.marginBottom = "10px";
    thumbPic.addEventListener('click', swapPic);
    thumbsDiv.appendChild(thumbPic);
}

function swapPic() {
    // "this" = image-object that called the function
    // swap big pic on thumb click
    bigPic.src = "images/" + this.picFile;
    bigPicDiv.appendChild(bigPic);
}
var myName = "Brian";
var msg = "Hello " + myName; // concatenation
// bottom of the slideshow interface: footer & 2 buttons
var foot = document.createElement('footer');
foot.style.clear = "both"; // get it under the 2-col layout
foot.style.width = "50%";
foot.style.fontSize = "1.25rem";
foot.style.backgroundColor = "#EEE";
foot.style.borderRadius = "10px";
foot.style.color = "#555";
foot.style.padding = "5px 0px 5px 15px";
foot.style.fontFamily = "sans-serif";
foot.style.display = "inline-block";
foot.innerHTML = "Photo Caption Goes Here";
slidesDiv.appendChild(foot);

// AUTOPLAY Button
var autoBtn = document.createElement('button');
autoBtn.style.backgroundColor = "orange";
autoBtn.style.borderRadius = "5px";
autoBtn.style.color = "white";
autoBtn.style.padding = "7px 15px";
autoBtn.style.fontFamily = "sans-serif";
autoBtn.style.letterSpacing = "2px";
autoBtn.style.fontWeight = "bold";
autoBtn.style.fontSize = "1rem";
autoBtn.style.marginLeft = "15px";
autoBtn.innerHTML = "AUTOPLAY";
autoBtn.addEventListener('click', autoInit);
slidesDiv.appendChild(autoBtn);

var showInterval; // setInterval name
// start the interval to autoplay the slideshow
function autoInit() {
    showInterval = setInterval(autoShow, 3000);
}

var j=0; // counter for the autoplay
function autoShow() {
    bigPic.src = "images/" + picArr[j];
    bigPicDiv.appendChild(bigPic);
    if(j<12) {
        j++;
    } else {
        j=0;
    }
}

// STOP Button
var stopBtn = document.createElement('button');
stopBtn.style.backgroundColor = "red";
stopBtn.style.borderRadius = "5px";
stopBtn.style.color = "white";
stopBtn.style.padding = "7px 15px";
stopBtn.style.fontFamily = "sans-serif";
stopBtn.style.letterSpacing = "2px";
stopBtn.style.fontWeight = "bold";
stopBtn.style.fontSize = "1rem";
stopBtn.style.marginLeft = "15px";
stopBtn.innerHTML = "STOP";
stopBtn.addEventListener('click', showStopper);
slidesDiv.appendChild(stopBtn);

function showStopper() {
    clearInterval(showInterval); // stop the showInterval so stop slideshow
}







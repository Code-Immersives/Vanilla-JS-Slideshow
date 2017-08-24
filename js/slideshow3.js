function Slideshow() {
    
    var slidesDiv = document.createElement('div');
    var bigPicDiv = document.createElement('div');
    var thumbsDiv = document.createElement('div');
    var footerTag = document.createElement('footer');
    var autoBtn = document.createElement('button');
    var stopBtn = document.createElement('button');
    var bigPic = new Image();
    var i = 0;
    var p = 0;
    var picArr = [];
    var picInterval; // for the autoplay interval timer

   this.init = function() {
        
        //var slideshow = document.getElementById('slideshow');
        slidesDiv.style.width = "90%";
        slidesDiv.style.minWidth = "850px";
        slidesDiv.style.backgroundColor = "#999";
        slidesDiv.style.padding = "25px";
        slidesDiv.style.height = "615px";
        slidesDiv.style.margin = "20px auto";
        slidesDiv.style.borderRadius = "30px";
        slidesDiv.style.border = "3px solid #AAA";
        slidesDiv.style.cursor = "pointer"; 
        slidesDiv.addEventListener('click', function() { // on thumb click, swap big pic
                        var randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
                        slidesDiv.style.backgroundColor = randomColor;
                     });
        document.body.appendChild(slidesDiv);

        bigPicDiv.style.width = "67%";
        bigPicDiv.style.backgroundColor = "#DDD";
        bigPicDiv.style.padding = "2%";
        bigPicDiv.style.height = "540px";
        bigPicDiv.style.float = "left";
        bigPicDiv.style.borderRadius = "20px";
        bigPicDiv.style.marginRight = "1%";
        bigPicDiv.style.border = "3px solid #AAA";
        slidesDiv.appendChild(bigPicDiv);

        thumbsDiv.style.width = "22%";
        thumbsDiv.style.backgroundColor = "#DDD";
        thumbsDiv.style.padding = "2%";
        thumbsDiv.style.height = "540px";
        thumbsDiv.style.float = "right";
        thumbsDiv.style.borderRadius = "20px";
        thumbsDiv.style.overflowY = "scroll";
        thumbsDiv.style.border = "3px solid #AAA";
        slidesDiv.appendChild(thumbsDiv);

        bigPic.src = "images/bunny01.jpg";
        bigPicDiv.appendChild(bigPic); // big pic on pg load
        bigPic.style.width = "100%";
        bigPic.style.height = "auto";
        bigPic.style.borderRadius = "10px";

        // make jpg file names
        for(i=1; i<=13; i++) { // bunny01.jpg-bunny05.jpg 
            if(i<10) { // leading zero for bunny01-bunny09
                var currPic = "bunny0" + i + ".jpg";
            } else { // no leading zero for bunny10-bunny13
                var currPic = "bunny" + i + ".jpg";
            }
            picArr.push(currPic);
            var thumbPic = new Image(); // making thumbs
            thumbPic.pic = currPic; // currPic as obj property
            thumbPic.src = "images/" + currPic; // set source
            thumbPic.id = currPic;
            thumbPic.style.width = "100%";
            thumbPic.style.height = "auto";
            thumbPic.style.marginBottom = "10px";
            thumbPic.style.borderRadius = "10px";
            thumbPic.addEventListener('click', swapPic);
            thumbsDiv.appendChild(thumbPic); // output another thumb to thumbs div
        } // end for loop
        
        autoBtn.addEventListener('click', function() { // on thumb click, swap big pic
                                                // alert("hello");
                                                picInterval = setInterval(autoplayPix, 2000);
                                               });
       autoBtn.style.width = "120px";
       autoBtn.style.fontSize = "1rem";
       autoBtn.style.padding = "3px";
       autoBtn.style.borderRadius = "5px";
       autoBtn.style.margin = "10px";
       autoBtn.style.backgroundColor = "orange";
       autoBtn.style.color = "white";
       autoBtn.innerHTML = "AUTOPLAY";
       autoBtn.style.fontFamily = "sans-serif";
       slidesDiv.appendChild(autoBtn);
       
       stopBtn.addEventListener('click', function() { // on thumb click, swap big pic
                                                alert("stop");
                                                clearInterval(picInterval); // stop the autoplay
                                                footerTag.innerHTML += " Autoplay Stopped";         
                                               });
       stopBtn.style.width = "80px";
       stopBtn.style.fontSize = "1rem";
       stopBtn.style.padding = "3px";
       stopBtn.style.borderRadius = "5px";
       stopBtn.style.margin = "10px";
       stopBtn.style.backgroundColor = "red";
       stopBtn.style.color = "white";
       stopBtn.innerHTML = "STOP";
       stopBtn.style.fontFamily = "sans-serif";
       slidesDiv.appendChild(stopBtn);
       
       footerTag.style.backgroundColor = "#EEE";
       footerTag.style.float = "left";
       footerTag.style.width = "40%";
       footerTag.style.height = "20px";
       footerTag.style.margin = "10px";
       footerTag.style.padding = "3px 20px";
       footerTag.style.borderRadius = "5px";
       footerTag.style.fontSize = "1rem";
       footerTag.style.fontWeight = "bold";
       footerTag.style.letterSpacing = "1px";
       footerTag.style.fontFamily = "sans-serif";
       footerTag.style.color = "#888";
       footerTag.innerHTML = "bunny01.jpg";
       slidesDiv.appendChild(footerTag);

   } // end init()
   
   function autoplayPix() {
       bigPic.src = "images/" + picArr[p];
       bigPicDiv.appendChild(bigPic);
       footerTag.innerHTML = " Pic " + (p+1) + ": " + picArr[p];
       var randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
       slidesDiv.style.backgroundColor = randomColor;
       if(p<12) {
           p++;
       } else {
           p=0; // reset / loop slideshow back to beginning after bunny13
       }
   }
    
    function swapPic() { // on thumb click, swap big pic
      bigPic.src = "images/" + this.pic;
      bigPicDiv.appendChild(bigPic);
      footerTag.innerHTML = this.id;
   }

} // Slideshow()


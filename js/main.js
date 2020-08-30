

function offSlider()
{
    var slider = document.getElementsByClassName('slider')[0];
    slider.style.display = "none";
}


function onSlider()
{
    var slider = document.getElementsByClassName('slider')[0];
    slider.style.display = "block";
}

function onPoints()
{
    var points = document.getElementsByClassName('points')[0];
    points.style.display  = "block";
}

function offPoints()
{
    var points = document.getElementsByClassName('points')[0];
    points.style.display = "none";
}

function onPoint()
{
    var points = document.getElementsByClassName('point');
    for(var i = 0;  i < points.length; i++) {
        let point = points[i];
            point.style.display = "block";  
    }          
}

function offPoint()
{
    var points = document.getElementsByClassName('point');
    for(var i = 0;  i < points.length; i++) {
        points[i].style.display = "none";
    }
}

window.onload = function () {

    offPoint();

    if(screen.width < 700) {
       offSlider();
       onPoints();
    }else {
        onSlider();
        offPoints();
    }

    var btn = document.getElementById('dropdown-btn');
    var btnOn = false;
    btn.onclick = function()
    {
        if(!btnOn) {
            onPoint();                
            btnOn = true;
        }else {
            offPoint();
            btnOn = false;
        }
    }


    var aboutMe  = document.getElementsByClassName('about-me-btn')[0];
    aboutMe.onclick = function(){
        location = ".about-me";
    }

    var publicatinBtn = document.getElementsByClassName('publication-btn')[0];
    publicatinBtn.onclick = function() {
        location = "#publications";
    }
}
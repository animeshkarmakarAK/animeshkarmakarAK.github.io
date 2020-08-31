

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

    if(screen.width < 450){
        var bar = document.getElementsByClassName('sidebar')[0];
        bar.style.width  = "0px";
    }
    else {
        openSidebar();
    }



    //setting up about-me accoring to the height of screen height
    // var about = document.getElementsByClassName('about-me')[0];
    // let height = screen.height + 'px';
    // about.style.height  = height;
    //

    // offPoint();

    // if(screen.width < 700) {
    //    offSlider();
    //    onPoints();
    // }else {
    //     onSlider();
    //     offPoints();
    // }

    // var btn = document.getElementById('dropdown-btn');
    // var btnOn = false;
    // btn.onclick = function()
    // {
    //     if(!btnOn) {
    //         onPoint();                
    //         btnOn = true;
    //     }else {
    //         offPoint();
    //         btnOn = false;
    //     }
    // }


    // var aboutMe  = document.getElementsByClassName('about-me-btn')[0];
    // aboutMe.onclick = function(){
    //     location = ".about-me";
    // }

    // var publicatinBtn = document.getElementsByClassName('publication-btn')[0];
    // publicatinBtn.onclick = function() {
    //     location = "#publications";
    // }
}

var resume_showing = false;
function showResume()
{
    if(!resume_showing) {
        var resume = document.getElementsByClassName('resume')[0];
        resume.style.display = "block";

        var info = document.getElementsByClassName('info')[0];
        info.style.display = "none";

        resume_showing =true;
    }
    else {
        var resume = document.getElementsByClassName('resume')[0];
        resume.style.display = "none";

        var info = document.getElementsByClassName('info')[0];
        info.style.display = "block";

        resume_showing =false;

    }

}

function iframeSet()
{
    var frame = document.getElementsByTagName('iframe')[0];
    var width = screen.width + 'px';
    var height = screen.height + 'px';

    frame.style.width  = width;
    frame.style.height = height;
}

var open_sidebar = false;

function openSidebar()
{
    var bar = document.getElementsByClassName('sidebar')[0];
    var mainContent = document.getElementsByClassName('main-content')[0];
    var btn = document.getElementsByClassName('sidebar-toggle-button')[0];


    if(open_sidebar)
    {
        bar.style.width = "0px";
        open_sidebar = false;
        mainContent.style.marginLeft = "0px";

        btn.innerHTML = "&#9776; Open Sidebar";
    }
    else {
        bar.style.width = "15vw";
        mainContent.style.marginLeft = "14vw";
        open_sidebar = true;        
        btn.innerHTML  = "&#9776;  Close Sidebar";
    }
}

function openSidebarForSmallScreen()
{
    var bar = document.getElementsByClassName('sidebar')[0];
    var mainContent = document.getElementsByClassName('main-content')[0];
    var btn = document.getElementsByClassName('sidebar-toggle-button')[0];

    if(open_sidebar)
    {
        bar.style.width = "0px";
        open_sidebar = false;
        // mainContent.style.marginLeft = "0px";
        btn.style.marginLeft = "0vw";
        btn.innerHTML = "&#9776;  Open Sidebar";
    }
    else {
        bar.style.width = "40vw";
        // mainContent.style.marginLeft = "30vw";
        btn.style.marginLeft = "40vw";
        btn.innerHTML = "&#9776;  Close Sidebar";
        open_sidebar = true;        
    }   
}

function showSidebar()
{
    if(screen.width > 450) {
        openSidebar();
    }
    else {

        openSidebarForSmallScreen();

    }
}


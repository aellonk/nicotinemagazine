var slideIndex = 0;
carousel();

function carousel() {
    var i;
    var x = document.getElementsByClassName("Slideshow");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none"; 
    }
    slideIndex++;
    if (slideIndex > x.length) {slideIndex = 1} 
    x[slideIndex-1].style.display = "block"; 
    setTimeout(carousel, 1700); // Change image every 1.7 second
}

 
 // handle links with @href started with '#' only
$(document).on('click', 'a[href^="#"]', function(e) {
    // target element id
    var id = $(this).attr('href');

    // target element
    var $id = $(id);
    if ($id.length === 0) {
        return;
    }

    // prevent standard hash navigation (avoid blinking in IE)
    e.preventDefault();

});

setTimeout(fade_out, 120000);

function fade_out() {
  $("#hint").fadeOut().empty();
}

//------------------
function myFunction() {
    var x = document.createElement("VIDEO");

    if (x.canPlayType("video/mp4")) {
        x.setAttribute("src","issue17/nicotine17_page41.mov");
    } else {
        alert("Your browser does not support this video tag.");
    }

    x.setAttribute("width", "320");
    x.setAttribute("height", "240");
    x.setAttribute("controls", "autoplay");
    x.setAttribute("controls", "loop");
    document.body.appendChild(x);
}
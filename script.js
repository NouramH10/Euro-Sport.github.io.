document.getElementById('hsports').addEventListener('click', function() {
    document.getElementById('sidebar').style.width = '250px';
    document.getElementById('overlay').style.visibility = 'visible';
    document.getElementById('overlay').style.opacity = '1';
});

document.getElementById('overlay').addEventListener('click', function() {
    document.getElementById('sidebar').style.width = '0';
    document.getElementById('overlay').style.opacity = '0';
    setTimeout(function() {
        document.getElementById('overlay').style.visibility = 'hidden';
    }, 500);
});

$(document).ready(function() {
    // Smooth scrolling for all links
    $("a").on('click', function(event) {
      if (this.hash !== "") {
        event.preventDefault();
        var hash = this.hash;
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 800, function(){
          window.location.hash = hash;
        });
      }
    });
  });

  // Add a click event listener to all sidebar links
  $(document).ready(function() {
    // Close offcanvas menu when a nav-link is clicked
    $('.offcanvas-body .nav-link').on('click', function() {
      $('#offcanvasDarkNavbar').offcanvas('hide'); // Bootstrap 5 way of hiding offcanvas
    });
  });

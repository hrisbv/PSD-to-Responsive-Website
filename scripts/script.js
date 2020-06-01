var x = document.querySelector('.menu');
document.querySelector('#chk').addEventListener('click', function () {
    x.classList.remove('closed');
    x.classList.add('open');
  });

  document.querySelector('.close').addEventListener('click', function () {
    x.classList.add('closed');
    x.classList.remove('open');
  });
  
document.querySelectorAll('.main_nav_link').forEach(link => {
    link.addEventListener("click", function(){
        x.classList.remove('open');
        x.classList.add('closed');
    });
  });

  $(document).ready(function(){
  // Add smooth scrolling to all links
  $(".main_nav_link").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});
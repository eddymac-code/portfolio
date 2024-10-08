$('a[href*="#"]')
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      
      if (target.length) {
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        },
        1000
        );
      }
    }
  });

  /* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
function lilMenu() {
  var x = document.getElementById("nav");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

let today = new Date()
let currentYear = today.getFullYear()
let dateSpan = document.querySelector('#date')
dateSpan.textContent = currentYear
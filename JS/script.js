const toggleButton = document.getElementsByClassName('navbar-toggle')[0];
const navbarLinks = document.getElementsByClassName('navbar-links');
toggleButton.addEventListener('click', function(){
    for(var i= 0; i<navbarLinks.length; i++)
    navbarLinks[i].classList.toggle('active')
})


$('#navbar a, .nav a').on('click', function(event) {
    if (this.hash !== '') {
      event.preventDefault();
  
      const hash = this.hash;
  
      $('html, body').animate(
        {
          scrollTop: $(hash).offset().top - 100
        },
        1000
      );
    }
  });
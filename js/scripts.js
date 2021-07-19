$(document).ready(function () {
  var form = document.getElementById("my-form");
async function handleSubmit(event) {
  event.preventDefault();
  var status = document.getElementById("status");
  var data = new FormData(event.target);
  fetch(event.target.action, {
    method: form.method,
    body: data,
    headers: {
      'Accept': 'application/json' 
    }
  }).then(response => {
    status.classList.add('success');
    status.innerHTML = "Thanks for your submission!";
    form.reset()
  }).catch(error => {
    status.classList.add('error');
    status.innerHTML = "Oops! There was a problem submitting your form"
  }); 
}
/* script for running fade in animation*/
window.sr = ScrollReveal();
      sr.reveal(".anim",{ easing:'ease-in', delay: 500});

      var form = document.getElementById('formData');
      form.addEventListener("submit", handleSubmit)
  $(window).scroll(function () {
    if (this.scrollY > 20) {
      $(".navbar").addClass("sticky");
      $(".goTop").fadeIn();
    } else { 
      $(".navbar").removeClass("sticky");
      $(".goTop").fadeOut();
    }
  });

  $(".goTop").click(function () {
    scroll(0, 0);
  });

  $(".menu-toggle").click(function () {
    $(this).toggleClass("active");
    $(".navbar-menu").toggleClass("active");
  });

  $(".products").magnificPopup({
    delegate: "a",
    type: "image",
    gallery: { enabled: true },
  });
});





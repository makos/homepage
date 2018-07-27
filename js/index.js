$(document).ready(function() {
  $(this).scrollTop(0);

  $(document).on("click", "a[href^='#']", function (e) {
    e.preventDefault();

    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 750);
  });
});

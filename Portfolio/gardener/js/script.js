$( ".j-cta" ).click(function() {
  if($(this).hasClass('active')){
    $(this).removeClass('active');
    $(this).next().fadeOut( "fast", function() {});
  } else {
    $(this).addClass('active');
    $(this).next().fadeIn( "fast", function() {});
  }
});


$('.j-about_slider').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    autoplay: true,
    autoplayTimeout: 3000
});


$(document).on('click', 'a[href^="#"]', function (event) {
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 500);
});


$(".btn-nav").on("click", function() {
		var target = $(this).data("target");
        $(this).children().toggleClass("m-active");
		$(target).toggleClass("nav__list--open");
	});

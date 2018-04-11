$(document).ready(function() {

	$('.main_btn').on('click', function() {
		$('.overlay').fadeToggle('slow');
	 $('.modal').slideDown();
	});

	$('.main_btna').on('click', function() {
		$('.overlay').fadeToggle('slow');
	 $('.modal').slideDown();
	});

	$('.main_nav>nav>ul>li:eq(1)>a').on('click', function() {
		$('.overlay').fadeToggle('slow');
	 $('.modal').slideDown();
	});
	$('.close').on('click', function() {
		$('.overlay').fadeToggle('slow');
	 $('.modal').slideUp();
	});

$('form').submit(function(event){
      event.preventDefault();
      $.ajax({
    type: "POST",
    url: "server.php",
    data: $(this).serialize()
        }).done(function() {
          	$('.overlay').fadeToggle('slow');
           $('.modal').slideUp();
          
        }).fail(function() {
          	$('.overlay').fadeToggle('slow');
           $('.modal').slideUp();
        });
        $("form").trigger("reset");
    });

})
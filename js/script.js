function myFunction() {
    document.getElementsByClassName("topnav")[0].classList.toggle("responsive");
}

//jquery code that applys and removes class to navigtion menu for color change
$(document).ready(function () {
	$(function () {
		$('#navbar li a').click(function (e) {
			$('a').removeClass('active');
			$(this).addClass('active');
		});
	});
});

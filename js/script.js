$(document).ready(function(){
"use strict";
	$(".comment-area").hide();
	$(".add-comment").click(function(){
		$(".comment-area").slideToggle("slow");
	});
	$(".pull-left .navbar-toggle").click(function(){
		$(".row-offcanvas-left").toggleClass("active");
	})
});
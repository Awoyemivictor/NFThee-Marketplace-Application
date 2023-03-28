
$(window).on('scroll', function () {
	var scroll = $(window).scrollTop();
	if (scroll < 25) {
		$("#sticky-header").removeClass("sticky-menu fadeInDown");

	} else {
		$("#sticky-header").addClass("sticky-menu fadeInDown");
	}
});

$('.partner-area-slider').slick({
	infinite: true,
	slidesToShow: 1,
	slidesToScroll: 1,
	dots: true,
	arrows: true,
	cssEase: 'linear',
	adaptiveHeight: true,
	prevArrow: '<button class="slide-arrow prev-arrow"><i class="ri-arrow-left-s-line"></i></button>',
	nextArrow: '<button class="slide-arrow next-arrow"><i class="ri-arrow-right-s-line"></i></button>',
	responsive: [{
		breakpoint: 1124,
		settings: {
			slidesToShow: 2,
			slidesToScroll: 1,
		}
	},
	{
		breakpoint: 868,
		settings: {
			slidesToShow: 2,
			slidesToScroll: 1,
		}
	},
	{
		breakpoint: 576,
		settings: {
			slidesToShow: 1,
			slidesToScroll: 1,
			dots: true,
			arrows: false,
		}
	}
	]
});

//nice-select
$(document).ready(function () {
	$('select').niceSelect();
});

//timer
function makeTimer() {
	var endTime = new Date("13 April 2023 9:56:00 GMT+01:00");
	endTime = (Date.parse(endTime) / 1000);
	var now = new Date();
	now = (Date.parse(now) / 1000);
	var timeLeft = endTime - now;
	var days = Math.floor(timeLeft / 86400);
	var hours = Math.floor((timeLeft - (days * 86400)) / 3600);
	var minutes = Math.floor((timeLeft - (days * 86400) - (hours * 3600)) / 60);
	var seconds = Math.floor((timeLeft - (days * 86400) - (hours * 3600) - (minutes * 60)));

	if (hours < "10") { hours = "0" + hours; }
	if (minutes < "10") { minutes = "0" + minutes; }
	if (seconds < "10") { seconds = "0" + seconds; }

	$(".days").html(days + "<span></span>");
	$(".hours").html(hours + "<span></span>");
	$(".minutes").html(minutes + "<span></span>");
	$(".seconds").html(seconds + "<span></span>");
}
setInterval(function () { makeTimer(); }, 1000);

//range-slider
var sliderrange = $('#slider-range');
var amountprice = $('#amount');
$(function () {
	sliderrange.slider({
		range: true,
		min: 16,

		max: 400,
		values: [0, 300],
		slide: function (event, ui) {
			amountprice.val("$" + ui.values[0] + " - $" + ui.values[1]);
		}
	});
	amountprice.val("$" + sliderrange.slider("values", 0) +
		" - $" + sliderrange.slider("values", 1));
});



(function ($, Drupal) {
	Drupal.behaviors.mySlick = {
		attach: function (context, settings) {
			$('#slick-homepage-thumbnail-slider').on('init', function (e, slickThumbs) {
				slickThumbs.setOption('slidesToShow', 3, true);
			});
		}
	};

})(jQuery, Drupal);

var options = {
	series: [{
		name: 'series1',
		data: [31, 40, 250, 500, 42, 109, 100]
	}],
	chart: {
		height: 240,
		type: 'area',
		toolbar: {
			show: false
		},
	},
	dataLabels: {
		enabled: false
	},
	stroke: {
		curve: 'smooth'
	},
	xaxis: {
		type: 'days',
		categories: ["M", "T", "W", "T", "F", "S", "S"]
	},
	grid: {
		show: false,
	}
};

var chart = new ApexCharts(document.querySelector("#chart"), options);
chart.render();


var options = {
	series: [{
		name: 'series1',
		data: [31, 40, 30, 50, 42, 109, 100]
	}],
	chart: {
		height: 240,
		type: 'area',
		toolbar: {
			show: false
		},
	},
	dataLabels: {
		enabled: false
	},
	stroke: {
		curve: 'smooth'
	},
	xaxis: {
		type: 'days',
		categories: ["M", "T", "W", "T", "F", "S", "S"]
	},
	grid: {
		show: false,
	}
};



var chart = new ApexCharts(document.querySelector("#chart2"), options);
chart.render();

$('.explore-collection-slider').slick({
	infinite: true,
	slidesToShow: 4,
	slidesToScroll: 1,
	dots: false,
	arrows: true,
	cssEase: 'linear',
	adaptiveHeight: true,
	prevArrow: '<button class="slide-arrow prev-arrow"><i class="ri-arrow-left-s-line"></i></button>',
	nextArrow: '<button class="slide-arrow next-arrow"><i class="ri-arrow-right-s-line"></i></button>',
	responsive: [{
		breakpoint: 1124,
		settings: {
			slidesToShow: 2,
			slidesToScroll: 1,
		}
	},
	{
		breakpoint: 868,
		settings: {
			slidesToShow: 2,
			slidesToScroll: 1,
		}
	},
	{
		breakpoint: 576,
		settings: {
			slidesToShow: 1,
			slidesToScroll: 1,
			dots: false,
			arrows: false,
		}
	},
	{
		breakpoint: 320,
		settings: {
			slidesToShow: 1,
			slidesToScroll: 1,
			dots: false,
			arrows: false,
		}
	}
	]
});

$(".panel-set h5").on("click", function () {
	if ($(this).hasClass("active")) {
		$(this).removeClass("active");
		$(this)
			.siblings(".panel-content")
			.slideUp(200);
		$(".panel-set  a i")
			.removeClass("bx-minus")
			.addClass("bx-plus");
	} else {
		$(".panel-set  a i")
			.removeClass("bx-minus")
			.addClass("bx-plus");
		$(this)
			.find("i")
			.removeClass("bx-plus")
			.addClass("bx-minus");
		$(".panel-set  a").removeClass("active");
		$(this).addClass("active");
		$(".panel-content").slideUp(200);
		$(this)
			.siblings(".panel-content")
			.slideDown(200);
	}
	return false
});

//follow-btn
$('.followBtn').click(function () {
	$(this).text(function (_, text) {
		return text === "Follow +" ? "Following" : "Follow +";
	});
	if ($(this).text() == "Follow +") {
		$(this).removeClass('Following');
	} else if ($(this).text() == "Following") {
		$(this).addClass('Following');
	}
});

//toggle-graph
function openGraph(divId) {
	$("#" + divId).toggle();
}
$(".graph-icon img").click(function () {
	$(this).toggleClass("btnColor-pink");
});

//like-button
$('.likeBtn').click(function () {
	$(this).find('i').toggleClass('ri-heart-line ri-heart-fill')
});

//wallet-toggle
$('.wallet-ethereum').click(function () {
	$('.solana-wallet-list').hide();
	$('.ethereum-wallet-list').show();
});

$('.wallet-solano').click(function () {
	$('.ethereum-wallet-list').hide();
	$('.solana-wallet-list').show();
});

//home-page-slider
var index = 0;
var slides = document.querySelectorAll(".slides");
var slides1 = document.querySelectorAll(".slides1");
var slides2 = document.querySelectorAll(".slides2");
var slides3 = document.querySelectorAll(".slides3");
var slides4 = document.querySelectorAll(".slides4");
var dot = document.querySelectorAll(".dot");
// function changeSlide(){
//   if(index<0){
//   index = slides.length-1;
//   index = slides1.length-1;
//   index = slides2.length-1;
//   index = slides3.length-1;
//   index = slides4.length-1;
//   }
//   if(index>slides.length-1 && index>slides1.length-1 && index>slides2.length-1 && index>slides3.length-1 && index>slides4.length-1){
//     index = 0;
//   }
//   for(let i=0;i<slides.length;i++ && i<slides1.length && i<slides2.length && i<slides3.length && i<slides4.length){
//     slides[i].style.display = "none";
// 	 slides1[i].style.display = "none";
// 	 slides2[i].style.display = "none";
// 	 slides3[i].style.display = "none";
//     slides4[i].style.display = "none";
//     dot[i].classList.remove("dot-active");
//   }
//     slides[index].style.display= "block";
//     slides1[index].style.display= "block";
//     slides2[index].style.display= "block";
//     slides3[index].style.display= "block";
//     slides4[index].style.display= "block";
//     dot[index].classList.add("dot-active");
//   index++;
//   setTimeout(changeSlide,4000);
// }
// changeSlide();

var h = $(window).height();
var counter = 0;
//Aнимации
$(window).scroll(function(){
		if ( ($(this).scrollTop()+h) >= $("#features__icons").offset().top) 
            {
             setTimeout(function()
                {
                    $("#bounce__left__up").css({visibility:"visible"});
                    $("#bounce__right__up").css({visibility:"visible"});
                    $("#bounce__up").css({visibility:"visible"});
                    $("#bounce__left__up").delay(1000).eq(0).addClass('animated bounceInLeft');
                    $("#bounce__right__up").eq(0).delay(1000).addClass('animated bounceInRight');
                    $("#bounce__up").eq(0).delay(1000).addClass('animated bounceInDown');		
		        },1000);
            }
        if ( ($(this).scrollTop()+h) >= $("#materials__fadeIn").offset().top) 
            {
             setTimeout(function()
                {
                    $("#fadeIn").css({visibility:"visible"});
                    $("#fadeIn").eq(0).delay(1000).addClass('animated fadeIn');		
		        },1000);
            }
        if ( ($(this).scrollTop()+h) >= $(".our__price").offset().top) 
            {
             setTimeout(function()
                {
                    $("#bounce__left__up2").css({visibility:"visible"});
                    $("#bounce__left__up2").eq(0).delay(1000).addClass('animated bounceInRight');
                    $("#tada").eq(0).delay(2000).addClass("animated tada");
		        },1000);
            }
});

//Скролл до нужного якоря (меню)
$('a[href^="#"]').click(function(){
//Сохраняем значение атрибута href в переменной:
var target = $(this).attr('href');
$('html, body').animate({scrollTop: $(target).offset().top}, 800);
return false;
});

//Модальное окно
$('.modal-block-open').click(function(){
    event.preventDefault();
    $('.popup__float').fadeIn(1000);
});
$(".popup__close").click(function(){
    event.preventDefault();
    $('.popup__float').fadeOut(1000);
});

//Аякс формы
$(document).ready(function() {

	$("#popup__form").submit(function() {
		$.ajax({
			type: "POST",
			url: "js/send.php",
			data: $(this).serialize()
		}).done(function() {
			$(this).find("input").val("");
			alert("Спасибо за заявку! Скоро мы с вами свяжемся.");
			$("#popup__form").trigger("reset");
		});
		return false;
	});
	
});

$(document).ready(function(){
    $('.slider__left').click(function(){
        event.preventDefault();
        $('.slider__body').eq(0).delay(1000).addClass('animated fadeIn');		
    });
});

//Слайдер
$(document).ready(function(){
    $(".slider__right").click(function(){
        counter = ++counter;
        if (counter == 1)
        {
            $("#slide1").fadeOut(1500);
            $("#slide1").css({display:"none"});
            $("#slide2").fadeIn(1500);
            $("#slide2").css({display:"block"});
        }
        if (counter == 2)
        {
            $("#slide2").fadeOut(1500);
            $("#slide2").css({display:"none"});
            $("#slide3").fadeIn(1500);
            $("#slide3").css({display:"block"});
            $(".slider__right").css({opacity:"0.5"});
        }
    });
    
    
});
$(document).ready(function(){
    $(".slider__left").click(function(){
        counter = --counter;
        if (counter == 1)
        {
            $("#slide3").fadeOut(1500);
            $("#slide3").css({display:"none"});
            $("#slide2").fadeIn(1500);
            $("#slide2").css({display:"block"});
            $(".slider__right").css({opacity:"1"});
        }
        if (counter == 0)
        {
            $("#slide2").fadeOut(1500);
            $("#slide2").css({display:"none"});
            $("#slide1").fadeIn(1500);
            $("#slide1").css({display:"block"});
            $(".slider__left").css({opacity:"0.5"});
        }
    });
    
    
});

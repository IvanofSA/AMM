;(function(){
  $(document).ready(function(){

  $('.filter').mixItUp();


  $(".toggle_mnu").click(function() {
      $(".sandwich").toggleClass("active");
  });

  $(".top_mnu ul a").click(function() {
      $(".top_mnu").fadeOut(600);
      $(".sandwich").toggleClass("active");
      $(".top_text").css("opacity", "1");
  }).append("<span>");

  $(".toggle_mnu").click(function() {
      if ($(".top_mnu").is(":visible")) {
          $(".top_text").css("opacity", "1");
          $(".top_mnu").fadeOut(600);
          $(".top_mnu li a").removeClass("fadeInUp animated");
      } else {
          $(".top_text").css("opacity", ".1");
          $(".top_mnu").fadeIn(600);
          $(".top_mnu li a").addClass("fadeInUp animated");
      };
  });

  $('.carusel').slick({
    dots: true,
    arrows: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 4000
  });

	$('.gallery__list').magnificPopup({
		delegate: 'a',
		type: 'image',
		tLoading: 'Loading image #%curr%...',
		mainClass: 'mfp-img-mobile',
    fixedBgPos: false,
		gallery: {
			enabled: true,
			navigateByImgClick: true,
			preload: [0,1]
		},
    zoom: {
    enabled: true,
    duration: 300,
    easing: 'ease-in-out',
    opener: function(openerElement) {
      return openerElement.is('img') ? openerElement : openerElement.find('img');
    }
    },
		image: {
			tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
			titleSrc: function(item) {
				return item.el.attr('title') + '<small>Наши лендинги</small>';
			}
		}
	});

  var saleMe = (function () {

  var init = function () {
      _setUpListners();
      // то, что должно произойти сразу
      };
  var _setUpListners = function () {
  $('.sendForm').on('submit', _submitForm);
      };

  var _submitForm = function (ev) {
    ev.preventDefault();

    var form = $(this),
        url = 'mail.php',
        defObj = _ajaxForm(form, url);
  };

  var _ajaxForm = function (form, url) {
    var popup = $('.popup');
    if (!validation.validateForm(form)){
      return false;
    } else {
      $.ajax({
        type: "POST",
        url: url, //Change
        data: form.serialize()
      }).done(function() {
        $('.popup').css('background-color', '#7ee689');
        setTimeout(function() {
          // Done Functions
          popup.css('background-color', '#fff');
          form.trigger("reset");
        }, 1000);
      });
      return true;
    }
  };
  return {
    init: init
  };
  })();

  saleMe.init();



var validation = (function () {

  var init = function () {
	    _setUpListners();
	    // то, что должно произойти сразу
  	  };

  var _setUpListners = function () {
  	//чистим поля от ошибок
  	 $('form').on('keydown', '.has-error', _removeError);
    $('form').on('reset', _clearForm);
    };

  var _removeError = function () {

  	$(this).removeClass('has-error');
  	$(this).find('.inp').removeClass('has-error');

  };
  var _clearForm = function (form) {
  	var form = $(this);
  	form.find('input, textarea').trigger('hideTooltip');
  	form.find('.has-error').removeClass('has-error');
  };

 var validateForm = function (form) {

 	var elements = form.find('input, textarea').not('input[type="file"], input[type="hidden"]'),
 	    valid = true;
 	    //пройдемся по всем эелемантам формы
 	 $.each(elements, function (index, val) {
 	 	var element = $(val),
 	 	    val = element.val(),
 	 	    pos = element.attr('qtip-position');

 	 	if (val.length === 0) {
 	 		//красный фон
 	 	  element.addClass('has-error');
     // _createQtip(element, pos);
 	 	 valid = false;
 	 	}

 	 });

 	 return valid;
 };

  return {
	  init: init,
	  validateForm: validateForm

  };

})();

validation.init();

$(".inp__phone").mask("+7 (999) 999-9999");

$('.up__scroll').click(function() {
  $('html, body').animate({scrollTop: 0},500);
  return false;
})

$(".nav__list").on("click","a", function (event) {

  event.preventDefault();

  var id  = $(this).attr('href'),

    top = $(id).offset().top;

  $('body,html').animate({scrollTop: top}, 1500);
});

var popupModule = (function () {

var init = function () {
    _setUpListners();
    // то, что должно произойти сразу
    };

var _setUpListners = function () {
      $('.btn').on('click', _showModal);

    };

  var _showModal = function (ev) {
    //console.log('Вызов модального окна');
    ev.preventDefault();
    var divPopup = $('.popup'),
      form = divPopup.find('.sendForm');
    divPopup.bPopup({
      speed: 350,
      transition: 'slideIn',
      transitionClose: 'slideBack',
      onClose: function () {
        form.trigger("reset");
      }
    });
      };
return {
  init: init

};

})();

popupModule.init();

});

$(window).load(function() {
    $(".loader_inner").fadeOut();
    $(".loader").delay(400).fadeOut("slow");
});


ymaps.ready(function () {

    var myMap = new ymaps.Map('map', {
            center: [59.973996, 30.359185],
            zoom: 13,
            controls: ['zoomControl', 'fullscreenControl']
        }, {
            searchControlProvider: 'yandex#search'
        }),
            myGeoObject = new ymaps.GeoObject({
                geometry: {
                    type: "Point",
                    coordinates: [59.973996, 30.359185]
                },
                properties: {
                    iconContent: 'Рекламное Агентство "АММ"',
                    hintContent: ' <h2 class=ballon_header>Рекламное Агентство "АММ"</h2>' +
                    '<div class=ballon_body><span>Сайт:</span><a href="http://www.ammspb.ru/"class="baloon__link">www.ammspb.ru</a></div>' +
                    '<div class=ballon_body><span>Email:</span><a href="mailto:info@ammspb.ru"class="baloon__link-mail">info@ammspb.ru</a></div>' +
                    '<div class=ballon_content> 194044 Санкт-ПетербургЧугунная ул. д.14, лит Р, <br/>ОСК "АРГО" оф. 252 тел/факс <br/><a href="tel:+7928229933">(812) 44-88-911</a></div>'
                }
            }, {
                preset: 'islands#blackStretchyIcon',
                draggable: false
            });
        myMap.geoObjects
            .add(myGeoObject)
  });


})();

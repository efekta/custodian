const makeData = (elements) => {
  let data = {}
  for (let item of elements) {
    if (item.type !== 'radio' && item.type !== 'submit' && item.type !== 'checkbox') {
      data[item.name] = `${$(item).attr('placeholder')}: ${$(item).val()}`
    }
    if (item.type === 'radio' && $(item).is(':checked')) {
      data[item.name] = $(item).attr('aria-valuetext')
    }
  }
  return data
}

const sendMsg = (data, idElemMsg) => {
  $.ajax({
    type: 'POST',
    url: 'http://localhost:3002/send-email',
    data,
    success: function () {
      let msg = $(idElemMsg)
      msg.addClass('success')
      msg.show()
      msg.text(() => {
        return 'Успешно отправлено !'
      })
      console.log('Успешно отправлено !');
    },
    error: function () {
      let msg = $(idElemMsg)
      msg.removeClass('success')
      msg.addClass('error')
      msg.show()
      msg.text(() => {
        return 'Ошибка'
      })
      console.log('Ошибка !')
    }
  })
}

const isDisableButton = (elem, btn) => {
  if (!$(elem).is(':checked')) {
    $(btn).prop('disabled', true);
  } else {
    $(btn).prop('disabled', false);
  }
}

//forms
// disable btn via checkbox
$('#ya').on('click', () => {
  isDisableButton('#ya', '#btn-contacts')
})

$('#ya-float').on('click', () => {
  isDisableButton('#ya-float', '#btn-contacts-float')
})

$('#ya-modal').on('click', () => {
  isDisableButton('#ya-modal', '#btn-contacts-modal')
})

// send message
$('.form-end-page').submit((e) => {
  e.preventDefault()
  const data = makeData(e.target.elements)
  sendMsg(data, '#msg')
})

$('.form-float').submit((e) => {
  e.preventDefault()
  const data = makeData(e.target.elements)
  sendMsg(data, '#msg-float')
})

$('.form-modal').submit((e) => {
  e.preventDefault()
  const data = makeData(e.target.elements)
  data.reason = $('.modal-heading').text()
  sendMsg(data, '#msg-modal')
})

$(document).ready(function(){
  /*======================
  SLIDER

  =======================*/
    $('.pr-slider').slick({
      dots: false,
      arrow: false,
      infinite: true,
      speed: 300,
      slidesToShow: 4,
      centerMode: true,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    });
    /*================================
    Плавный скролл до якоря jquery
    =================================*/
    $("body").on('click', '[href*="#"]', function(e){
      var fixed_offset = 100;
      $('html,body').stop().animate({ scrollTop: $(this.hash).offset().top - fixed_offset }, 1000);
      e.preventDefault();
    });
    // mask input
    $(".phone-input").mask("+ 7 (999) 999-9999");
    /*========================
     mob menu
     =======================*/
    $(".menu-toggle").on('click', function() {
        $(this).toggleClass("on");
        $('.nav-list').toggleClass("show");
        // $('.nav').toggleClass("nav_hide");
        $('body').toggleClass('overflow');

    });
    jQuery(window).width() <= 992 && $(".nav-list li").on('click', function() {
        $('.menu-toggle').removeClass("on");
        $('.nav-list').removeClass("show");
        // $('.nav').removeClass("nav_hide");
        $('body').removeClass('overflow');
    });
    // function mobileOnlySlider() {
    //     $('.pr-box').slick({
    //         dots: false,
    //         arrow: false,
    //         infinite: true,
    //         speed: 500,
    //         slidesToShow: 1,
    //         slidesToScroll: 1,
    //         autoplay: true,
    //         autoplaySpeed: 3000
    //     });
    // }
    //
    // $(window).resize(function(e){
    //     if(window.innerWidth < 769) {
    //         if(!$('.slider').hasClass('slick-initialized')){
    //             mobileOnlySlider();
    //         }
    //
    //     }else{
    //         if($('.slider').hasClass('slick-initialized')){
    //             $('.slider').slick('unslick');
    //         }
    //     }
    // });
    // $(window).on('load resize', function() {
    //     if ($(window).width() < 769) {
    //         $('.pr-box__item:not(.slick-initialized)').slick({
    //
    //         });
    //     } else {
    //         $(".pr-box__item.slick-initialized").slick("unslick");
    //     }
    // });
    // modal
    $('.modal-toggle').on('click', function(e) {
      e.preventDefault();
      $('.modal').toggleClass('is-visible');

    });
    /**/
    $('#company-link_1').on('click', function() {
        $('#company_2').removeClass('open');
        $('#company_3').removeClass('open');
        $('#company_1').toggleClass('open');
        // $('.coaching-company-item').addClass('open');
    });
    /**/
    $('#company-link_2').on('click', function() {
        $('#company_1').removeClass('open');
        $('#company_3').removeClass('open');
        $('#company_2').toggleClass('open');
        // $('.coaching-company-item').addClass('open');
    });
    /**/
    $('#company-link_3').on('click', function() {
        $('#company_1').removeClass('open');
        $('#company_2').removeClass('open');
        $('#company_3').toggleClass('open');
        // $('.coaching-company-item').addClass('open');
    });


    /**/
    $('#coaching-company-link_1').on('click', function() {
        $('#coaching-company_2').removeClass('open');
        $('#coaching-company_3').removeClass('open');
        $('#coaching-company_1').toggleClass('open');
        // $('#coaching-company-item_1').addClass('open');
    });
    /**/
    $('#coaching-company-link_2').on('click', function() {
        $('#coaching-company_1').removeClass('open');
        $('#coaching-company_3').removeClass('open');
        $('#coaching-company_2').toggleClass('open');
        // $('#coaching-company-item_2').addClass('open');
    });
    /**/
    $('#coaching-company-link_3').on('click', function() {
        $('#coaching-company_1').removeClass('open');
        $('#coaching-company_2').removeClass('open');
        $('#coaching-company_3').toggleClass('open');
        // $('#coaching-company-item_3').addClass('open');
    });
});

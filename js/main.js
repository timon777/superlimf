$(document).ready(function () {
  $('.header__burger').click(function () {
    $(this).children().toggleClass('active')
    $('.header__item').toggleClass('active')
  })

  $(document).on("click", function (e) {
    if (!$(e.target).closest(".header__burger, .header__item").length) {
      $(".header__item").removeClass("active");
      $('.header__burger div').removeClass('active')
    }
    e.stopPropagation();
  });

  function onEntry(entry) {
    entry.forEach(change => {
      if (change.isIntersecting) {
        change.target.classList.add('element-show')
      }
    })
  }
  let options = { threshold: [0.5] }
  let observer = new IntersectionObserver(onEntry, options)
  let elements = document.querySelectorAll('.element-animation')
  for (let elm of elements) {
    observer.observe(elm)
  }

  $('.form__items').slick({
    slidesToShow: 4,
    dots: true,
    loop: false,
    infinite: false,
    responsive: [
      {
        breakpoint: 1240,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 639,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  })

  $('.reviews__items').slick({
    slidesToShow: 1,
    dots: true,
    speed: 500,
    loop: true,
    fade: true,
    infinite: true,
    cssEase: 'linear',
    arrows: true,
    prevArrow: '.reviews__prev',
    nextArrow: '.reviews__next',
  })

  let prev = $('.reviews__items .slick-active').prev()
  let prevAtr = prev.children().children().children().attr('src')
  let next = $('.reviews__items .slick-active').next()
  let nextAtr = next.children().children().children().attr('src')
  if (prevAtr === undefined) {
    let prev2 = $('.reviews__items .slick-slide').last()
    let prevAtr2 = prev2.children().children().children().attr('src')
    $('.reviews__prev img').attr('src', prevAtr2)
  } else {
    $('.reviews__prev img').attr('src', prevAtr)
  }
  if (nextAtr === undefined) {
    let next2 = $('.reviews__items .slick-slide:first-child')
    let nextAtr2 = next2.children().children().children().attr('src')
    $('.reviews__next img').attr('src', nextAtr2)
  } else {
    $('.reviews__next img').attr('src', nextAtr)
  }

  $('.reviews__items').on('afterChange', function () {
    let prev = $('.reviews__items .slick-active').prev()
    let prevAtr = prev.children().children().children().attr('src')
    let next = $('.reviews__items .slick-active').next()
    let nextAtr = next.children().children().children().attr('src')
    if (prevAtr === undefined) {
      let prev2 = $('.reviews__items .slick-slide:last-child')
      let prevAtr2 = prev2.children().children().children().attr('src')
      $('.reviews__prev img').attr('src', prevAtr2)
    } else {
      $('.reviews__prev img').attr('src', prevAtr)
    }
    if (nextAtr === undefined) {
      let next2 = $('.reviews__items .slick-slide:first-child')
      let nextAtr2 = next2.children().children().children().attr('src')
      $('.reviews__next img').attr('src', nextAtr2)
    } else {
      $('.reviews__next img').attr('src', nextAtr)
    }
  })

  $('.faq__header').click(function () {
    $(this).next().slideToggle(300)
    $(this).toggleClass('active')
  })

  $('.sertificate__items').slick({
    slidesToShow: 4,
    dots: true,
    loop: false,
    infinite: false,
    responsive: [
      {
        breakpoint: 1240,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 639,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  })

  $('.showcase-product__arrow').on('click', function () {
    var $el = $(this),
      id = $el.attr('href')

    $('html, body').animate(
      {
        scrollTop: $(id).offset().top,
      },
      500
    )

    return false
  })

  $('.showcase-product__slider').slick({
    arrows: false,
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnFocus: false,
    draggable: false,
    pauseOnHover: false,
    swipe: false,
  })

  $('.mehanizm__item-first').hover(function () {
    $('.mehanizm__end-block--first').addClass('active')
  })

  $('.mehanizm__item-second').hover(function () {
    if ($('.mehanizm__end-block--first').hasClass('active')) {
      $('.mehanizm__end-block--second').addClass('active')
    }
  })

  $('.mehanizm__item-third').hover(function () {
    if ($('.mehanizm__end-block--second').hasClass('active')) {
      $('.mehanizm__end-block--third').addClass('active')
    }
  })

  $('.mehanizm__item-foure').hover(function () {
    if ($('.mehanizm__end-block--third').hasClass('active')) {
      $('.mehanizm__end-block--foure').addClass('active')
    }
  })

  $('.mehanizm__item-five').hover(function () {
    if ($('.mehanizm__end-block--foure').hasClass('active')) {
      $('.mehanizm__end-block--five').addClass('active')
    }
  })

  $('.mehanizm__item-six').hover(function () {
    if ($('.mehanizm__end-block--five').hasClass('active')) {
      $('.mehanizm__end-block--six').addClass('active')
    }
  })

  $('.mehanizm__item-second').hover(function () {
    $('.mehanizm__end-block--first').addClass('active')
    $('.mehanizm__end-block--second').addClass('active')
  })

  $('.mehanizm__item-third').hover(function () {
    $('.mehanizm__end-block--first').addClass('active')
    $('.mehanizm__end-block--second').addClass('active')
    $('.mehanizm__end-block--third').addClass('active')
  })

  $('.mehanizm__item-foure').hover(function () {
    $('.mehanizm__end-block--first').addClass('active')
    $('.mehanizm__end-block--second').addClass('active')
    $('.mehanizm__end-block--third').addClass('active')
    $('.mehanizm__end-block--foure').addClass('active')
  })

  $('.mehanizm__item-five').hover(function () {
    $('.mehanizm__end-block--first').addClass('active')
    $('.mehanizm__end-block--second').addClass('active')
    $('.mehanizm__end-block--third').addClass('active')
    $('.mehanizm__end-block--foure').addClass('active')
    $('.mehanizm__end-block--five').addClass('active')
  })

  $('.mehanizm__item-six').hover(function () {
    $('.mehanizm__end-block--first').addClass('active')
    $('.mehanizm__end-block--second').addClass('active')
    $('.mehanizm__end-block--third').addClass('active')
    $('.mehanizm__end-block--foure').addClass('active')
    $('.mehanizm__end-block--five').addClass('active')
    $('.mehanizm__end-block--six').addClass('active')
  })

  $(window).scroll(function () {
    if ($(this).scrollTop() > 500) {
      $('.top_button').fadeIn(500)
    } else {
      $('.top_button').fadeOut(500)
    }
  })
  $('.top_button').click(function (event) {
    event.preventDefault()
    $('html, body').animate({ scrollTop: 0 }, 500)
  })
})

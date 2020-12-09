$(document).ready(function () {

    $('.advert-slider-product-js').slick({
       slidesToShow: 1,
       slidesToScroll: 1,
       rows: 0,
       variableWidth: true,
       prevArrow: '.advers-slider__control-prev',
       nextArrow: '.advers-slider__control-next',
       asNavFor:".advers-js-attention-slider__nav",
       responsive: [
            {
                breakpoint: 768,
                settings: {
                    variableWidth: false,
                }
            },
           {
               breakpoint: 576,
               settings: {

               }
           },

       ]
    });


    //Навигация продукта
    $('.advers-js-attention-slider__nav').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        focusOnSelect: true,
        arrows: false,
        // slickCurrentSlide: true,
        // infinite: false,
        rows:0,
        // variableWidth: true,
        asNavFor:".advert-slider-product-js",


    });

    $('.catalog-list li ul').hide ();
    $('.catalog-item span').click(function () {
        $(this).next().slideToggle(200);
        // $('.catalog-item span svg').removeClass('rotate-menu');
        $(this).children().toggleClass('rotate-menu');
    });


    $(".mask-field").mask("+7(000) 000-00-00");
    // Показать пароль в popup
    $('.icon-pass').on('click', function() {
        if ($('.show-password').attr('psswd-shown') == 'false') {

            $('.show-password').removeAttr('type');
            $('.show-password').attr('type', 'text');

            $('.show-password').removeAttr('psswd-shown');
            $('.show-password').attr('psswd-shown', 'true');


        }else {

            $('.show-password').removeAttr('type');
            $('.show-password').attr('type', 'password');

            $('.show-password').removeAttr('psswd-shown');
            $('.show-password').attr('psswd-shown', 'false');


        }

    });

    $('.header-category-button').click(function () {
        $('.popup-menu-catalog').toggleClass('active');
    });

    // Закрыть по выпадающий список еще в навигационной панели и перевернуть стрелку
    $(document).on('click', function (e) {
        if (!$(e.target).closest(".header-category-button").length) {
            $('.popup-menu-catalog').removeClass('active');

        }
        e.stopPropagation();
    });




   $('.popup-menu-catalog--item').hover(function () {
       var tabName = $(this).attr('level1-tab');
       $(this).addClass('active').siblings().removeClass('active');
       $('.tab-content-wrap2 .' + tabName).addClass('active').siblings().removeClass('active');
   });

   $('.popup-header-my-items--item--level2').hover(function () {
       var tabName2 = $(this).attr('level2-tab');
       $(this).addClass('active').siblings().removeClass('active');
       $('.tab-content-wrap3 .' + tabName2).addClass('active').siblings().removeClass('active');

   });
   //
   //  $('.popup-header-my-items--item--level3').hover(function () {
   //      $('.popup-header-my-items--item--level3').removeClass('active');
   //      $(this).addClass('active');
   //  });

    $('.personal-area--item').click(function () {
        var room_tab = $(this).attr('data-area');
        $(this).addClass('active').siblings().removeClass('active');
        $('.personal-tabs .' + room_tab).addClass('active').siblings().removeClass('active');

    });

    $('.profile-tabs-my-room-tab').click(function () {
        var room_tab = $(this).attr('data-area');
        $(this).addClass('active').siblings().removeClass('active');
        $('.profile-tabs-my-room--content-wrapper .' + room_tab).addClass('active').siblings().removeClass('active');

    });




    $('.catalog-sort-all--items').click(function () {
        $('.catalog-sort-all--items').removeClass('active');
        $(this).addClass('active');
    });

    $('.categ-filter-items-pages--item').click(function () {
        $('.categ-filter-items-pages--item').removeClass('active');
        $(this).addClass('active');
    });


    $('.advert-color-choise-checked').on('click',function () {
        $('.advert-color-choise-checked').removeClass('checked');
        $(this).addClass('checked').siblings().removeClass('checked');
        var $colorChoises = $(this);
        $('.advert-color-check').removeAttr('data-colors','checked');
        $colorChoises.parent().find('.advert-color-check').attr('data-colors','checked');
    });

    $('.advert-to-choise-checked').on('click',function () {
        $('.advert-to-choise-checked').removeClass('checked');
        $(this).addClass('checked').siblings().removeClass('checked');
        var $toChoise = $(this);
        $('.advert-to-check').removeAttr('data-TO','checked');
        $toChoise.parent().find('.advert-to-check').attr('data-TO','checked');
    });

    $('.advert-choise-all-kon').click(function () {
        $('.advert-to-choise-email').css('display','block');
        $('.advert-to-choise-phone').css('display','block');
        $('.advert-to-choise-email-label').css('display','block');

    });
    $('.advert-choise-phones').click(function () {
       $('.advert-to-choise-email').css('display','none');
        $('.advert-to-choise-phone').css('display','block');
        $('.advert-to-choise-email-label').css('display','none');
    });

    $('.advert-choise-emails').click(function () {
        $('.advert-to-choise-phone').css('display','none');
        $('.advert-to-choise-email').css('display','block');
        $('.advert-to-choise-email-label').css('display','block');
    });


    // Выбор атрибутов в фильтре
    $('.advert-pos').on('click',function () {
        $('.advert-sob').removeClass('uncheck');
        $(this).addClass('checked');
        var $listSort2 = $(this);
        if ($listSort2.parent().parent().find('.advert-checked-block-check').attr('checked','checked')) {
            $listSort2.parent().parent().find('.advert-checked-block-check').removeAttr('uncheck');
        }

    });

    // Выбор атрибутов в фильтре
    $('.advert-sob').on('click',function () {
        $('.advert-pos').removeClass('checked');
        $(this).addClass('uncheck');
        var $listSort1 = $(this);
        if ($listSort1.parent().parent().find('.advert-checked-block-check').attr('checked', 'uncheck')) {
            $listSort1.parent().parent().find('.advert-checked-block-check').removeAttr('checked');
        } else {
            $listSort1.parent().parent().find('.advert-checked-block-check').attr('checked', 'uncheck');
        }

    });

    $('.advert-button-choise').on('click',function () {
        $('.advert-button-choise').removeClass('checked');
        $(this).addClass('checked').siblings().removeClass('checked');
        var $adverSer = $(this);
        $('.advert-button-choise-input').removeAttr('checked');
        $adverSer.parent().find('.advert-button-choise-input').attr('checked','checked');


        $('.advert-button-choise').text('Anzeige aufgeben');
        $(this).text('Anzeige gepostet')
    });

    $('.mobile-sandwich').on('click',function () {
        $('.mobile-fixed-menus').addClass('active');
    });
    $('.mobile-fixed-menus-icon').click(function () {
        $('.mobile-fixed-menus').removeClass('active');
    });

    $('.mobile-category').on('click',function () {
        $('.mobile-popup-menu-catalog').addClass('active');
    });
    $('.mobile-fixed-menus-icon').click(function () {
        $('.mobile-popup-menu-catalog').removeClass('active');
    });
});

// Загрузка изоображений

var input = document.getElementById('files-upload'); // see Example 4

input.onchange = function () {
    var file = input.files[0];
    displayAsImage(file); // see Example 7
};

function displayAsImage(file) {
    var imgURL = URL.createObjectURL(file),
        img = document.createElement('img');
    img.className  = "advert-wrap--img";

    img.onload = function() {
        URL.revokeObjectURL(imgURL);
    };


    img.src = imgURL;
    document.querySelector('.advert-wrap__all--img').appendChild(img);
}


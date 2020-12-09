// SELECT OPTIONS
(function ( $ ) {
    var elActive = '';
    $.fn.selectCF = function( options ) {

        // option
        var settings = $.extend({

            change: function( ){ }, // event change
        }, options );

        return this.each(function(){

            var selectParent = $(this);
            list = [],
                html = '';


            $(selectParent).hide();
            if( $(selectParent).children('option').length == 0 ){ return; }
            $(selectParent).children('option').each(function(){
                if( $(this).is(':selected') ){ s = 1; title = $(this).text(); }else{ s = 0; }
                list.push({
                    value: $(this).attr('value'),
                    text: $(this).text(),
                    selected: s,
                })
            });

            // style

            html += "<ul class='selectCF'>";
            html += 	"<li class='select'>";
            html +=         "<div class='titleCF select-input'>"+title+"</div>";
            html += 		"<div class='append-icon'><svg class='icon icon-arrow-down'><use xlink:href='static/img/svg/symbol/sprite.svg#arrow-down'></use></svg></div>";
            html += 		"<ul class='select-options'>";
            $.each(list, function(k, v){ s = (v.selected == 1)? "selected":"";
                html += 			"<li value="+v.value+" class='"+s+"'>"+v.text+"</li>";});
            html += 		"</ul>";
            html += 	"</li>";
            html += "</ul>";

            $(selectParent).after(html);
            var customSelect = $(this).next('ul.selectCF'); // add Html
            var seachEl = $(this).next('ul.selectCF').children('li').children('.searchCF');
            var seachElOption = $(this).next('ul.selectCF').children('li').children('ul').children('li');
            var seachElInput = $(this).next('ul.selectCF').children('li').children('.searchCF').children('input');


            // $('.selectCF').click(function () {
            //     $('.selectCF').find('.select-options').hide();
            //     $(this).find('.select-options').slideDown(100);
            //
            //
            // });
            // handle active select
            $(customSelect).unbind('click').bind('click',function(e){
                e.stopPropagation();
                if($(this).hasClass('onCF')){
                    elActive = '';
                    $(this).removeClass('onCF');
                    $(this).children().find('.icon-arrow-down').removeClass('arrow-rotate');
                    $(this).removeClass('searchActive'); $(seachElInput).val('');
                    $(seachElOption).show();
                }else{
                    if(elActive != ''){
                        $(elActive).removeClass('onCF');
                        $(elActive).children().find('.icon-arrow-down').removeClass('arrow-rotate');
                        $(seachElOption).show();
                    }
                    elActive = $(this);
                    $(this).addClass('onCF');
                    $(this).children().find('.icon-arrow-down').addClass('arrow-rotate');
                    $(seachEl).children('input').focus();
                }
            });

            // handle choose option
            var optionSelect = $(customSelect).children('li').children('ul').children('li');
            $(optionSelect).bind('click', function(e){
                var value = $(this).attr('value');
                if( $(this).hasClass('selected') ){
                    //
                }else{
                    $(optionSelect).removeClass('selected');
                    $(this).addClass('selected');
                    $(customSelect).children('li').children('.titleCF').html($(this).html());
                    $(selectParent).val(value);
                    settings.change.call(selectParent); // call event change
                }
            });

            // handle search
            $(seachEl).children('input').bind('keyup', function(e){
                var value = $(this).val();
                if( value ){
                    $(customSelect).addClass('searchActive');
                    $(seachElOption).each(function(){
                        if( $(this).text().search(new RegExp(value, "i")) < 0 ) {
                            // not item
                            $(this).fadeOut();
                        }else{
                            // have item
                            $(this).fadeIn();
                        }
                    })
                }else{
                    $(customSelect).removeClass('searchActive');
                    $(seachElOption).fadeIn();
                }
            })

        });
    };
    $(document).click(function(){
        if(elActive != ''){
            $(elActive).removeClass('onCF');
            $(elActive).children().find('.icon-arrow-down').removeClass('arrow-rotate');
        }
    })
}( jQuery ));

$(function(){
    $( ".test" ).selectCF({
        color: "#FFF",
        backgroundColor: "#663052",
    });
});
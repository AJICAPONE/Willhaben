$(document).ready(function () {
    //select all checkbox
    function checkAll1() {

        var inputs = document.querySelectorAll('.check-message');
        for (var i = 0; i < inputs.length; i++) {
            inputs[i].checked = true;
        }
        $('.message-area-all-item-check-check').addClass('checked');

        this.onclick = uncheckAll1;
    }

    function uncheckAll1() {
        var inputs = document.querySelectorAll('.check-message');
        for (var i = 0; i < inputs.length; i++) {
            inputs[i].checked = false;
        }
        $('.message-area-all-item-check-check').removeClass('checked');
        this.onclick = checkAll1; //function reference to original function
    }

    var el1 = document.getElementById("check-all"); //let for ES6 aficionados
    el1.onclick = checkAll1; //again, function reference, no ()



    // Выбор атрибутов в фильтре
    $('.message-area-all-item-check-check').on('click',function () {
        $(this).toggleClass('checked');
        var $listSort = $(this);
        if ($listSort.parent().find('.check-message').attr('checked')) {
            $listSort.parent().find('.check-message').removeAttr('checked', false);
        } else {
            $listSort.parent().find('.check-message').attr('checked', true);
        }

    });


    //select all checkbox
    function checkAll2() {

        var inputs = document.querySelectorAll('.check-message2');
        for (var i = 0; i < inputs.length; i++) {
            inputs[i].checked = true;
        }
        $('.message-area-all-item-check-check2').addClass('checked');

        this.onclick = uncheckAll2;
    }

    function uncheckAll2() {
        var inputs = document.querySelectorAll('.check-message2');
        for (var i = 0; i < inputs.length; i++) {
            inputs[i].checked = false;
        }
        $('.message-area-all-item-check-check2').removeClass('checked');
        this.onclick = checkAll2; //function reference to original function
    }

    var el = document.getElementById("check-offer"); //let for ES6 aficionados
    el.onclick = checkAll2; //again, function reference, no ()



    // Выбор атрибутов в фильтре
    $('.message-area-all-item-check-check2').on('click',function () {
        $(this).toggleClass('checked');
        var $listSort2 = $(this);
        if ($listSort2.parent().find('.check-message2').attr('checked')) {
            $listSort2.parent().find('.check-message2').removeAttr('checked', false);
        } else {
            $listSort2.parent().find('.check-message2').attr('checked', true);
        }

    });

    $("#imgload").change(function () {
        if (this.files && this.files[0]) {
            var reader = new FileReader();
            reader.onload = function (e) {
                $('#imgshow').attr('src', e.target.result);
            };
            reader.readAsDataURL(this.files[0]);
        }
    });

    $('#change-name').click(function () {
        $('#profile-town-input').slideUp(100);
        $('#profile-rajon-input').slideUp(100);
        $('#profile-name-input').slideToggle(100);

    });
    $('#change-town').click(function () {
        $('#profile-rajon-input').slideUp(100);
        $('#profile-name-input').slideUp(100);
        $('#profile-town-input').slideToggle(100);

    });
    $('#change-rajon').click(function () {
        $('#profile-town-input').slideUp(100);
        $('#profile-name-input').slideUp(100);
        $('#profile-rajon-input').slideToggle(100);
    });

    var input1 = document.getElementById('profile-name-input');

    input1.oninput = function() {
        document.getElementById('profile-name').innerHTML = input1.value;
    };
    var input2 = document.getElementById('profile-town-input');

    input2.oninput = function() {
        document.getElementById('profile-town').innerHTML = input2.value;
    };
    var input3 = document.getElementById('profile-rajon-input');

    input3.oninput = function() {
        document.getElementById('profile-rajon').innerHTML = input3.value;
    };


    $('.settings-profile--items-change-checked').on('click',function () {
        $(this).toggleClass('checked');
        var $listSort = $(this);
        if ($listSort.parent().find('.settings-profile--items-change-check').attr('checked')) {
            $listSort.parent().find('.settings-profile--items-change-check').removeAttr('checked', false);
        } else {
            $listSort.parent().find('.settings-profile--items-change-check').attr('checked', true);
        }

    });
});
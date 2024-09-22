$(() => {

    new WOW().init();

    $('.product-image').magnificPopup({
        type: 'image'
    });

    $('.tea-slide').slick({
        dots: false,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear',
        prevArrow: $('.slider-prev'),
        nextArrow: $('.slider-next')
    });

    $("#accordion").accordion({
        active: false, collapsible: true
    });

    $('#action').click(function () {
        $("#action::after").css({
            transform: 'rotate(180deg)'
        })
    });

    const inputName = $('#exampleInputName');
    const inputLastName = $('#exampleInputLastName');
    const inputPhone = $('#exampleInputPhone');
    const inputCountry = $('#exampleInputCountry');
    const inputAddress = $('#exampleInputAddress');
    const inputIndex = $('#exampleInputIndex');
    const orderForm = $('.order-input');
    const orderSuccess = $('#order-success');

    orderSuccess.hide();


    inputIndex.keydown((e) => {
        let result = (e.key);
        if (isNaN(result)) {
            return false;
        }
    });


    $('#btnSend').click(onRegister);

    function onRegister(e) {
        e.preventDefault();

        if (!inputName.val()) {
            alert('Заполните поле "Имя"');
            return;
        }
        if (!inputLastName.val()) {
            alert('Заполните поле "Фамилия"');
            return;
        }
        if (!inputPhone.val()) {
            alert('Заполните поле "Телефон"');
            return;
        }
        if (!inputCountry.val()) {
            alert('Заполните поле "Страна"');
            return;
        }

        if (!inputIndex.val()) {
            alert('Заполните поле "Индекс"');
            return;
        }
        if (inputIndex.val().length !== 6) {
            alert('Индекс должен содержать 6 символов');
            return;
        }

        if (!inputAddress.val()) {
            alert('Заполните поле "Адрес"');
            return;
        }

        orderForm.hide();
        orderSuccess.show();

    }

})


    function openBuyMenu(id) { // Открытие кнопки Купить в каталоге
        $('.rollbuy#buymenu_'+id).css('left', '50%'); // Первая анимация

        $('.rollbuy#buymenu_'+id).on('transitionend webkitTransitionEnd oTransitionEnd', function ()
        { // Действие при завершении анимации, делаем анимацию пошаговой
            setTimeout(function(){ 
                $('.rollbuy#buymenu_'+id+' .under_distr').css('margin-top', '0px'); // Вторая анимация
                $('.rollbuy#buymenu_'+id).off('transitionend webkitTransitionEnd oTransitionEnd');
            }, 80); // Очищаем событие, чтобы не умножать его в геометрической прогрессии

        });

        $(document).mouseup(function (e) { // Закрываем BuyMenu при нажатии на любую область
            var container = $('.rollbuy#buymenu_'+id).parent('.btn');
            if (container.has(e.target).length === 0){
                closeBuyMenu(id);
            }
        });

        $(document).keyup(function(e) { // Закрываем BuyMenu при нажатии на Escape
            if (e.keyCode === 27) { // Key ESCAPE
                var container = $('.rollbuy#buymenu_'+id).parent('.btn');
                closeBuyMenu(id);
            }
        });

        function closeBuyMenu(id) { // Закрываем меню, так же, с пошаговой анимацией
            $('.rollbuy#buymenu_'+id+' .under_distr').css('margin-top', '115px');
                setTimeout(function(){
                   $('.rollbuy#buymenu_'+id).css('left', '0%');
                }, 300);
                $('.rollbuy#buymenu_'+id+' .under_distr').off('transitionend webkitTransitionEnd oTransitionEnd');
        }
    }

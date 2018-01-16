/* arrows */
            var countItem = $('.element_card__miniphoto').length; // Количество картинок
            var currentItem = parseInt($('.element_card__miniphoto.active').attr('data-item')); // Текущая картинка
            $('.arrows .right').on('click', function() {
                if(currentItem == countItem) {
                    currentItem = 1;
                }
                else {
                    currentItem = currentItem+1;
                }
                $('.element_card__miniphoto[data-item="'+currentItem+'"]').click();
            });
            $('.arrows .left').on('click', function() {
                if(currentItem == 1) {
                    currentItem = countItem;
                }
                else {
                    currentItem = currentItem-1;
                }
                $('.element_card__miniphoto[data-item="'+currentItem+'"]').click();
            });
/* arrows */

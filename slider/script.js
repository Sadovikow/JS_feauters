  // Слайдер пример
  $('.interious-arrow').on('click', function(e) {
      var block = $(this);
      var oneSlidePx = 695; // На какое расстояние двигаем
      var slider = $(this).parents('.interious__image-list').find('.interious__image-track');
      var elementsCount = $(this).parents('.interious__image-list').find('.interious__image-track').find('.interious__image').length;
      var maxCoordinate = elementsCount * oneSlidePx - (oneSlidePx * 1);
      var coordinate = slider.css('transform').match(/matrix(?:(3d)\(-{0,1}\d+(?:, -{0,1}\d+)*(?:, (-{0,1}\d+))(?:, (-{0,1}\d+))(?:, (-{0,1}\d+)), -{0,1}\d+\)|\(-{0,1}\d+(?:, -{0,1}\d+)*(?:, (-{0,1}\d+))(?:, (-{0,1}\d+))\))/)
      if(!coordinate) coordinate = [0, 0, 0];
      if(coordinate[1] == '3d') coordinate = coordinate.slice(2,5);
      console.log(elementsCount);
      coordinate.push(0);
      var coordinateX = coordinate.slice(5, 8)[0];
      console.log('old = '+coordinateX);
      coordinateX = parseInt(coordinateX);
      if(!coordinateX) {
          coordinateX = 0;
      }
      if(block.hasClass('photo-list__arrow--left')) {
          
          coordinateX = coordinateX+oneSlidePx; 
          if(coordinateX > 0) {
              coordinateX = 0;
          }
          else {
            var currentimg = slider.find('.interious__image.current');
            // currentimg.remove();
            currentimg.prev('.interious__image').addClass('current');
            currentimg.removeClass('current');
          }
      }
      else {
            console.log(maxCoordinate);
            console.log(coordinateX-oneSlidePx);
           if(maxCoordinate*-1 > (coordinateX-oneSlidePx)) {
              console.log('this is maximum');
           }
           else {
              coordinateX = coordinateX-oneSlidePx; 
              var currentimg = slider.find('.interious__image.current');
              currentimg.next('.interious__image').addClass('current');
              currentimg.removeClass('current');
           }
      }
      //console.log('new = '+coordinateX);
      slider.css('transform', 'translate3d('+coordinateX+'px, 0px, 0px)');
      //return coordinate.slice(5, 8);
  });

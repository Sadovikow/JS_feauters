$(document).ready(function(){ // Форма отправки отзыва у элемента
    $('#feedback-hunter-form').submit(function(){
        setTimeout(function(){
            if(!$('input').is('.error')) {
                var name = $('input[name="globalcontactform-name"]').val();
                var phone = $('input[name="globalcontactform-phone"]').val();
                var email = $('input[name="globalcontactform-email"]').val();
                var address = $('input[name="globalcontactform-address"]').val();
                var comment = $('textarea[name="globalcontactform-comment"]').val();
                var interest = $('input[name="globalcontactform-interest"]').val();
                var section = $('input[name="section"]').val();
                var element = $('input[name="element"]').val();
                var param = "name="+name+"&phone="+phone+"&email="+email+"&address="+address+"&comment="+comment+"&interest="+interest+"&section="+section+"&element="+element;
                $.ajax({
                    url:     '/ajax.php', //url страницы
                    type:     "POST", //метод отправки
                    dataType: "html", //формат данных
                    data: param,
                    success: function(response) { //Данные отправлены успешно
                        var result = $.parseJSON(response);
                        if(result == 1){
                            $('#feedback-submit').prop('disabled', true);
                            $('#feedback-submit').val('Отзыв отправлен!');
                                $('#feedback-submit').on('click', function() { // Если мы отправили форму отзыва, то при клике на сабмит закрывать окошко
                                    $('button.modal-close').click();
                                });
                        }
                    },  error: function(jqXHR, textStatus, errorThrown){
                        console.log('Error: '+ errorThrown); //debug
                    }
                 });
            }
        }, 100);
        return false;
    });
});

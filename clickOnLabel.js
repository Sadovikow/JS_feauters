	// Простая конструкция, с помощью которой
	// даем возможность не целиться в чекбокс,
	// но и нажать на лейбл
	$('label').on('click', function() {
		var labelFor = $(this).attr('for');
		$('input[name="'+labelFor+'"]').click();
	});

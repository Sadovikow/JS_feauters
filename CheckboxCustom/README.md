CSS:

```css
.r_checkbox {
	width: 30px;
	height: 30px;
	border: 3px solid #dfe1e0;
	border-radius: 5px;
}

.r_checkbox.active {
	background: url('images/checked.png') center center no-repeat;
}

.r_checkbox input[type="checkbox"] {
	display: none;
}
```

JS:
```js
$(document).ready(function(){
	$('.r_checkbox').click(function() {
		var block = $(this);
		block.toggleClass('active');
		if(block.is('.active')) {
			block.find('input[type="checkbox"]').prop('checked', true);
		} 
		else {
			block.find('input[type="checkbox"]').prop('checked', false);
		}
	});
});
```

HTML:
```html
<div class="r_checkbox active"><input name="" type="checkbox" checked /></div>
```

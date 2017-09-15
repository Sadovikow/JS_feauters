<!-- Оставить отзыв (окно) -->
<div class="contactModal" id="global-contactusform" style="display: none;">
    <div class="modal-container">
        <div class="modal-content">
            <div class="modal-top w-clearfix">
                <button type="button" class="close modal-close">x</button>
                <h4 class="modal-title_new">Оставить отзыв</h4>
            </div>
            <div class="modal-body form-horizontal">
                <div class="modal-rep-section"></div>
                <hr>
                <div class="formWrapper">
				<form id="feedback-hunter-form">
                    <div class="form-group has-feedback required-form-section w-row">
                        <label for="globalcontactform-name" class="control-label">Имя:*</label>
                        <div class="contact-form-input">
                            <input type="text" class="form-control" id="globalcontactform-name" name="globalcontactform-name">
                        </div>
                        <div class="form-control-feedback" aria-hidden="true"></div>
                    </div>
                    <div class="form-group has-feedback required-form-section w-row">
                        <label for="globalcontactform-phone" class="control-label">Телефон:*</label>
                        <div class="contact-form-input">
                            <input type="tel" class="form-control" id="globalcontactform-phone" name="globalcontactform-phone">
                        </div>
                        <div class="form-control-feedback" aria-hidden="true"></div>
                    </div>
                    <div class="form-group has-feedback required-form-section w-row">
                        <label for="globalcontactform-email" class=" control-label">Email:*</label>
                        <div class="contact-form-input">
                            <input type="email" class="form-control" id="globalcontactform-email" name="globalcontactform-email">
                        </div>
                        <div class="form-control-feedback" aria-hidden="true"></div>
                    </div>
                    <hr>
                    <div class="form-group w-row">
                        <label for="globalcontactform-address" class=" control-label">Адрес:</label>
                        <div class="contact-form-input">
                            <input type="text" class="form-control" id="globalcontactform-address" name="globalcontactform-address">
                        </div>
                    </div>
                    <div class="form-group w-row">
                        <label for="globalcontactform-comment" class="control-label">Комментарий:</label>
                        <div class="contact-form-input">
                            <textarea class="form-control" id="globalcontactform-comment" name="globalcontactform-comment"></textarea>
                        </div>
                    </div>
					<div class="form-group w-row flex-column" style="display: none;">
                        <label class="control-label">Заинтересован в:</label>
                        <div>
                            <div class="w-col w-col-4">
                                <input type="hidden" name="section" value="<?=$arResult['IBLOCK_SECTION_ID']?>">
                                <input type="hidden" name="element" value="<?=$arResult['ID']?>">
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <input id="feedback-submit" value="Отправить" type="submit" class="">
                    </div>
				</form>
                </div>
            </div>
        </div>
    </div>
</div>
<!-- / Оставить отзыв -->

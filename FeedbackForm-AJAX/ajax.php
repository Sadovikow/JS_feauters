<?require($_SERVER["DOCUMENT_ROOT"]."/bitrix/header.php");
$APPLICATION->SetTitle("Title");
$GLOBALS['APPLICATION']->RestartBuffer();
CModule::IncludeModule('iblock');

if(isset($_POST)){
    $IBLOCK = 32; // Отзывы
    /* Делаем запись в инфоблок */
    $arFields = array(
        "ACTIVE" => "Y",
        "IBLOCK_ID" => $IBLOCK,
        "NAME" => $_POST['name'].' Оставил отзыв',
        "DETAIL_TEXT" => $_POST['comment'],
        "PROPERTY_VALUES" => array(
            "FULL_NAME" =>  $_POST['name'],
            "ADDRESS" =>  $_POST['address'],
            "EMAIL" => $_POST['email'],
            "PHONE" => $_POST['phone'],
            "TEXT" => $_POST['comment'],
            "SECTION" => $_POST['section'],
            "ELEMENT" => $_POST['element'],
            )
        );
        $oElement = new CIBlockElement();
        $idElement = $oElement->Add($arFields, false, false, true);
}
if($idElement)
    $result = 1;
else
    $result = 0;
echo json_encode($result);

 die(); ?>
<?require($_SERVER["DOCUMENT_ROOT"]."/bitrix/footer.php");?>

<?php

$log = "Logistika";
$name = $_POST['name'];
$phone = $_POST['tel'];
$email = $_POST['type'];
$token = "6336872563:AAFdXRerwOKPZVFnEDFpqcGsTNfUMqKmnBQ";
$chat_id = "-829010611";
$arr = array(
  'Kurs: ' => $log,
  'Ismi: ' => $name,
  'Raqami: ' => $phone,
  'Kurs turi: ' => $email
);

foreach($arr as $key => $value) {
  $txt .= "<b>".$key."</b> ".$value."%0A";
};

$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");

if ($sendToTelegram) {
  header('Location: index.html');
} else {
  echo "Error";
}

?>
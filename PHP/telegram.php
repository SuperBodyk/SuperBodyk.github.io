<?php

/* https://api.telegram.org/bot1245570473:AAH3PdaJh4YZylQKy2zh6q0Itu5ipmob0Ck/getUpdates,
*/

session_start ();
$token = "1717742261:AAHAPDEWUZuqCyZetZb4uyVQGeFcFqwFoIk";
$chat_id = "-371289017";
   $Cookie_Name=$_COOKIE["Name_people"];
   $Cookie_Email=$_COOKIE['Email_people'];
   $Cookie_Phone=$_COOKIE['Phone_people'];
   $Cookie_Qwest=$_COOKIE['Qwest_people'];
   $date_for_server=date('d/m/Y');
   $time_for_server=date('H:i');
   $txt = "Повідомлення від:".$Cookie_Name." /
   Звернувся на сайті в ".$time_for_server." годині ".$date_for_server." числа /
   Номер телефону:".$Cookie_Phone." / 
   Емейл адрес:".$Cookie_Email." /
   Запитання від користувача: ".$Cookie_Qwest." .";


$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");

$URL='../index.html';
if ($sendToTelegram) {
   header("location: $URL");
}
?>
<?php

header('Content-Type: text/html; charset=utf-8');

echo send();


function send()
{
    $to = 'marat.icanall@ya.ru';
    $from = 'marat.icanall@ya.ru';

    $subject = 'Заявка с сайта opt-setka.ru';
    $message = '';

    $message .= "Имя: " . post('name') . " \r\n";
    $message .= "Телефон: " . post('phone') . " \r\n";
    $message .= "E-mail: " . post('email') . " \r\n";
    $message .= "Комментарий: " . post('comment') . " \r\n";

    $headers  = "MIME-Version: 1.0\r\n";
    $headers .= "Content-type: text/plain; charset=utf-8\r\n";
    $headers .= "From: $from\r\n";

    mail($to, $subject, $message, $headers);

    return json_encode([
        'success' => true
    ]);
}


function post($key)
{
    return isset($_POST[$key]) ? $_POST[$key] : null;
}


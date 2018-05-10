<?php

 	include ('mail/recaptchalib.php');

    $privatekey = "6LcW7lcUAAAAALRE92Qk7ZQD5-Ru1AQJ7cv-JPDL";
    $reCaptcha = new ReCaptcha($privatekey);

	$response = $reCaptcha->verifyResponse(
        $_SERVER["REMOTE_ADDR"],
        $_POST["g-recaptcha-response"]
    );

    if (!$response->success) die ('Error. Please try again');



	require 'mail/Exception.php';
	require 'mail/PHPMailer.php';
	require 'mail/SMTP.php';

	use PHPMailer\PHPMailer\PHPMailer;
	use PHPMailer\PHPMailer\Exception;


	$mail = new PHPMailer(true);                         // Passing `true` enables exceptions
	try {

      $organization = $_POST['organization'];
      $email = $_POST['email'];
      $tel = $_POST['tel'];
      $message = $_POST['message'];
	    //Recipients
	    $mail->setFrom($_POST['email']);
	    $mail->addAddress('babkinevgeny@gmail.com');     // Add a recipient

	    //Content
	    $mail->isHTML(true);
	    $mail->Subject = 'Заявка с сайта setservice24.ru';
	    $mail->Body    = "Имя или название организации: $organization<br>Почта: $email<br>Телефон: $tel<br>Текст заявки: $message.";
      if ($_FILES) {
        $mail->addAttachment($_FILES['file']['tmp_name'], $_FILES['file']['name']);
      }

      // for($i=0; $i < count($_FILES['file']['name']); $i++){
      //
      //   $ftmp[] = $_FILES['file']['tmp_name'][$i];
      //   $fname[] = $_FILES['file']['name'][$i];
      //
      // }
      // $mail->addAttachment($ftmp[0],$fname[0]);
      $mail->CharSet = "utf-8";
	    $mail->send();
	    echo 'Message has been sent';
	} catch (Exception $e) {
	    echo 'Message could not be sent. Mailer Error: ', $mail->ErrorInfo;
	}

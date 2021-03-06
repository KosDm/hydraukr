<?php 

include_once('inc/class.simple_mail.php');
include_once('inc/gump.class.php');

include_once('mail-config.php');




// Check Data
$isValid = GUMP::is_valid($_POST, array(
	'first-name' => 'required',
	'phone-number' => 'required',
	'point-where' => 'required'	
	));

if($isValid === true) {

	// Submit Mail
	$mail = new SimpleMail();
	$mail->setTo(YOUR_EMAIL_ADDRESS, YOUR_COMPANY_NAME)
	->setSubject('Новий клієнт')
	->setFrom(htmlspecialchars("noreply@kitgroup.com.ua"), htmlspecialchars("company-mail"))
	->addGenericHeader('X-Mailer', 'PHP/' . phpversion())
	->addGenericHeader('Content-Type', 'text/html; charset="utf-8"')
	->setMessage(createMessage($_POST))
	->setWrap(300);

	$send=$mail->send();

	$result = array(
		'result' => 'success', 
		'msg' => array("Success! Your contact request has been send. ".$send)
		);

	echo json_encode($result);
	return json_encode($result);

} else {
	$result = array(
		'result' => 'error', 
		'msg' => array($isValid.$send)
		);

	echo json_encode($result);
	return json_encode($result);
}


function createMessage($formData)
{
	$body  = 	"У вас новий клієнт : <br><br>";
	$body .=	"Ім'я:  ".htmlspecialchars($formData['first-name'])." <br><br>";
	$body .=	"Телефон:  ".htmlspecialchars($formData['phone-number'])." <br><br>";
	$body .=	"Звідки прийшов:  ".htmlspecialchars($formData['point-where'])." <br><br>";
	

	return $body;
}















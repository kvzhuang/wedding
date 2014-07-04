<?php

// Your email address
$to = 'info@html5css3templates.com';

$subject = 'Response to wedding invite';

// Don't edit below unless you know what you're doing
if($to) {
	$name = $_POST['name'];
	$email = $_POST['email'];
	
	$fields = array(
		0 => array(
			'text' => 'Name',
			'val' => $_POST['name']
		),
		1 => array(
			'text' => 'Email address',
			'val' => $_POST['email']
		),
		2 => array(
			'text' => 'Phone',
			'val' => $_POST['phone']
		),
		3 => array(
			'text' => 'Number Attending',
			'val' => $_POST['number']
		),
		4 => array(
			'text' => 'Message',
			'val' => $_POST['message']
		)
	);
	
	$message = "";
	
	foreach($fields as $field) {
		$message .= $field['text'].": " . htmlspecialchars($field['val'], ENT_QUOTES) . "<br>\n";
	}
	
	$headers = "MIME-Version: 1.0\r\nContent-type: text/html; charset=utf-8\r\n";
	$headers .= "From: \"" . $name . "\" \r\n";
	$headers .= "Reply-To: " .  $email . "\r\n";
	$message = utf8_decode($message);
	
	mail($to, $subject, $message, $headers);
	
	if ($message){
	echo 'sent';
	}else{
	echo 'failed';
	}
} else {
	echo "Don't access this file directly";	
}
?>
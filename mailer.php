<?php
    // My modifications to mailer script from:
    // http://blog.teamtreehouse.com/create-ajax-contact-form
    // Added input sanitizing to prevent injection

    // Only process POST reqeusts.
		$a = unserialize(file_get_contents('http://www.geoplugin.net/php.gp?ip='.$_SERVER['REMOTE_ADDR']));
		$countrycode= $a['geoplugin_countryCode'];
	
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        // Get the form fields and remove whitespace.
        $name = strip_tags(trim($_POST["name"]));
		$name = str_replace(array("\r","\n"),array(" "," "),$name);
        $email = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);
        $message = trim($_POST["message"]);

        // Check that data was sent to the mailer.
        if ( empty($name) OR empty($message) OR !filter_var($email, FILTER_VALIDATE_EMAIL)) {
            // Set a 400 (bad request) response code and exit.
            http_response_code(400);
            echo "Oops! There was a problem with your submission. Please complete the form and try again.";
            exit;
        }	

        // Set the recipient email address.
        // FIXME: Update this to your desired email address.
        $recipient = "intercoop.delovski@hotmail.com";

        // Set the email subject.
        $subject = "Intercoop website from: $name";

        // Build the email content.
		
        $email_content = "Name: $name\n";
        $email_content .= "Email: $email\n\n";
        $email_content .= "Message:\n$message\n\n";
	    	$email_content .= "IpAddress:\n" .$_SERVER['REMOTE_ADDR'] . "\n";	

        // Build the email headers.
        $email_headers = "From: $name <$email>";
		//$email_respond = "Your email has been received|";
		$message = "\r\n";

		$message .="Thank you for contacting!

Greetings,
intercoop

Email: intercoop.delovski.net
Website: http://intercoop.delovski.net";
	
		$_SERVER['REMOTE_ADDR'];
        // Send the email.
		
		if ($countrycode=='RU' || $countrycode=='UA'){
			header( 'Location: http://google.com' ) ;
		}else{
		
        if (mail($recipient, $subject, $email_content, $email_headers, !$country)) {
            // Set a 200 (okay) response code.
          // http_response_code(200);			   			
           // echo "Thank you. The message has been sent.";			
		
				mail("$email", "$name, $message");
			
        } else {
            // Set a 500 (internal server error) response code.
           // http_response_code(500);
           // echo "Error! Your message was not sent!";
        }
	}

    } else {
        // Not a POST request, set a 403 (forbidden) response code.
        http_response_code(403);
        echo "Some error occured, try again.";
    }
?>

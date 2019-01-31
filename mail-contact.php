<?
if (!empty($_POST)) {
include ("mail-message.php");
}
/* subject */
$Subject = "Message from my web site";

/* To send HTML mail, you can set the Content-type header. */
$headers = "MIME-Version: 1.0\r\n";
$headers .= "Content-type: text/html; charset=utf-8\r\n";

/* additional headers */
$headers .= "From: ". $_POST['name'] ." ". $_POST['company'] ." <".$_POST['fromMail'].">\r\n";

/* and now mail it */


$MyEmail .= "j.walmsley60@gmail.com";

mail($MyEmail, $Subject, $Message, $headers);

header("Location: ./contact-thanks.html");
?>

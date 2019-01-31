<?
foreach ($_POST as $Var=>$Value) {
$$Var = $Value;
}
$Comment = nl2br($message);
$Message =<<< EOF



Name: $name <br>
E-mail: $fromMail <br>
Comment: <br>
$Comment
EOF;

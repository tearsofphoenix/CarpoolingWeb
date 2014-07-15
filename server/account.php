<?php

require_once('database.php');

function loginUser($email, $password, $messageID)
{
	$dbManager = DBManager::manager();

	//not check password here
	//
	$dbManager->runQuery("SELECT * FROM user where email='$email' limit 1", 
						 function ($dbManager, $result) use($messageID)
						{
							$line = mysql_fetch_array($result, MYSQL_ASSOC);
							
							if ($line) 
							{
								success($line, $messageID);
							}else
							{
								fail("User not exists!", $messageID);
							}
						});
}


function registerAccount($email, $password, $properties, $messageID)
{
	$dbManager = DBManager::manager();
	$dbManager->runQuery("insert into account(email, password, properties) "
					   . "values('$email', '$password', '$properties')", 					   
						function($dbManager, $result) use($messageID)
						{
							$error = mysql_error();
							if ($error == '')
							{
								success(null, $messageID);
							}else
							{
								fail($error, $messageID);
							}							
						});
}
  
function dispatchMessage()
{ 
	$action = $_POST['action'];
	$messageID = $_POST['messageID'];

	if (!validateMessage($_POST))
	{
		return ;
	}	
	
	switch($action)
	{
		case 'login':
		{
			loginUser($_POST['username'], $_POST['password'], $messageID);
			break;
		}		 
		default:
		{
			fail('Invalid actions:', $_POST);
			break;
		}
	}
};

dispatchMessage();

?>
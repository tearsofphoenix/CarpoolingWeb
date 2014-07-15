<?php

require_once('database.php');
require_once('uuid.php');

function publishPath($path, $messageID)
{
	$start = $path['start'];
	$end = $path['end'];
	$starter = $path['user_id'];
	$start_date = $path['start_date'];
	$gather_location = $path['gather_location'];
	$gather_time = $path['gather_time'];
	$user_name = $path['user_name'];
	$user_phone = $path['user_phone'];

	$uuid = UUID::v4();
	$dbManager = DBManager::manager();
	$dbManager->runQuery("insert into path(uuid, start, end, starter, start_date, gather_location, gather_time) "
						. " values('$uuid', '$start', '$end', '$starter', '$start_date', '$gather_location', '$gather_time')",
	function($dbManager, $result, $context) use($messageID)
	{
		$error = mysql_error();
		if($error == '')
		{
			success(null, $messageID);
		}else
		{
			fail($error, $messageID);
		}
	});
}

function searchPath($path, $messageID)
{
	$start = $path['start'];
	$end = $path['end'];
	
	$dbManager = DBManager::manager();
	$dbManager->runQuery("select * from path where start like '$start' or end like '$end' ",
	function($dbManager, $result, $context) use($messageID)
	{
		$error = mysql_error();
		if($error == '')
		{
			$data = array();
			while($iLooper = mysql_fetch_array($result, MYSQL_ASSOC))
			{
				array_push($data, $iLooper);
			}
			
			success($data, $messageID);
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
		case 'publish':
		{
			publishPath($_POST, $messageID);
			break;
		}	
		case 'search':
		{
			searchPath($_POST, $messageID);
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
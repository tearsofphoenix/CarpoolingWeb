<?php

require_once('base.php');

class DBManager
{
	private $_link;
	private static $_manager;
	
	public function __construct()
	{		
		$site = '127.0.0.1';		
		$this->_link = mysql_connect($site, 'root', 'root')
	    or fail("Con't connect to server" . mysql_error());
		
		mysql_select_db('carpooling', $this->_link) or die("Con't open database");
	}
	
	public function __destruct()
	{
		mysql_close($this->_link);
	}
	
	public static function manager()
	{
		if(!self::$_manager)
		{
			self::$_manager = new DBManager();
		}
		
		return self::$_manager;
	}
	
	public function runQuery($query, $callback, $context = null)
	{
		mysql_query("SET NAMES 'utf8'");
		
/* 		success($query, 'debug'); */
		
		$result = mysql_query($query, $this->_link) or die("Fail to execte sql:" . mysql_error());
				
		if ($callback)
		{
			call_user_func_array($callback, array($this, $result, $context));
		}
				
		// mysql_free_result($result);		
	}
};

?>
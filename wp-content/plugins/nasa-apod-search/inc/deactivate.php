<?php

/**
* @package NasaApodSearch
* Trigger this file on plugin deactivation
**/

class NasaApodSearchDeactivate {

	static function deactivate(){
		flush_rewrite_rules();
	}
}

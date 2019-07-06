<?php

/**
* @package NasaApodSearch
* Trigger this file on plugin activation
**/

class NasaApodSearchActivate {

	static function activate(){
		flush_rewrite_rules();
	}
}

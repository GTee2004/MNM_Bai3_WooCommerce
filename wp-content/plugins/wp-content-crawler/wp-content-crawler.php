<?php
/*
Plugin Name: WP Content Crawler
Plugin URI: http://wpcontentcrawler.com
Description: Get content from almost any site to your WordPress site. Requires PHP >= 7.2, mbstring, curl, json, dom, fileinfo
Author: Turgut Sarıçam
Text Domain: wp-content-crawler
Version: 1.11.0
Author URI: http://turgutsaricam.com
*/
namespace WPCCrawler;
if(!class_exists('WPTSLMClientt')) {
	class WPTSLMClientt {
		public function __construct($productName, $productId, $type, $apiUrl, $pluginFilePath, $textDomain){}
		public function setUrlHowToFindLicenseKey($url){}
		public function isUserCool() {return true;}
		public function setIsProductPageCallback($callback){}
	}
}
require 'app/vendor/autoload.php';

// Define a path to be able to get the plugin directory. By this way, we'll be able to get the path no matter what names
// the user defined for the WordPress directory names.
if(!defined('WP_CONTENT_CRAWLER_PATH')) {
    /**
     * The plugin path with a trailing slash.
     */
    define('WP_CONTENT_CRAWLER_PATH', str_replace("/", DIRECTORY_SEPARATOR, trailingslashit(plugin_dir_path(__FILE__))));
}

// Initialize everything.
\WPCCrawler\WPCCrawler::getInstance();

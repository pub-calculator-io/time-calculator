<?php
/*
Plugin Name: CI Time calculator
Plugin URI: https://www.calculator.io/time-calculator/
Description: This free time calculator allows you to add and subtract time values using days, hours, minutes, and seconds. Learn about the different concepts of time here as well.
Version: 1.0.0
Author: Time Calculator / www.calculator.io
Author URI: https://www.calculator.io/
License: GPLv2 or later
Text Domain: ci_time_calculator
*/

if (!defined('ABSPATH')) exit;

if (!function_exists('add_shortcode')) return "No direct call for Time Calculator by www.calculator.io";

function display_calcio_ci_time_calculator(){
    $page = 'index.html';
    return '<h2><img src="' . esc_url(plugins_url('assets/images/icon-48.png', __FILE__ )) . '" width="48" height="48">Time Calculator</h2><div><iframe style="background:transparent; overflow: scroll" src="' . esc_url(plugins_url($page, __FILE__ )) . '" width="100%" frameBorder="0" allowtransparency="true" onload="this.style.height = this.contentWindow.document.documentElement.scrollHeight + \'px\';" id="ci_time_calculator_iframe"></iframe></div>';
}


add_shortcode( 'ci_time_calculator', 'display_calcio_ci_time_calculator' );
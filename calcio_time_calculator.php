<?php
/*
Plugin Name: Time Calculator by Calculator.iO
Plugin URI: https://www.calculator.io/time-calculator/
Description: Easily add or subtract days, hours, minutes, and seconds with our free Time Calculator. Calculate time durations instantly and accurately.
Version: 1.0.0
Author: www.calculator.io / Time Calculator
Author URI: https://www.calculator.io/
License: GPLv2 or later
Text Domain: calcio_time_calculator
*/

if (!defined('ABSPATH')) exit;

if (!function_exists('add_shortcode')) return "No direct call for Time Calculator by www.calculator.io";

function calcio_time_calculator_shortcode(){
    $page = 'index.html';
    return '<h2><img src="' . esc_url(plugins_url('assets/images/icon-48.png', __FILE__ )) . '" width="48" height="48">Time Calculator</h2><div><iframe style="background:transparent; overflow: scroll" src="' . esc_url(plugins_url($page, __FILE__ )) . '" width="100%" frameBorder="0" allowtransparency="true" onload="this.style.height = this.contentWindow.document.documentElement.scrollHeight + \'px\';" id="calcio_time_calculator_iframe"></iframe></div>';
}


add_shortcode( 'calcio_time_calculator', 'calcio_time_calculator_shortcode' );
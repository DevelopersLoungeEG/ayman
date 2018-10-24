/*global $*/
$(function () {
    'use strict';
    $('.thumbnails .thum-info').click(function () {
        $(this).addClass('active').siblings().removeClass('active');
    });
    $('.thumbnails .thum-info').mouseleave(function () {
        $(this).removeClass('active');
    });
});
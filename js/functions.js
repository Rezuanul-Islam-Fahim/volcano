"use strict";

$(document).ready(function() {

  // Container height
  // =====================
  $('.container').each(function() {
    $(this).css("height", $(window).height());
  });

  $(window).resize(function() {
    $('.container').each(function() {
      $(this).css("height", $(window).height());
    });
  })

  // Preloader
  // =======================
  $('.js-preloader').preloadinator({
    minTime: 2000
  });

});

// JavaScript Document
// Accordion/Tabs from Bourbon Refills
/*
$(document).ready(function () {
  $('.accordion-tabs-minimal').each(function(index) {
    $(this).children('li').first().children('a').addClass('is-active').next().addClass('is-open').show();
  });
  $('.accordion-tabs-minimal').on('click', 'li > a.tab-link', function(event) {
    if (!$(this).hasClass('hidden')) {
      event.preventDefault();
      var accordionTabs = $(this).closest('.accordion-tabs-minimal');
      $(this).next().toggleClass('hidden').toggle();
      accordionTabs.find('hidden').removeClass('hidden').hide();

    
    } else {
      event.preventDefault();
      $(this).addClass('hidden');
    }
  });
}); */

  $(document).ready(function() {
    $(".flip").click(function() {
      $(".tab-content").slideToggle("slow");
    });
  });

// Centered Top Navigation from Bourbon Refills
$(document).ready(function() {
  var menuToggle = $('#js-centered-navigation-mobile-menu').unbind();
  $('#js-centered-navigation-menu').removeClass("show");
  
  menuToggle.on('click', function(e) {
    e.preventDefault();
    $('#js-centered-navigation-menu').slideToggle(function(){
      if($('#js-centered-navigation-menu').is(':hidden')) {
        $('#js-centered-navigation-menu').removeAttr('style');
      }
    });
  });
});

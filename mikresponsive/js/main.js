jQuery( document ).ready(function() {
    jQuery('#homebtn').click(function(){
       jQuery('#menu1btn, #menu2btn, #menu3btn').parent().removeClass('active');
       jQuery(this).parent().addClass('active');
       jQuery('#table-onetab').css("display", "table");
       jQuery('#table-twotab, #table-threetab, #table-fourtab').css("display", "none");
   });
  jQuery('#menu1btn').click(function(){
       jQuery('#homebtn, #menu2btn, #menu3btn').parent().removeClass('active');
       jQuery(this).parent().addClass('active');
       jQuery('#table-twotab').css("display", "table");
       jQuery('#table-onetab, #table-threetab, #table-fourtab').css("display", "none");
   });
   jQuery('#menu2btn').click(function(){
      jQuery('#menu1btn, #homebtn, #menu3btn').parent().removeClass('active');
       jQuery(this).parent().addClass('active');
       jQuery('#table-threetab').css("display", "table");
       jQuery('#table-onetab, #table-twotab, #table-fourtab').css("display", "none");
   });
  jQuery('#menu3btn').click(function(){
       jQuery('#menu1btn, #menu2btn, #home').parent().removeClass('active');
       jQuery(this).parent().addClass('active');
       jQuery('#table-fourtab').css("display", "table");
       jQuery('#table-onetab, #table-twotab, #table-threetab').css("display", "none");
   });
});   
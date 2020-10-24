jQuery(function($){
    $('#month').mask('99');
    $('#year').mask('99');
     $('#cvv').mask('999');
    $('#number-card').mask('9999 9999 9999 9999');
});
var maxLen = 21;
  $('#name-card').keyup( function(){
    var $this = $(this);
    if($this.val().length > maxLen)
      $this.val($this.val().substr(0, maxLen));			
    });
$('#name-card').on('input', function() {
    $(this).val($(this).val().replace(/[0-9/*+,.]/, ''))
});
$("#number-card").keyup(function () {
 $("#text-num").text($(this).val());
});
$("#name-card").keyup(function () {
 $("#text-name").text($(this).val());
});

$("#month").keyup(function () {
 $("#text-date-month").text($(this).val());
});

$("#year").keyup(function () {
 $("#text-date-year").text($(this).val());
});
$("#cvv").keyup(function () {
 $("#text-cvv").text($(this).val());
});


$( "#cvv" ).focus(function() {
 $('.card').addClass('card-flip')
});

/* убран фокус на элемент */
$( "#cvv" ).focusout(function() {
  $('.card').removeClass('card-flip')
});

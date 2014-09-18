
// Custom JS for the Theme

// Config 
//-------------------------------------------------------------

var companyName = "HydraTech"; // Enter your event title
var product_id='';

// Initialize Tooltip  
//-------------------------------------------------------------

$('.my-tooltip').tooltip();



// Initialize jQuery Placeholder  
//-------------------------------------------------------------


$('input, textarea').placeholder();




// Toggle Header / Nav  
//-------------------------------------------------------------

$(document).on("scroll",function(){
  if($(document).scrollTop()>39){ 
    $("header").removeClass("large").addClass("small");
  }
  else{
    $("header").removeClass("small").addClass("large");
  }
});



// Vehicles Tabs / Slider  
//-------------------------------------------------------------

$(".vehicle-data").hide();
var activeVehicleData = $(".vehicle-nav .active a").attr("href");
$(activeVehicleData).show(); 

$(".vehicle-nav li").on("click", function(){

  $(".vehicle-nav .active").removeClass("active");
  $(this).addClass('active');

  $(activeVehicleData).fadeOut( "slow", function() {
    activeVehicleData = $(".vehicle-nav .active a").attr("href");
    $(activeVehicleData).fadeIn("slow", function() {});
  });

  return false;
});



// Vehicles Responsive Nav  
//-------------------------------------------------------------

$("<div />").appendTo("#vehicle-nav-container").addClass("styled-select-vehicle-data");
$("<select />").appendTo(".styled-select-vehicle-data").addClass("vehicle-data-select");
$("#vehicle-nav-container a").each(function() {
  var el = $(this);
  $("<option />", {
    "value"   : el.attr("href"),
    "text"    : el.text()
  }).appendTo("#vehicle-nav-container select");
});

$(".vehicle-data-select").change(function(){
  $(activeVehicleData).fadeOut( "slow", function() {
    activeVehicleData = $(".vehicle-data-select").val();
    $(activeVehicleData).fadeIn("slow", function() {});
  });

  return false;
});







// Toggle Drop-Off Location
//-------------------------------------------------------------------------------
$(".input-group.drop-off").hide();
$(".different-drop-off").on("click", function(){
	$(".input-group.drop-off").toggle();
  $(".autocomplete-suggestions").css("width", $('.pick-up .autocomplete-location').outerWidth());
  return false;
});



// Scroll to Top Button
//-------------------------------------------------------------------------------

$(window).scroll(function(){
  if ($(this).scrollTop() > 100) {
    $('.scrollup').removeClass("animated fadeOutRight");
    $('.scrollup').fadeIn().addClass("animated fadeInRight");
  } else {
    $('.scrollup').removeClass("animated fadeInRight");
    $('.scrollup').fadeOut().addClass("animated fadeOutRight");
  }
});

$('.scrollup, .navbar-brand').click(function(){
  $("html, body").animate({ scrollTop: 0 }, 'slow', function(){
    $("nav li a").removeClass('active');
  });
  return false;
});





// Scroll To Animation
//-------------------------------------------------------------------------------

var scrollTo = $(".scroll-to");

scrollTo.click( function(event) {
  $('.modal').modal('hide');
  var position = $(document).scrollTop();
  var scrollOffset = 260;

  if(position > 39)
  {
    scrollOffset = 114;
  }

  var marker = $(this).attr('href');
  $('html, body').animate({ scrollTop: $(marker).offset().top - scrollOffset}, 'slow');
  return false;
});








// Quick contact
//-------------------------------------------------------------------------------

$( "#quick-contact" ).submit(function() {
  $('#quick-contact-form-msg').addClass('hidden');
  $('#quick-contact-form-msg').removeClass('alert-success');
  $('#quick-contact-form-msg').removeClass('alert-danger');
  $("#quick-contact #first-name").parent().removeClass('has-error')
  $("#quick-contact #first-name").parent().removeClass('has-error')
  $("#quick-contact #point-where").val('Форма1')
    var error=0;
    if (validateNotEmpty($("#quick-contact #first-name").val())) {
        error=1
        $("#quick-contact #first-name").parent().addClass('has-error')
        
    };
    if (validateNotEmpty($("#quick-contact #phone-number").val())) {
        error=1
        $("#quick-contact #phone-number").parent().addClass('has-error')
    };


if (error==0) {


  $('#quick-contact-form input[type=submit]').attr('disabled', 'disabled');

  $.ajax({
    type: "POST",
    url: "php/quick-contact.php",
    data: $("#quick-contact").serialize(),
    dataType: "json",
    success: function(data) {
        
      if('success' == data.result)
      {
        $('#quick-contact-form-msg').css('visibility','visible').hide().fadeIn().removeClass('hidden').addClass('alert-success');
        $('#quick-contact-form-msg').html("Вас успішно записано. Найближчим часом з вами зв'яжеться наш менеджер.");
        $('#quick-contact-form input[type=submit]').removeAttr('disabled');
        setTimeout(function(){
          $('#quick-contact-form-msg').addClass('hidden');
          $('#quick-contact-form-msg').removeClass('alert-success');
          $('#quick-contact')[0].reset();
          
        }, 5000);
      }

      if('error' == data.result)
      {
        $('#quick-contact-form-msg').css('visibility','visible').hide().fadeIn().removeClass('hidden').addClass('alert-danger');
        $('#quick-contact-form-msg').html("Нажаль вас не вдалось записати. Відбулась помилка зєднання з сервером");
        $('#quick-contact-form input[type=submit]').removeAttr('disabled');

      }

    },
    error:function(data){
        $('#quick-contact-form-msg').css('visibility','visible').hide().fadeIn().removeClass('hidden').addClass('alert-danger');
        $('#quick-contact-form-msg').html("Нажаль вас не вдалось записати. Відбулась помилка зєднання з сервером");
        $('#quick-contact-form input[type=submit]').removeAttr('disabled');
    }
  });



        




}else{
    $('#quick-contact-form-msg').css('visibility','visible').hide().fadeIn().removeClass('hidden').addClass('alert-danger');
    $('#quick-contact-form-msg').html("Ви не заповнили усі поля");
    $('#quick-contact-form input[type=submit]').removeAttr('disabled');
}//valid data



  return false;
});






// Newsletter Form
//-------------------------------------------------------------------------------

$( "#newsletter-form" ).submit(function() {

  $('#newsletter-form-msg').addClass('hidden');
  $('#newsletter-form-msg').removeClass('alert-success');
  $('#newsletter-form-msg').removeClass('alert-danger');
  $("#newsletter-form #first-name").parent().removeClass('has-error')
  $("#newsletter-form #first-name").parent().removeClass('has-error')
  $("#newsletter-form #point-where").val('Форма2')
    var error=0;
    if (validateNotEmpty($("#newsletter-form #first-name").val())) {
        error=1
        $("#newsletter-form #first-name").parent().addClass('has-error')
        
    };
    if (validateNotEmpty($("#newsletter-form #phone-number").val())) {
        error=1
        $("#newsletter-form #phone-number").parent().addClass('has-error')
    };


  if (error==0) {
  console.log($("#newsletter-form").serialize())
  $.ajax({
    type: "POST",
    url: "php/quick-contact.php",
    data: $("#newsletter-form").serialize(),
    dataType: "json",
    success: function(data) {
        console.log("result of operation is= " + data.result);
      if('success' == data.result)
      {
        $('#newsletter-form-msg').css('visibility','visible').hide().fadeIn().removeClass('hidden').addClass('alert-success');
        $('#newsletter-form-msg').html("Вас успішно записано. Найближчим часом з вами зв'яжеться наш менеджер.");
        $('#newsletter-form input[type=submit]').removeAttr('disabled');
        
        setTimeout(function(){
          $('#newsletter-form-msg').addClass('hidden');
          $('#newsletter-form-msg').removeClass('alert-success');
          $('#newsletter-form')[0].reset();
          
        }, 5000);        
      }

      if('error' == data.result)
      {
        $('#newsletter-form-msg').css('visibility','visible').hide().fadeIn().removeClass('hidden').addClass('alert-danger');
        $('#newsletter-form-msg').html("Нажаль вас не вдалось записати. Відбулась помилка зєднання з сервером");
        $('#newsletter-form input[type=submit]').removeAttr('disabled');
      }

    },
    error:function(data){
        $('#newsletter-form-msg').css('visibility','visible').hide().fadeIn().removeClass('hidden').addClass('alert-danger');
        $('#newsletter-form-msg').html("Нажаль вас не вдалось записати. Відбулась помилка зєднання з сервером");
        $('#newsletter-form input[type=submit]').removeAttr('disabled');
    }
  });

  } else{

    $('#newsletter-form-msg').css('visibility','visible').hide().fadeIn().removeClass('hidden').addClass('alert-danger');
    $('#newsletter-form-msg').html("Ви не заповнили усі поля");
    $('#quick-form input[type=submit]').removeAttr('disabled');

  };
  return false;
});



// Contact Form
//-------------------------------------------------------------------------------

$( "#contact-form" ).submit(function() {

  $('#contact-form-msg').addClass('hidden');
  $('#contact-form-msg').removeClass('alert-success');
  $('#contact-form-msg').removeClass('alert-danger');

  $('#contact-form input[type=submit]').attr('disabled', 'disabled');
  $("#contact-form #point-where").val('Форма3')
    var error=0;
    if (validateNotEmpty($("#contact-form #first-name").val())) {
        error=1
        $("#contact-form #first-name").parent().addClass('has-error')
        
    };
    if (validateNotEmpty($("#contact-form #phone-number").val())) {
        error=1
        $("#contact-form #phone-number").parent().addClass('has-error')
    };


    if (error==0) {
  $.ajax({
    type: "POST",
    url: "php/full-contact.php",
    data: $("#contact-form").serialize(),
    dataType: "json",
    success: function(data) {

      if('success' == data.result)
      {
        $('#contact-form-msg').css('visibility','visible').hide().fadeIn().removeClass('hidden').addClass('alert-success');
        $('#contact-form-msg').html("Вас успішно записано. Найближчим часом з вами зв'яжеться наш менеджер.");
        $('#contact-form input[type=submit]').removeAttr('disabled');
        $('#contact-form')[0].reset();
        setTimeout(function(){
          $('#contact-form-msg').addClass('hidden');
          $('#contact-form-msg').removeClass('alert-success');
          $('#contact-form')[0].reset();
          
        }, 5000);         
      }

      if('error' == data.result)
      {
        $('#contact-form-msg').css('visibility','visible').hide().fadeIn().removeClass('hidden').addClass('alert-danger');
        $('#contact-form-msg').html("Нажаль вас не вдалось записати. Відбулась помилка зєднання з сервером");
        $('#contact-form input[type=submit]').removeAttr('disabled');
      }

    },
    error:function(data){
        $('#contact-form-msg').css('visibility','visible').hide().fadeIn().removeClass('hidden').addClass('alert-danger');
        $('#contact-form-msg').html("Нажаль вас не вдалось записати. Відбулась помилка зєднання з сервером");
        $('#contact-form input[type=submit]').removeAttr('disabled');
    }
  });




  } else{
        $('#contact-form-msg').css('visibility','visible').hide().fadeIn().removeClass('hidden').addClass('alert-danger');
        $('#contact-form-msg').html("Нажаль вас не вдалось записати. Відбулась помилка зєднання з сервером");
        $('#contact-form input[type=submit]').removeAttr('disabled');
  };
  return false;
});





// Check Out Form
//-------------------------------------------------------------------------------

$( "#checkout-form" ).submit(function() {

  $('#checkout-form-msg').addClass('hidden');
  $('#checkout-form-msg').removeClass('alert-success');
  $('#checkout-form-msg').removeClass('alert-danger');

  $('#checkout-form button[type=submit]').attr('disabled', 'disabled');
  $("#checkout-form #point-where").val('Форма4')
    var error=0;
    if (validateNotEmpty($("#checkout-form #first-name").val())) {
        error=1
        $("#checkout-form #first-name").parent().addClass('has-error')
        
    };
    if (validateNotEmpty($("#checkout-form #phone-number").val())) {
        error=1
        $("#checkout-form #phone-number").parent().addClass('has-error')
    };
    if (error==0) {
  $.ajax({
    type: "POST",
    url: "php/full-contact.php",
    data: $("#checkout-form").serialize(),
    dataType: "json",
    success: function(data) {

      if('success' == data.result)
      {
        $('#checkout-form-msg').css('visibility','visible').hide().fadeIn().removeClass('hidden').addClass('alert-success');
        $('#checkout-form-msg').html("Вас успішно записано. Найближчим часом з вами зв'яжеться наш менеджер.");
        $('#checkout-form input[type=submit]').removeAttr('disabled');

        setTimeout(function(){
          $('.modal').modal('hide');
          $('#checkout-form-msg').addClass('hidden');
          $('#checkout-form-msg').removeClass('alert-success');

          $('#checkout-form')[0].reset();

        }, 5000);

      }

      if('error' == data.result)
      {
        $('#checkout-form-msg').css('visibility','visible').hide().fadeIn().removeClass('hidden').addClass('alert-danger');
        $('#checkout-form-msg').html("Нажаль вас не вдалось записати. Відбулась помилка зєднання з сервером");
        $('#checkout-form input[type=submit]').removeAttr('disabled');
      }

    },
    error:function(data){
        $('#checkout-form-msg').css('visibility','visible').hide().fadeIn().removeClass('hidden').addClass('alert-danger');
        $('#checkout-form-msg').html("Нажаль вас не вдалось записати. Відбулась помилка зєднання з сервером");
        $('#checkout-form input[type=submit]').removeAttr('disabled');
    }
  });


    } else{
        $('#checkout-form-msg').css('visibility','visible').hide().fadeIn().removeClass('hidden').addClass('alert-danger');
        $('#checkout-form-msg').html("Нажаль вас не вдалось записати. Відбулась помилка зєднання з сервером");
        $('#checkout-form input[type=submit]').removeAttr('disabled');        
    };

return false;
});








// Hydra Select Form
//-------------------------------------------------------------------------------
$(".reserve-button").click(function () {
  product_id=$(this).data("product");
  
  var selectedProduct=$('a[href="#vehicle-'+product_id+'"]').html()
  var selectImage="img/vehicle" + product_id + ".jpg"

  $("#selected-product-ph").html(selectedProduct);
  $("#message").val(selectedProduct);
  $('#selected-vehicle-image').attr('src',selectImage)
  $('#checkoutModal').modal();

  
})





$( "#car-select-form" ).submit(function() {

  var selectedHydra = $("#car-select").find(":selected").text();
  var selectedHydraVal = $("#car-select").find(":selected").val();
  var selectedHydraImage = $("#car-select").val();

  var clientName = $("#first-name").val();
  var clientPhone = $("#phone-number").val();
  var clientEmail = $("#guest-email").val();

  var pickupLocation = $("#pick-up-location").val();
  var dropoffLocation = $("#drop-off-location").val();
  var pickUpDate = $("#pick-up-date").val();
  var pickUpTime = $("#pick-up-time").val();
  var dropOffDate = $("#drop-off-date").val();
  var dropOffTime = $("#drop-off-time").val();

  var error = 0;

  if(validateNotEmpty(clientName)) { error = 1; }
  if(validateNotEmpty(clientPhone)) { error = 1; }
  if(validateNotEmpty(clientEmail)) { error = 1; }


  if(0 == error)
  {

    $("#selected-car-ph").html(selectedHydra);
    $("#selected-car").val(selectedHydra);
    $("#selected-vehicle-image").attr('src', selectedHydraImage);

    $("#first-name-ph").html(clientName)
    $("#first-name-fo").val(clientName)

    $("#phone-number-ph").html(clientPhone)
    $("#phone-number-fo").val(clientPhone)

    $("#guest-email-ph").html(clientEmail)
    $("#guest-email-fo").val(clientEmail)

    $('#checkoutModal').modal();
  }
  else
  {
    $('#car-select-form-msg').css('visibility','visible').hide().fadeIn().removeClass('hidden').delay(2000).fadeOut();
  }

  return false;
});




// Not Empty Validator Function
//-------------------------------------------------------------------------------

function validateNotEmpty(data){
  if (data == ''){
    return true;
  }else{
    return false;
  }
}


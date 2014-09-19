
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
    if ((validateNotEmpty($("#quick-contact #phone-number").val()))||(validatePhone($("#quick-contact #phone-number").val()))) {
        error=1
        $("#quick-contact #phone-number").parent().addClass('has-error')
    };


if (error==0) {

  console.log('i`m send = ' + $("#quick-contact").serialize());
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
        $('#quick-contact-form-msg').html($("#quick-contact #first-name").val() + ", Вас успішно записано. Найближчим часом з вами зв'яжеться наш менеджер.");
        $('#quick-contact-form input[type=submit]').removeAttr('disabled');
        console.log('result message=   ' + data.msg[0] );
        setTimeout(function(){
          $('#quick-contact-form-msg').addClass('hidden');
          $('#quick-contact-form-msg').removeClass('alert-success');
          $('#quick-contact')[0].reset();
          
        }, 5000);
      }

      if('error' == data.result)
      {
        $('#quick-contact-form-msg').css('visibility','visible').hide().fadeIn().removeClass('hidden').addClass('alert-danger');
        $('#quick-contact-form-msg').html("Нажаль вас не вдалось записати.");
        $('#quick-contact-form input[type=submit]').removeAttr('disabled');

      }

    },
    error:function(data){
        $('#quick-contact-form-msg').css('visibility','visible').hide().fadeIn().removeClass('hidden').addClass('alert-danger');
        $('#quick-contact-form-msg').html("Нажаль вас не вдалось записати. ");
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
    if ((validateNotEmpty($("#newsletter-form #phone-number").val()))||(validatePhone($("#newsletter-form #phone-number").val()))) {
        error=1
        $("#newsletter-form #phone-number").parent().addClass('has-error')
    };


  if (error==0) {
  console.log('i`m send = ' + $("#newsletter-form").serialize());
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
        $('#newsletter-form-msg').html($("#newsletter-form #first-name").val() + ", Вас успішно записано. Найближчим часом з вами зв'яжеться наш менеджер.");
        $('#newsletter-form input[type=submit]').removeAttr('disabled');
        console.log('result message=   ' + data.msg[0] );
        setTimeout(function(){
          $('#newsletter-form-msg').addClass('hidden');
          $('#newsletter-form-msg').removeClass('alert-success');
          $('#newsletter-form')[0].reset();
          
        }, 5000);        
      }

      if('error' == data.result)
      {
        $('#newsletter-form-msg').css('visibility','visible').hide().fadeIn().removeClass('hidden').addClass('alert-danger');
        $('#newsletter-form-msg').html("Нажаль вас не вдалось записати.");
        $('#newsletter-form input[type=submit]').removeAttr('disabled');
      }

    },
    error:function(data){
        $('#newsletter-form-msg').css('visibility','visible').hide().fadeIn().removeClass('hidden').addClass('alert-danger');
        $('#newsletter-form-msg').html("Нажаль вас не вдалось записати.");
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
    $("#contact-form #first-name").parent().removeClass('has-error')
    $("#contact-form #phone-number").parent().removeClass('has-error')
    $("#contact-form #guest-email").parent().removeClass('has-error')
    $("#contact-form #message").parent().removeClass('has-error')
    var error=0;
    if (validateNotEmpty($("#contact-form #first-name").val())) {
        error=1
        $("#contact-form #first-name").parent().addClass('has-error')
        
    };
    if ((validateNotEmpty($("#contact-form #phone-number").val()))||(validatePhone($("#contact-form #phone-number").val()))) {
        error=1
        $("#contact-form #phone-number").parent().addClass('has-error')
    };
    if ((validateNotEmpty($("#contact-form #guest-email").val()))||(!validateEmail($("#contact-form #guest-email").val()))) {
        error=1
        $("#contact-form #guest-email").parent().addClass('has-error')
        
    };
    if (validateNotEmpty($("#contact-form #message").val())) {
        error=1
        $("#contact-form #message").parent().addClass('has-error')
    };




    if (error==0) {
        console.log('i`m send = ' + $("#contact-form").serialize());
  $.ajax({
    type: "POST",
    url: "php/full-contact.php",
    data: $("#contact-form").serialize(),
    dataType: "json",
    success: function(data) {

      if('success' == data.result)
      {
        $('#contact-form-msg').css('visibility','visible').hide().fadeIn().removeClass('hidden').addClass('alert-success');
        $('#contact-form-msg').html($("#contact-form #first-name").val() + ", Вас успішно записано. Найближчим часом з вами зв'яжеться наш менеджер.");
        $('#contact-form input[type=submit]').removeAttr('disabled');
        $('#contact-form')[0].reset();
        console.log('result message=   ' + data.msg[0] );
        setTimeout(function(){
          $('#contact-form-msg').addClass('hidden');
          $('#contact-form-msg').removeClass('alert-success');
          $('#contact-form')[0].reset();
          
        }, 5000);         
      }

      if('error' == data.result)
      {
        $('#contact-form-msg').css('visibility','visible').hide().fadeIn().removeClass('hidden').addClass('alert-danger');
        $('#contact-form-msg').html("Нажаль вас не вдалось записати.");
        $('#contact-form input[type=submit]').removeAttr('disabled');
      }

    },
    error:function(data){
        $('#contact-form-msg').css('visibility','visible').hide().fadeIn().removeClass('hidden').addClass('alert-danger');
        $('#contact-form-msg').html("Нажаль вас не вдалось записати.");
        $('#contact-form input[type=submit]').removeAttr('disabled');
    }
  });




  } else{
        $('#contact-form-msg').css('visibility','visible').hide().fadeIn().removeClass('hidden').addClass('alert-danger');
        $('#contact-form-msg').html("Ви не заповнили усі поля");
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
    $("#checkout-form #first-name").parent().removeClass('has-error')
    $("#checkout-form #phone-number").parent().removeClass('has-error')
    $("#checkout-form #guest-email").parent().removeClass('has-error')
    $("#checkout-form #message").parent().removeClass('has-error')


    var error=0;
    if (validateNotEmpty($("#checkout-form #first-name").val())) {
        error=1
        $("#checkout-form #first-name").parent().addClass('has-error')
        
    };
    if ((validateNotEmpty($("#checkout-form #phone-number").val()))||(validatePhone($("#checkout-form #phone-number").val()))) {
        error=1
        $("#checkout-form #phone-number").parent().addClass('has-error')
    };
    if ((validateNotEmpty($("#checkout-form #guest-email").val()))||(!validateEmail($("#checkout-form #guest-email").val()))) {
        error=1
        $("#checkout-form #guest-email").parent().addClass('has-error')
        
    };
    if (validateNotEmpty($("#checkout-form #message").val())) {
        error=1
        $("#checkout-form #message").parent().addClass('has-error')
    };
    if (error==0) {
        console.log('i`m send = ' + $("#checkout-form").serialize());
  $.ajax({
    type: "POST",
    url: "php/full-contact.php",
    data: $("#checkout-form").serialize(),
    dataType: "json",
    success: function(data) {

      if('success' == data.result)
      {
        $('#checkout-form-msg').css('visibility','visible').hide().fadeIn().removeClass('hidden').addClass('alert-success');
        $('#checkout-form-msg').html($("#checkout-form #first-name").val() + ", Вас успішно записано. Найближчим часом з вами зв'яжеться наш менеджер.");
        $('#checkout-form input[type=submit]').removeAttr('disabled');
        console.log('result message=   ' + data.msg[0] );

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
        $('#checkout-form-msg').html("Нажаль вас не вдалось записати.");
        $('#checkout-form input[type=submit]').removeAttr('disabled');
      }

    },
    error:function(data){
        $('#checkout-form-msg').css('visibility','visible').hide().fadeIn().removeClass('hidden').addClass('alert-danger');
        $('#checkout-form-msg').html("Нажаль вас не вдалось записати.");
        $('#checkout-form input[type=submit]').removeAttr('disabled');
    }
  });


    } else{
        $('#checkout-form-msg').css('visibility','visible').hide().fadeIn().removeClass('hidden').addClass('alert-danger');
        $('#checkout-form-msg').html("Ви не заповнили усі поля");
        $('#checkout-form button[type=submit]').removeAttr('disabled');        
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








// Not Empty Validator Function
//-------------------------------------------------------------------------------

function validateNotEmpty(data){
  if (data == ''){
    return true;
  }else{
    return false;
  }
}

/*validateEmail if TRUE is validate if false no validate*/
function validateEmail(email) { 
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
} 

/*validatePhone if true is no validate if FALSE is validate*/
function validatePhone(phone){
    phone = phone.replace(/[^0-9\+\ ]/g, '');
    if(phone.length <= 7) { 
       return true;
    } else {
      return false;
    } 
}


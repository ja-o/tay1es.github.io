//BASICALLY DOES THE FANCY NAVBAR ANIMATION
// jQuery to collapse the navbar on scroll
function collapseNavbar() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
}

$(window).scroll(collapseNavbar);
$(document).ready(collapseNavbar);

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $(this).closest('.collapse').collapse('toggle');
});
///////////////////////////////////////////

// TYPED JS IMPLEMENTATION
  document.addEventListener('DOMContentLoaded', function(){
      Typed.new('.element', {
        strings: ["Increase Productivity", "Organize Projects", "Collaborate with Others", "See Activity in Real time"],
        typeSpeed: 0,
        loop: true
      });
  });

// GOOGLE OAUTH2 SIGN IN
var isAdmin = false;
      function onSignIn(googleUser) {
        // Useful data for your client-side scripts:
        console.log("googleUser: " + googleUser);
        userinfo = googleUser;
        var profile = googleUser.getBasicProfile();
        console.log("ID: " + profile.getId()); 
        console.log("Name: " + profile.getName());
        console.log("Image URL: " + profile.getImageUrl());
        console.log("Email: " + profile.getEmail());
        // The ID token you need to pass to your backend:
        var id_token = googleUser.getAuthResponse().id_token;
        console.log("ID Token: " + id_token);
        var admin = ["117366956372745871124", "112347100247659202914"];
        //alert($.inArray(profile.getId() + "", admin));
        if($.inArray(profile.getId() + "", admin) != -1) {
          alert("You are an admin!");
        }
        var profInfo = "ID: " + profile.getId();
        profInfo += "\nName: " + profile.getName();
        profInfo += "\nImage URL: " + profile.getImageUrl();
        profInfo += "\nEmail: " + profile.getEmail();
        profInfo += "googleUser: " + googleUser;
        alert("Welcome " +profile.getName()+ "! Here is some basic profile info:\n" + profInfo);
      };
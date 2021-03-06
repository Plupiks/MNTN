const logoIcon = $('.account-body .account-icon')
const logoText = $('.account-title')
const logoTextMob = $('.account-title--mobile')
const body = $('.account-body')
const bodyMob = $('.account-body-mobile')
const navButton = $('.burger-menu')
const mobileMenu = $('.mobile-menu')
const mediaQuery = window.matchMedia('(max-width: 800px)')
const mediaQueryMin = window.matchMedia('(min-width: 800px)')


if ($(window).width() > 800) {
  mobileMenu.removeClass('mobile-menu-active')
};


navButton.on('click', function(e){
  e.stopPropagation();
  mobileMenu.toggleClass('mobile-menu-active');
  $('.burger-menu--close').toggleClass('burger-menu--close-active')
  $('.burger-menu--menu').toggleClass('burger-menu--menu-disable')
});




body.on('mouseenter', function(){
  $(logoIcon).animate({ "left": "8px", "opacity": "1" }, "600" );
  $(logoText).animate({ "left": "8px" }, "600" ).css({"color": "#fbd784"});
});

body.on('mouseleave', function(){
  $(logoIcon).animate({ "left": "24px", "opacity": "0" }, "600" )
  $(logoText).animate({ "left": "0" }, "600" ).css({"color": "#fff"});
});

bodyMob.on('mouseenter', function(){
  logoTextMob.css({'color': '#fbd784'})
});

bodyMob.on('mouseleave', function(){
  logoTextMob.css({'color': '#fff'})
});

$(window).click(function(){
  if (mobileMenu.hasClass('mobile-menu-active')) {
    mobileMenu.toggleClass('mobile-menu-active');
    $('.burger-menu--close').toggleClass('burger-menu--close-active')
    $('.burger-menu--menu').toggleClass('burger-menu--menu-disable')
  }
})

function menuRemoveClass() {
  if($(window).width() > 800) {
    $('.mobile-menu').removeClass('mobile-menu-active');
    $('.burger-menu--menu').removeClass('burger-menu--menu-disable')
    $('.burger-menu--close').removeClass('burger-menu--close-active')
  }
}

$(window).on('resize',function(){
  menuRemoveClass();
})

mobileMenu.click(function(e){
  e.stopPropagation();
})

 
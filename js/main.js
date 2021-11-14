const logoIcon = $('.account-icon')
const logoText = $('.account-title')
const body = $('.account-body')
const navButton = $('.burger-menu')
const mobileMenu = $('.mobile-menu')
const mediaQuery = window.matchMedia('(max-width: 800px)')
const mediaQueryMin = window.matchMedia('(min-width: 800px)')

function menuOpen() {
  if (mediaQuery.matches) {
    navButton.on('click', function(e){
      e.stopPropagation();
      mobileMenu.toggleClass('mobile-menu-active');
      $('.burger-menu--close').toggleClass('burger-menu--close-active')
      $('.burger-menu--menu').toggleClass('burger-menu--menu-disable')
    });
  } else {
      mobileMenu.removeClass('mobile-menu-active');
  }
}



if (mediaQueryMin.matches) {
  body.on('mouseenter', function(){
    $(logoIcon).animate({ "left": "8px", "opacity": "1" }, "600" );
    $(logoText).animate({ "left": "8px" }, "600" ).css({"color": "#fbd784"});
  });

  body.on('mouseleave', function(){
    $(logoIcon).animate({ "left": "24px", "opacity": "0" }, "600" )
    $(logoText).animate({ "left": "0" }, "600" ).css({"color": "#fff"});
  });
}

if (mediaQuery.matches) {
  body.on('mouseenter', function(){
    $(logoIcon).animate({ "left": "18px", "opacity": "1" }, "600" );
    $(logoText).animate({ "left": "18px" }, "600" ).css({"color": "#fbd784"});
  });

  body.on('mouseleave', function(){
    $(logoIcon).animate({ "left": "40px", "opacity": "0" }, "600" )
    $(logoText).animate({ "left": "0" }, "600" ).css({"color": "#fff"});
  });
}


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

$(window).on('resize load',function(){
  menuRemoveClass();
  menuOpen();
})


mobileMenu.click(function(e){
  e.stopPropagation();
})

 

var logoIcon = $('.account-icon')
var logoText = $('.account-title')
var body = $('.account-body')


body.mouseenter(function(){
  $(logoIcon).animate({ "left": "8px", "opacity": "1" }, "600" );
}).mouseleave(function(){
  $(logoIcon).animate({ "left": "24px", "opacity": "0" }, "600" );
})

body.mouseenter(function(){
  $(logoText).animate({ "left": "8px" }, "600" );
}).mouseleave(function(){
  $(logoText).animate({ "left": "0" }, "600" );
})

 

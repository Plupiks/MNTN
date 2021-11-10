var logoIcon = $('.account-icon')
var logoText = $('.account-title')
var body = $('.account-body')

body.css({
  'position': 'relative'
})

logoIcon.css({
  'position': 'absolute',
  'left': '0px'
})

logoText.mouseover(function(){
  logoIcon.animate({
  'position': 'absolute',
  'left': '-24px'}, 300)
  logoText.css({'color': '#fbd784'})
  logoText.animate({'position': 'relative','left': '8px'}, 300)
});


logoText.mouseout(function(){
  logoIcon.animate({
  'position': 'absolute',
  'left': '-8px'}, 500)
  logoText.css({'color': '#fff'})
  logoText.animate({'position': 'relative','left': '-8px'}, 500)
});

var logoIcon = $('.account-icon')
var logoText = $('.account-title')
var body = $('.account-body')

body.css({
  'position': 'relative'
})

logoIcon.css({
  'display': 'block',
  'position': 'absolute',
  'left': '0'
})

logoText.mouseover(function(){
  logoIcon.animate({
  'display': 'block',
  'position': 'absolute',
  'left': '-24px'}, 300)
  logoText.css({'color': '#fbd784'})
  logoText.animate({'position': 'relative','left': '8px'}, 300)
});


logoText.mouseout(function(){
  logoIcon.animate({
  'display': 'flex',
  'position': 'absolute',
  'left': '0'}, 500)
  logoText.css({'color': '#fff'})
  logoText.animate({'position': 'relative','left': '-8px'}, 500)
});

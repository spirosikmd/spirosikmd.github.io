var socialLinks = document.querySelector('.social-links');
var linkChooser = document.querySelector('.link-chooser');

function show () {
  socialLinks.style.display = 'block';
  socialLinks.style.animationName = 'stretch-in';

  linkChooser.style.display = 'none';
}

function hide () {
  socialLinks.style.display = 'none';

  linkChooser.style.display = 'block';
  linkChooser.style.animationName = 'stretch-out';
}

window.addEventListener('click', function () {
  //Hide the menus if visible
  console.log('Hide the menus if visible');
  if (socialLinks.style.display === 'block') {
    hide();
  }
});

linkChooser.addEventListener('click', function (event) {
  event.stopPropagation();
  console.log('social links click');
  show();
});

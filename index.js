var socialLinksWrapper = document.querySelector('.social-links');
var socialLinks = document.querySelectorAll('.social-link');
var socialLinkIcons = document.querySelectorAll('.social-link__icon');
var linkChooser = document.querySelector('.link-chooser');

function show () {
  socialLinksWrapper.style.display = 'block';
  socialLinksWrapper.style.animationName = 'stretch-in';

  linkChooser.style.display = 'none';
}

function hide () {
  socialLinksWrapper.style.display = 'none';

  linkChooser.style.display = 'block';
  linkChooser.style.animationName = 'stretch-out';
}

window.addEventListener('click', function (event) {
  console.log(event.target);
  if (event.target === socialLinksWrapper) {
    return;
  }
  if (socialLinksWrapper.style.display !== 'block') {
    return;
  }
  var isSocialLinkOrIcon = false;
  socialLinks.forEach(function (socialLink) {
    if (isSocialLinkOrIcon) {
      return;
    }
    if (socialLink === event.target) {
      isSocialLinkOrIcon = true;
    }
  });
  if (isSocialLinkOrIcon) {
    return;
  }
  socialLinkIcons.forEach(function (socialLinkIcon) {
    if (isSocialLinkOrIcon) {
      return;
    }
    if (socialLinkIcon === event.target) {
      isSocialLinkOrIcon = true;
    }
  });
  if (isSocialLinkOrIcon) {
    return;
  }

  hide();
});

linkChooser.addEventListener('click', function (event) {
  event.stopPropagation();
  show();
});

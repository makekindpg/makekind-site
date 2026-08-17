// Mobile nav toggle
document.addEventListener('DOMContentLoaded', function () {
  var toggle = document.querySelector('.nav-toggle');
  var links = document.querySelector('.nav-links');
  if (toggle && links) {
    toggle.addEventListener('click', function () {
      links.classList.toggle('open');
      var expanded = links.classList.contains('open');
      toggle.setAttribute('aria-expanded', expanded ? 'true' : 'false');
    });
  }

  // Give each pinned hero badge a slight, consistent hand-pinned tilt
  var tilts = [-7, 5, -3, 8, -5, 3];
  document.querySelectorAll('.pin-badge--pinned').forEach(function (pin, i) {
    pin.style.setProperty('--tilt', tilts[i % tilts.length] + 'deg');
  });
});

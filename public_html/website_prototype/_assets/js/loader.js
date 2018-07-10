if (window.matchMedia("(max-width: 767px)").matches) {
  document.write('<script type="text/javascript" src="_assets/js/jquerymobile.js"><\/script>');
  document.write('<script type="text/javascript" src="_assets/js/touch.js"><\/script>');
}
else if (window.matchMedia("(min-width: 768px)").matches) {
  document.write('<script type="text/javascript" src="_assets/js/desktop.js"><\/script>');
}


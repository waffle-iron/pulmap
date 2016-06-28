// Lazy load images with jail.js
$(document).ready(function() {
  $('img.item-thumbnail').jail({callbackAfterEachImage: function(options){console.log(options);}});
});

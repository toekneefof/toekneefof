// Generated by CoffeeScript 1.10.0
(function() {
  $(document).ready(function() {
    return $('nav li > a').click(function() {
      var ref;
      if ((ref = $('nav ul > li.active')) != null) {
        ref.removeClass('active');
      }
      return $(this).parent().addClass('active');
    });
  });

}).call(this);
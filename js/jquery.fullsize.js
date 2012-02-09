(function() {
  var Fullsize, object;
  object = function(o) {
    var F;
    F = function() {};
    F.prototype = o;
    return new F();
  };
  Fullsize = {
    go: function(element) {
      this.current = object(this);
      this.current.element = element;
      this.current.getRatio(Fullsize.resize);
      return $(window).resize(Fullsize.resize);
    },
    getData: function(image, callback) {
      this.current.element.data("ratio", image.width / image.height);
      return callback();
    },
    resize: function() {
      var image, ratio;
      image = Fullsize.current.element;
      ratio = image.data("ratio");
      if ($(window).width() / $(window).height() > ratio) {
        image.width($(window).width());
        image.height($(window).width() / ratio);
      } else {
        image.height($(window).height());
        image.width($(window).height() * ratio);
      }
      return image.css({
        marginLeft: -((image.width() - $(window).width()) / 2) + "px"
      });
    },
    getRatio: function(callback) {
      var image;
      image = new Image();
      image.src = this.element.attr("src");
      if ($.browser.msie && $.browser.version < 9) {
        this.element.animate({opacity: 1}, 300);
        Fullsize.getData(image, callback);
      }
      return image.onload = function() {
        $("img[rel=fullsize]").animate({opacity: 1}, 300);
        return Fullsize.getData(image, callback);
      };
    }
  };
  jQuery.fn.fullsize = function() {
    return Fullsize.go(this);
  };
  $(function() {
    if ($("img[rel=fullsize]").size() > 0) {
      return $("img[rel=fullsize]").fullsize();
    }
  });
}).call(this);
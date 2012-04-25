
$(function() {
  var members;
  members = ["sotarok", "fivestr", "yuchimiri", "wozozo", "riaf", "chacococco"];
  $("#entries .article").each(function() {
    var member, self, _i, _len;
    self = $(this);
    for (_i = 0, _len = members.length; _i < _len; _i++) {
      member = members[_i];
      if (self.hasClass(member)) {
        $(".author", self).html("<p><a href=\"/tagged/" + member + "\"><img\n  src=\"https://api.twitter.com/1/users/profile_image?screen_name=" + member + "&size=mini\"\n  alt=\"" + member + "\" /></a>&nbsp;\n  <a href=\"/tagged/" + member + "\">" + member + "</a></p>");
        return;
      }
    }
  });
  $("pre").addClass("prettyprint linenums");
  return prettyPrint();
});

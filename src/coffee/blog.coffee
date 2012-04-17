$ ->
  members = [
    "sotarok"
    "fivestr"
    "yuchimiri"
    "wozozo"
    "riaf"
    "chacococco"
  ]

  # entries info
  $("#entries .article").each ->
    self = $(this)

    for member in members
      if self.hasClass(member)
        $(".author", self).html("""
          <p><a href="/tagged/#{ member }"><img
            src="https://api.twitter.com/1/users/profile_image?screen_name=#{ member }&size=mini"
            alt="#{ member }" /></a>&nbsp;
            <a href="/tagged/#{ member }">#{ member }</a></p>
        """)

        return


  # for prettyprint
  $("pre").addClass "prettyprint linenums"
  prettyPrint()


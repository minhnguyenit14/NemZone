(function (d, s, id) {
  var js,
    fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s);
  js.id = id;
  js.setAttribute("crossorigin", "anonymous");
  js.setAttribute("async", "true");
  js.setAttribute("defer", "true");
  js.setAttribute("nonce", "ZphRaHDi");
  js.src = "https://connect.facebook.net/en_US/all.js#xfbml=1&version=v8.0";
  fjs.parentNode.insertBefore(js, fjs);
})(document, "script", "fanpage-facebook-jssdk");
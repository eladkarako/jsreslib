var Lib = {};

Lib.addScript = function(url){
  var s;
  s = document.createElement("script");
  s.type = "text/javascript";
  s.language = "JavaScript";
  s.src=url;
  document.getElementsByTagName("head")[0].appendChild(s);
};

Lib.addStyle = function(url){
  var s;
  s = document.createElement("link");
  s.type = "text/css";
  s.href=url;
  s.rel="stylesheet";
  document.getElementsByTagName("head")[0].appendChild(s);
};

Lib.addScriptInner = function(txt){
  var s;
  s = document.createElement("script");
  s.type = "text/javascript";
  s.language = "JavaScript";
  
  var t = document.createTextNode(txt);
  s.appendChild(t);
  
  document.getElementsByTagName("head")[0].appendChild(s);
};

Lib.addStyleInner = function(txt){
  var s;
  s = document.createElement("style");
  s.type = "text/css";
  s.href=url;
  
  var t = document.createTextNode(txt);
  s.appendChild(t);
  
  document.getElementsByTagName("head")[0].appendChild(s);
};

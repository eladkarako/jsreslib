var Lib = {};

Lib.addScript = function(url,doc){
  doc = doc || document;
  var s;
  s = document.createElement("script");
  s.setAttribute("async","async");
  s.type = "text/javascript";
  s.language = "JavaScript";
  s.src=url;
  doc.getElementsByTagName("head")[0].appendChild(s);
};

Lib.addStyle = function(url,doc){
  doc = doc || document;
  var s;
  s = document.createElement("link");
  s.type = "text/css";
  s.rel="stylesheet";
  s.href=url;
  doc.getElementsByTagName("head")[0].appendChild(s);
};

Lib.addScriptInner = function(txt,doc){
  doc = doc || document;
  var s;
  s = document.createElement("script");
  s.type = "text/javascript";
  s.language = "JavaScript";
  
  var t = document.createTextNode(txt);
  s.appendChild(t);
  
  doc.getElementsByTagName("head")[0].appendChild(s);
};

Lib.addStyleInner = function(txt,doc){
  doc = doc || document;
  var s;
  s = document.createElement("style");
  s.type = "text/css";
  
  var t = document.createTextNode(txt);
  s.appendChild(t);
  
  doc.getElementsByTagName("head")[0].appendChild(s);
};





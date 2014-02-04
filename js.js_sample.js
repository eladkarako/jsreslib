//--------------------

var doc = document.getElementById("contentframe").contentWindow.document; //iframe from same domain
var oTextArea = doc.getElementById("rule_definition"); //textarea from within an iframe, from same domain

//load codeMirror code highlighting into an inner iframe document element.
Lib.addStyle("http://codemirror.net/doc/docs.css", doc);
Lib.addStyle("http://codemirror.net/lib/codemirror.css", doc);
Lib.addStyleInner(".CodeMirror {border: 1px solid black; font-size:13px}", doc);
Lib.addScript("http://codemirror.net/lib/codemirror.js", doc);
Lib.addScript("http://codemirror.net/mode/tcl/tcl.js", doc);
Lib.addScript("http://codemirror.net/addon/selection/active-line.js", doc);
Lib.addScriptInner("var editor = CodeMirror.fromTextArea(oTextArea, {lineNumbers:true, styleActiveLine:true, matchBrackets:true});");




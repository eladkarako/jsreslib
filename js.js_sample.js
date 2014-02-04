
//--------------------

var wiframe = document.getElementById("contentframe").contentWindow; //iframe from same domain
var oTextArea = wiframe.document.getElementById("rule_definition"); //textarea from within an iframe, from same domain

//load codeMirror code highlighting into an inner iframe document element.
//Lib.addStyle("http://codemirror.net/doc/docs.css", doc);

//Lib.addStyle("http://codemirror.net/lib/codemirror.css", doc);
Lib.addStyle("https://cdnjs.cloudflare.com/ajax/libs/codemirror/3.19.0/codemirror.css", wiframe.document);

Lib.addStyleInner(".CodeMirror {border: 1px solid black; font-size:13px}", wiframe.document);

//Lib.addScript("http://codemirror.net/lib/codemirror.js", doc);
Lib.addScript("https://cdnjs.cloudflare.com/ajax/libs/codemirror/3.20.0/codemirror.js", wiframe.document);

//Lib.addScript("http://codemirror.net/mode/tcl/tcl.js", doc);
Lib.addScript("https://cdnjs.cloudflare.com/ajax/libs/codemirror/3.21.0/mode/tcl/tcl.js", wiframe.document);


//Lib.addScript("http://codemirror.net/addon/selection/active-line.js", doc);
Lib.addScript("https://cdnjs.cloudflare.com/ajax/libs/codemirror/3.16.0/addon/selection/active-line.js", wiframe.document);

Lib.addScriptInner("var editor = wiframe.CodeMirror.fromTextArea(oTextArea, {lineNumbers:true, styleActiveLine:true, matchBrackets:true});");


//Function: Query String Reader
//Similar to PHP's $_GET[] variable.


window.qs=function(a){a=a.replace(/[\[]/,"\\[").replace(/[\]]/,"\\]");var b="[\\?&]"+a+"=([^&#]*)";var c=new RegExp(b);var d=c.exec(window.location.href);if(d==null)return"";else return d[1]}
    
    
//Usage. If you want to echo out http://domain/?path=name&Src=source
    
var namepath = qs('path');   //Echoes out "name"
var source = qs('src');      //Echoes out "source"
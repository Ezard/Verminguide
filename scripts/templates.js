(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['enemies'] = template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "		<a href=\""
    + alias4(((helper = (helper = helpers.url || (depth0 != null ? depth0.url : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"url","hash":{},"data":data}) : helper)))
    + "\"><img src=\""
    + alias4(((helper = (helper = helpers.icon || (depth0 != null ? depth0.icon : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"icon","hash":{},"data":data}) : helper)))
    + "\" alt=\""
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "\"/></a>\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {};

  return "<h1>"
    + container.escapeExpression(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))
    + "</h1>\r\n<div id=\"enemies\">\r\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.enemies : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</div>";
},"useData":true});
templates['heroes'] = template({"1":function(container,depth0,helpers,partials,data) {
    var helper;

  return "	<div>\r\n		<h3>"
    + container.escapeExpression(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"name","hash":{},"data":data}) : helper)))
    + "</h3>\r\n	</div>\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {};

  return "<h1>"
    + container.escapeExpression(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))
    + "</h1>\r\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.heroes : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"useData":true});
templates['home'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "";
},"useData":true});
templates['trinkets'] = template({"1":function(container,depth0,helpers,partials,data) {
    var helper;

  return "	<div>\r\n		<h3>"
    + container.escapeExpression(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"name","hash":{},"data":data}) : helper)))
    + "</h3>\r\n	</div>\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {};

  return "<h1>"
    + container.escapeExpression(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))
    + "</h1>\r\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.trinkets : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"useData":true});
templates['layouts/main'] = template({"1":function(container,depth0,helpers,partials,data) {
    var helper;

  return " - "
    + container.escapeExpression(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"title","hash":{},"data":data}) : helper)));
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {};

  return "<!DOCTYPE html>\r\n<html>\r\n<head>\r\n	<title>Vermintide Utility"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.title : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</title>\r\n	<meta name=\"description\" content=\"Everything you could possibly want to know about Vermintide, plus more!\">\r\n	<meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\">\r\n	<meta name=\"viewport\" content=\"width=device-width,initial-scale=1\">\r\n	<link rel=\"stylesheet\" type=\"text/css\" href=\"/css/main.css\">\r\n	<!--suppress HtmlUnknownTarget -->\r\n	<script src=\"/handlebars/handlebars.min.js\"></script>\r\n	<script src=\"/scripts/main.js\"></script>\r\n	<script src=\"/scripts/templates.js\"></script>\r\n	<script>(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)})(window,document,'script','//www.google-analytics.com/analytics.js','ga');ga('create', 'UA-72698344-1', 'auto');ga('send', 'pageview');</script>\r\n</head>\r\n<body>\r\n<nav id=\"menu\">\r\n	<div id=\"cover\" onclick=\"setMenuOpen(false)\"></div>\r\n	<div id=\"items\">\r\n		<img src=\"/images/logo.png\" alt=\"Vermintide Utility logo\"/>\r\n		<a href=\"/heroes/\">\r\n			Heroes\r\n		</a>\r\n		<a href=\"/enemies/\">\r\n			Enemies\r\n		</a>\r\n		<a href=\"/trinkets/\">\r\n			Trinkets\r\n		</a>\r\n	</div>\r\n</nav>\r\n<div id=\"content\">\r\n	<div id=\"hamburger\" onclick=\"setMenuOpen(true)\">\r\n		<div style=\"margin: 0;\"></div>\r\n		<div></div>\r\n		<div></div>\r\n	</div>\r\n	"
    + ((stack1 = ((helper = (helper = helpers.body || (depth0 != null ? depth0.body : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"body","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "\r\n</div>\r\n</body>\r\n</html>";
},"useData":true});
})();
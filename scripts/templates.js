(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['enemies'] = template({"1":function(container,depth0,helpers,partials,data) {
    var helper;

  return "	<div>\r\n		<h3>"
    + container.escapeExpression(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"name","hash":{},"data":data}) : helper)))
    + "</h3>\r\n	</div>\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {};

  return "<h1>"
    + container.escapeExpression(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))
    + "</h1>\r\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.enemies : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
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
    + "</title>\r\n	<!--suppress HtmlUnknownTarget -->\r\n	<script src=\"/handlebars/handlebars.min.js\"></script>\r\n	<script src=\"/scripts/main.js\"></script>\r\n	<script src=\"/scripts/templates.js\"></script>\r\n	<style>\r\n		/* latin */\r\n		@font-face {\r\n			font-family: 'Lato';\r\n			font-style: normal;\r\n			font-weight: 400;\r\n			src: local('Lato Regular'), local('Lato-Regular'), url(https://fonts.gstatic.com/s/lato/v11/1YwB1sO8YE1Lyjf12WNiUA.woff2) format('woff2');\r\n			unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2212, U+2215, U+E0FF, U+EFFD, U+F000;\r\n		}\r\n\r\n		/* latin-ext */\r\n		@font-face {\r\n			font-family: 'Lato';\r\n			font-style: normal;\r\n			font-weight: 400;\r\n			src: local('Lato Regular'), local('Lato-Regular'), url(https://fonts.gstatic.com/s/lato/v11/UyBMtLsHKBKXelqf4x7VRQ.woff2) format('woff2');\r\n			unicode-range: U+0100-024F, U+1E00-1EFF, U+20A0-20AB, U+20AD-20CF, U+2C60-2C7F, U+A720-A7FF;\r\n		}\r\n\r\n		body {\r\n			font-family: Lato, Arial, sans-serif;\r\n			background-color: #1f1f1f;\r\n			margin: 0;\r\n			height: 100vh;\r\n		}\r\n\r\n		a, a:visited {\r\n			color: #C60000;\r\n			text-decoration: none;\r\n		}\r\n\r\n		nav a{\r\n			display: block;\r\n			font-size: 24px;\r\n			margin-top: 1em;\r\n			margin-bottom: 1em;\r\n			padding-left: 40px;\r\n		}\r\n	</style>\r\n</head>\r\n<body>\r\n<nav style=\"width:20%; background-color:black; height:100vh\">\r\n	<img src=\"/images/logo.png\" style=\"width:100%; margin-top:1em\"/>\r\n	<a href=\"/heroes/\">\r\n		Heroes\r\n	</a>\r\n	<a href=\"/enemies/\">\r\n		Enemies\r\n	</a>\r\n	<a href=\"/trinkets/\">\r\n		Trinkets\r\n	</a>\r\n</nav>\r\n<div id=\"content\" style=\"background-color:#212121\">\r\n	"
    + ((stack1 = ((helper = (helper = helpers.body || (depth0 != null ? depth0.body : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"body","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "\r\n</div>\r\n</body>\r\n</html>";
},"useData":true});
})();
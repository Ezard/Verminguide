(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['404'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<h1>404 - Page not found</h1>\r\n<p>Sorry, the page you're looking for was not found. If you typed the URL into the address bar, then please check that you typed it correctly. If you\r\n	navigated\r\n	here from some other part of the website, then don't worry, we'll have it fixed up in a jiffy :)</p>";
},"useData":true});
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
    var stack1;

  return "<h1>Enemies</h1>\r\n<div id=\"enemies\">\r\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.enemies : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</div>";
},"useData":true});
templates['enemy'] = template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "				<h4>"
    + alias4(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))
    + "</h4>\r\n				<p>"
    + alias4(((helper = (helper = helpers.content || (depth0 != null ? depth0.content : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"content","hash":{},"data":data}) : helper)))
    + "</p>\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression;

  return "<!--<object type=\"image/svg+xml\" data=\"/images/skaven_icon.svg\" style=\"color:green\"></object>-->\r\n<h1>Enemies</h1>\r\n<div class=\"item\">\r\n	<img src=\""
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.enemy : depth0)) != null ? stack1.icon : stack1), depth0))
    + "\" title=\""
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.enemy : depth0)) != null ? stack1.name : stack1), depth0))
    + "\" alt=\""
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.enemy : depth0)) != null ? stack1.name : stack1), depth0))
    + " icon\"/>\r\n	<h2>"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.enemy : depth0)) != null ? stack1.name : stack1), depth0))
    + "</h2>\r\n	<div>\r\n		<img src=\""
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.enemy : depth0)) != null ? stack1.image : stack1), depth0))
    + "\" title=\""
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.enemy : depth0)) != null ? stack1.name : stack1), depth0))
    + "\" alt=\""
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.enemy : depth0)) != null ? stack1.name : stack1), depth0))
    + " portrait\"/>\r\n		<h3 id=\"description\">Description</h3>\r\n		<p>"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.enemy : depth0)) != null ? stack1.description : stack1), depth0))
    + "</p>\r\n		<div>\r\n			<h3 id=\"notes\">Notes</h3>\r\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : {},((stack1 = (depth0 != null ? depth0.enemy : depth0)) != null ? stack1.notes : stack1),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "		</div>\r\n	</div>\r\n	<div class=\"stats\">\r\n		<h3 id=\"stats\">Stats</h3>\r\n		<table>\r\n			<tbody>\r\n			<tr>\r\n				<td class=\"tooltip\"\r\n					title=\"Whether or not this enemy is protected by armour. Armoured enemies can only be damaged by attacks to the head or by strikes with the 'Armour Penetration' attribute. All weapons have this attribute on their heavy attack, but some weapons such as axes have it by default\">\r\n					Armoured:\r\n				</td>\r\n				<td>"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.enemy : depth0)) != null ? stack1.armoured : stack1), depth0))
    + "</td>\r\n			</tr>\r\n			</tbody>\r\n		</table>\r\n		<table>\r\n			<tbody>\r\n			<tr>\r\n				<th>Difficulty</th>\r\n				<th>Health</th>\r\n			</tr>\r\n			<tr>\r\n				<td>Easy</td>\r\n				<td>"
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? depth0.enemy : depth0)) != null ? stack1.hp : stack1)) != null ? stack1.easy : stack1), depth0))
    + "</td>\r\n			</tr>\r\n			<tr>\r\n				<td>Normal</td>\r\n				<td>"
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? depth0.enemy : depth0)) != null ? stack1.hp : stack1)) != null ? stack1.normal : stack1), depth0))
    + "</td>\r\n			</tr>\r\n			<tr>\r\n				<td>Hard</td>\r\n				<td>"
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? depth0.enemy : depth0)) != null ? stack1.hp : stack1)) != null ? stack1.hard : stack1), depth0))
    + "</td>\r\n			</tr>\r\n			<tr>\r\n				<td>Nightmare</td>\r\n				<td>"
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? depth0.enemy : depth0)) != null ? stack1.hp : stack1)) != null ? stack1.nightmare : stack1), depth0))
    + "</td>\r\n			</tr>\r\n			<tr>\r\n				<td>Cataclysm</td>\r\n				<td>"
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? depth0.enemy : depth0)) != null ? stack1.hp : stack1)) != null ? stack1.cataclysm : stack1), depth0))
    + "</td>\r\n			</tr>\r\n			</tbody>\r\n		</table>\r\n	</div>\r\n</div>";
},"useData":true});
templates['heroes'] = template({"1":function(container,depth0,helpers,partials,data) {
    var helper;

  return "	<div>\r\n		<h3>"
    + container.escapeExpression(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"name","hash":{},"data":data}) : helper)))
    + "</h3>\r\n	</div>\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<h1>Heroes</h1>\r\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.heroes : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
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
    var stack1;

  return "<h1>Trinkets</h1>\r\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.trinkets : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"useData":true});
templates['layouts/main'] = template({"1":function(container,depth0,helpers,partials,data) {
    var helper;

  return " - "
    + container.escapeExpression(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"title","hash":{},"data":data}) : helper)));
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {};

  return "<!DOCTYPE html>\r\n<html>\r\n<head>\r\n	<title>Vermintide Utility"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.title : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</title>\r\n	<meta name=\"description\" content=\"Everything you could possibly want to know about Vermintide, plus more!\">\r\n	<meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\">\r\n	<meta name=\"viewport\" content=\"width=device-width,initial-scale=1\">\r\n	<link rel=\"stylesheet\" type=\"text/css\" href=\"/css/main.css\">\r\n	<script src=\"https://ajax.googleapis.com/ajax/libs/jquery/2.2.0/jquery.min.js\"></script>\r\n	<script src=\"/handlebars/handlebars.js\"></script>\r\n	<script src=\"/scripts/main.js\"></script>\r\n	<script src=\"/scripts/templates.js\"></script>\r\n	<script>(function (i, s, o, g, r, a, m) {\r\n		i['GoogleAnalyticsObject'] = r;\r\n		i[r] = i[r] || function () {\r\n					(i[r].q = i[r].q || []).push(arguments)\r\n				}, i[r].l = 1 * new Date();\r\n		a = s.createElement(o), m = s.getElementsByTagName(o)[0];\r\n		a.async = 1;\r\n		a.src = g;\r\n		m.parentNode.insertBefore(a, m)\r\n	})(window, document, 'script', '//www.google-analytics.com/analytics.js', 'ga');\r\n	ga('create', 'UA-72698344-1', 'auto');\r\n	ga('send', 'pageview');</script>\r\n</head>\r\n<body>\r\n<nav id=\"menu\">\r\n	<div id=\"cover\" onclick=\"setMenuOpen(false)\"></div>\r\n	<div id=\"items\">\r\n		<img src=\"/images/logo.png\" alt=\"Vermintide Utility logo\"/>\r\n		<a href=\"/heroes/\">\r\n			Heroes\r\n		</a>\r\n		<a href=\"/enemies/\">\r\n			Enemies\r\n		</a>\r\n		<a href=\"/trinkets/\">\r\n			Trinkets\r\n		</a>\r\n	</div>\r\n</nav>\r\n<div id=\"content\">\r\n	<div id=\"hamburger\" onclick=\"setMenuOpen(true)\">\r\n		<div style=\"margin: 0;\"></div>\r\n		<div></div>\r\n		<div></div>\r\n	</div>\r\n	"
    + ((stack1 = ((helper = (helper = helpers.body || (depth0 != null ? depth0.body : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"body","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "\r\n</div>\r\n</body>\r\n</html>";
},"useData":true});
})();
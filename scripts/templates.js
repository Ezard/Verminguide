(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['enemies'] = template({"1":function(container,depth0,helpers,partials,data) {
    var helper;

  return "	<div>\r\n		<h3>"
    + container.escapeExpression(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"name","hash":{},"data":data}) : helper)))
    + "</h3>\r\n	</div>\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers.each.call(depth0 != null ? depth0 : {},(data && data.root),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"useData":true});
templates['home'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "";
},"useData":true});
templates['layouts/main'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<!DOCTYPE html>\r\n<html>\r\n<head>\r\n	<script src=\"\"></script>\r\n	<script src=\"/scripts/main.js\"></script>\r\n</head>\r\n<body>\r\n<nav>\r\n	<a href=\"javascript:goToPage('heroes')\">\r\n		<ul>\r\n			Heroes\r\n		</ul>\r\n	</a>\r\n	<a href=\"javascript:goToPage('enemies')\">\r\n		<ul>\r\n			Enemies\r\n		</ul>\r\n	</a>\r\n	<a href=\"javascript:goToPage('trinkets')\">\r\n		<ul>\r\n			Trinkets\r\n		</ul>\r\n	</a>\r\n</nav>\r\n<div id=\"content\">\r\n\r\n</div>\r\n</body>\r\n</html>";
},"useData":true});
})();
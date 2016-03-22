(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['404'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<h1>404 - Page not found</h1>\r\n<p>Sorry, the page you're looking for was not found. If you typed the URL into the address bar, then please check that you typed it correctly. If you\r\n	navigated\r\n	here from some other part of the website, then don't worry, we'll have it fixed up in a jiffy :)</p>";
},"useData":true});
templates['enemies'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "		<a href=\""
    + alias4(((helper = (helper = helpers.url || (depth0 != null ? depth0.url : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"url","hash":{},"data":data}) : helper)))
    + "\">\r\n			<div>\r\n				<div style=\"background-image:url("
    + alias4(((helper = (helper = helpers.icon || (depth0 != null ? depth0.icon : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"icon","hash":{},"data":data}) : helper)))
    + ")\"></div>\r\n				<h2 "
    + ((stack1 = (helpers.smallerFont || (depth0 && depth0.smallerFont) || alias2).call(alias1,(depth0 != null ? depth0.name : depth0),{"name":"smallerFont","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ">"
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "</h2>\r\n			</div>\r\n		</a>\r\n";
},"2":function(container,depth0,helpers,partials,data) {
    return "";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<h1>Enemies</h1>\r\n<div class=\"items\">\r\n"
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
},"3":function(container,depth0,helpers,partials,data) {
    var helper;

  return "						<th>"
    + container.escapeExpression(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"name","hash":{},"data":data}) : helper)))
    + "</th>\r\n";
},"5":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "						<td>"
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0.damage : depth0)) != null ? stack1.easy : stack1), depth0))
    + "</td>\r\n";
},"7":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "						<td>"
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0.damage : depth0)) != null ? stack1.normal : stack1), depth0))
    + "</td>\r\n";
},"9":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "						<td>"
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0.damage : depth0)) != null ? stack1.hard : stack1), depth0))
    + "</td>\r\n";
},"11":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "						<td>"
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0.damage : depth0)) != null ? stack1.nightmare : stack1), depth0))
    + "</td>\r\n";
},"13":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "						<td>"
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0.damage : depth0)) != null ? stack1.cataclysm : stack1), depth0))
    + "</td>\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression, alias3=depth0 != null ? depth0 : {};

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
    + ((stack1 = helpers.each.call(alias3,((stack1 = (depth0 != null ? depth0.enemy : depth0)) != null ? stack1.notes : stack1),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "		</div>\r\n	</div>\r\n	<div class=\"stats\">\r\n		<h3 id=\"stats\">Stats</h3>\r\n		<table>\r\n			<tbody>\r\n			<tr>\r\n				<td class=\"tooltip\"\r\n				    title=\"Whether or not this enemy is protected by armour. Armoured enemies can only be damaged by attacks to the head or by strikes with the 'Armour Penetration' attribute. All weapons have this attribute on their heavy attack, but some weapons such as axes have it by default\">\r\n					Armoured:\r\n				</td>\r\n				<td>"
    + alias2((helpers.booleanToYesNo || (depth0 && depth0.booleanToYesNo) || helpers.helperMissing).call(alias3,((stack1 = (depth0 != null ? depth0.enemy : depth0)) != null ? stack1.armoured : stack1),{"name":"booleanToYesNo","hash":{},"data":data}))
    + "</td>\r\n			</tr>\r\n			<tr>\r\n				<td class=\"tooltip\"\r\n				    title=\"Every time the poison DoT ticks, enemies have a chance to die instantly, regardless of their remaining health. The percentage chance for this to happen is (100 - resistance). Some enemies have 100 poison resistance, meaning that this instant death effect can never happen to them\">\r\n					Poison Resistance:\r\n				</td>\r\n				<td>"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.enemy : depth0)) != null ? stack1.poison_resistance : stack1), depth0))
    + "</td>\r\n			</tr>\r\n			</tbody>\r\n		</table>\r\n		<div>\r\n			<table class=\"difficulties\">\r\n				<tbody>\r\n				<tr>\r\n					<th class=\"tooltip\" title=\"The difficulty setting\">Difficulty</th>\r\n					<th class=\"tooltip\" title=\"The amount of health that the enemy has on the corresponding difficulty setting\">Health</th>\r\n"
    + ((stack1 = helpers.each.call(alias3,((stack1 = (depth0 != null ? depth0.enemy : depth0)) != null ? stack1.attacks : stack1),{"name":"each","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "				</tr>\r\n				<tr>\r\n					<td>Easy</td>\r\n					<td>"
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? depth0.enemy : depth0)) != null ? stack1.hp : stack1)) != null ? stack1.easy : stack1), depth0))
    + "</td>\r\n"
    + ((stack1 = helpers.each.call(alias3,((stack1 = (depth0 != null ? depth0.enemy : depth0)) != null ? stack1.attacks : stack1),{"name":"each","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "				</tr>\r\n				<tr>\r\n					<td>Normal</td>\r\n					<td>"
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? depth0.enemy : depth0)) != null ? stack1.hp : stack1)) != null ? stack1.normal : stack1), depth0))
    + "</td>\r\n"
    + ((stack1 = helpers.each.call(alias3,((stack1 = (depth0 != null ? depth0.enemy : depth0)) != null ? stack1.attacks : stack1),{"name":"each","hash":{},"fn":container.program(7, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "				</tr>\r\n				<tr>\r\n					<td>Hard</td>\r\n					<td>"
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? depth0.enemy : depth0)) != null ? stack1.hp : stack1)) != null ? stack1.hard : stack1), depth0))
    + "</td>\r\n"
    + ((stack1 = helpers.each.call(alias3,((stack1 = (depth0 != null ? depth0.enemy : depth0)) != null ? stack1.attacks : stack1),{"name":"each","hash":{},"fn":container.program(9, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "				</tr>\r\n				<tr>\r\n					<td>Nightmare</td>\r\n					<td>"
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? depth0.enemy : depth0)) != null ? stack1.hp : stack1)) != null ? stack1.nightmare : stack1), depth0))
    + "</td>\r\n"
    + ((stack1 = helpers.each.call(alias3,((stack1 = (depth0 != null ? depth0.enemy : depth0)) != null ? stack1.attacks : stack1),{"name":"each","hash":{},"fn":container.program(11, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "				</tr>\r\n				<tr>\r\n					<td>Cataclysm</td>\r\n					<td>"
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? depth0.enemy : depth0)) != null ? stack1.hp : stack1)) != null ? stack1.cataclysm : stack1), depth0))
    + "</td>\r\n"
    + ((stack1 = helpers.each.call(alias3,((stack1 = (depth0 != null ? depth0.enemy : depth0)) != null ? stack1.attacks : stack1),{"name":"each","hash":{},"fn":container.program(13, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "				</tr>\r\n				</tbody>\r\n			</table>\r\n		</div>\r\n	</div>\r\n</div>";
},"useData":true});
templates['heroes'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "		<a href=\""
    + alias4(((helper = (helper = helpers.url || (depth0 != null ? depth0.url : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"url","hash":{},"data":data}) : helper)))
    + "\">\r\n			<div>\r\n				<div style=\"background-image:url("
    + alias4(((helper = (helper = helpers.icon || (depth0 != null ? depth0.icon : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"icon","hash":{},"data":data}) : helper)))
    + ")\"></div>\r\n				<h2 "
    + ((stack1 = (helpers.smallerFont || (depth0 && depth0.smallerFont) || alias2).call(alias1,(depth0 != null ? depth0.name : depth0),{"name":"smallerFont","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ">"
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "</h2>\r\n			</div>\r\n		</a>\r\n";
},"2":function(container,depth0,helpers,partials,data) {
    return "";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<h1>Heroes</h1>\r\n<div class=\"items\">\r\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.heroes : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</div>";
},"useData":true});
templates['home'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<h1>Verminguide</h1>\r\n\r\n<div>\r\n	<h2 style=\"padding:0 40px;color:#C60000\">**Please note that this website is still a work in progress**</h2>\r\n</div>";
},"useData":true});
templates['trait'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div class=\"trait\" data-name=\""
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "\" data-description=\""
    + alias4(((helper = (helper = helpers.description || (depth0 != null ? depth0.description : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"description","hash":{},"data":data}) : helper)))
    + "\">\r\n	<h5><img src=\"/images/skaven_icon.svg\"/>"
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "</h5>\r\n	<p>"
    + alias4(((helper = (helper = helpers.description || (depth0 != null ? depth0.description : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"description","hash":{},"data":data}) : helper)))
    + "</p>\r\n</div>";
},"useData":true});
templates['traits'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = container.invokePartial(partials.trait,depth0,{"name":"trait","data":data,"indent":"\t","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "");
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers.each.call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.traits : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"usePartial":true,"useData":true});
templates['trinket'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression;

  return "<h1>Trinkets</h1>\r\n<div class=\"item trinket\">\r\n	<img src=\""
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.trinket : depth0)) != null ? stack1.image : stack1), depth0))
    + "\" title=\""
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.trinket : depth0)) != null ? stack1.name : stack1), depth0))
    + "\" alt=\""
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.trinket : depth0)) != null ? stack1.name : stack1), depth0))
    + " icon\"/>\r\n	<h2>"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.trinket : depth0)) != null ? stack1.name : stack1), depth0))
    + "</h2>\r\n	<div>\r\n		<h3>Type</h3>\r\n		<p>"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.trinket : depth0)) != null ? stack1.type : stack1), depth0))
    + "</p>\r\n		<h3>Rarity</h3>\r\n		<p>"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.trinket : depth0)) != null ? stack1.rarity : stack1), depth0))
    + "</p>\r\n		<h3>Description</h3>\r\n		<p>"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.trinket : depth0)) != null ? stack1.description : stack1), depth0))
    + "</p>\r\n	</div>\r\n</div>";
},"useData":true});
templates['trinkets'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "		<a href=\""
    + alias4(((helper = (helper = helpers.url || (depth0 != null ? depth0.url : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"url","hash":{},"data":data}) : helper)))
    + "\">\r\n			<div>\r\n				<div style=\"background-image:url("
    + alias4(((helper = (helper = helpers.icon || (depth0 != null ? depth0.icon : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"icon","hash":{},"data":data}) : helper)))
    + ")\"></div>\r\n				<h2 "
    + ((stack1 = (helpers.smallerFont || (depth0 && depth0.smallerFont) || alias2).call(alias1,(depth0 != null ? depth0.name : depth0),{"name":"smallerFont","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ">"
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "</h2>\r\n			</div>\r\n		</a>\r\n";
},"2":function(container,depth0,helpers,partials,data) {
    return "";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<h1>Trinkets</h1>\r\n<div class=\"items\">\r\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.trinkets : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</div>";
},"useData":true});
templates['weapon'] = template({"1":function(container,depth0,helpers,partials,data) {
    var helper;

  return "						<label class=\"stat_label\">"
    + container.escapeExpression(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"name","hash":{},"data":data}) : helper)))
    + "</label>\r\n						<div><div class=\"hbar\"></div><div class=\"vbar\"></div></div>\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression, alias3=depth0 != null ? depth0 : {};

  return "<h1>Weapons</h1>\r\n<div class=\"item weapon\">\r\n	<img src=\""
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.weapon : depth0)) != null ? stack1.icon : stack1), depth0))
    + "\" title=\""
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.weapon : depth0)) != null ? stack1.name : stack1), depth0))
    + "\" alt=\""
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.weapon : depth0)) != null ? stack1.name : stack1), depth0))
    + " icon\"/>\r\n	<h2>"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.weapon : depth0)) != null ? stack1.name : stack1), depth0))
    + "</h2>\r\n	<div>\r\n		<p>Wielded by: "
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.weapon : depth0)) != null ? stack1.hero : stack1), depth0))
    + "</p>\r\n		<p>"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.weapon : depth0)) != null ? stack1.description : stack1), depth0))
    + "</p>\r\n		<div class=\"stats weapon_stats\">\r\n			<h3>Stats</h3>\r\n			<div class=\"column\">\r\n				<h4>Weapon Rarity:</h4>\r\n				<div class=\"rarities\">\r\n					<input type=\"radio\" name=\"stats_rarity\" id=\"stats_rarity_plentiful\" checked/>\r\n					<label for=\"stats_rarity_plentiful\">Plentiful (white)</label>\r\n					<br/>\r\n					<input type=\"radio\" name=\"stats_rarity\" id=\"stats_rarity_common\"/>\r\n					<label for=\"stats_rarity_common\">Common (green)</label>\r\n					<br/>\r\n					<input type=\"radio\" name=\"stats_rarity\" id=\"stats_rarity_rare\"/>\r\n					<label for=\"stats_rarity_rare\">Rare (blue)</label>\r\n					<br/>\r\n					<input type=\"radio\" name=\"stats_rarity\" id=\"stats_rarity_exotic\"/>\r\n					<label for=\"stats_rarity_exotic\">Exotic (orange)</label>\r\n					<br/>\r\n					<input type=\"radio\" name=\"stats_rarity\" id=\"stats_rarity_veteran\"/>\r\n					<label for=\"stats_rarity_veteran\">Veteran (red)</label>\r\n					<img src=\"/images/skaven_icon.svg\"/>\r\n				</div>\r\n			</div>\r\n			<div class=\"column\">\r\n				<div class=\"stat_bars\">\r\n"
    + ((stack1 = helpers.each.call(alias3,((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0.weapon : depth0)) != null ? stack1.weapons : stack1)) != null ? stack1["4"] : stack1)) != null ? stack1.attacks : stack1),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "				</div>\r\n			</div>\r\n		</div>\r\n		<div class=\"trait_picker\">\r\n			<h3>Trait Picker</h3>\r\n			<div class=\"column\">\r\n				<h4>Weapon Rarity:</h4>\r\n				<div class=\"rarities\">\r\n					<input type=\"radio\" name=\"traits_rarity\" id=\"traits_rarity_common\" checked/>\r\n					<label for=\"traits_rarity_common\">Common (green)</label>\r\n					<br/>\r\n					<input type=\"radio\" name=\"traits_rarity\" id=\"traits_rarity_rare\"/>\r\n					<label for=\"traits_rarity_rare\">Rare (blue)</label>\r\n					<br/>\r\n					<input type=\"radio\" name=\"traits_rarity\" id=\"traits_rarity_exotic\"/>\r\n					<label for=\"traits_rarity_exotic\">Exotic (orange)</label>\r\n					<br/>\r\n					<input type=\"radio\" name=\"traits_rarity\" id=\"traits_rarity_veteran\"/>\r\n					<label for=\"traits_rarity_veteran\">Veteran (red)</label>\r\n					<img src=\"/images/skaven_icon.svg\"/>\r\n				</div>\r\n			</div>\r\n			<div class=\"column\">\r\n				<div class=\"trait_button\" id=\"trait0\" style=\"margin-top:26.6px\"></div>\r\n				<div class=\"trait_button\" id=\"trait1\"></div>\r\n				<div class=\"trait_button\" id=\"trait2\"></div>\r\n			</div>\r\n		</div>\r\n	</div>\r\n</div>\r\n<div id=\"shield\" class=\"shield\" style=\"display:none\">\r\n	<div id=\"trait_picker\" class=\"trait_picker\" style=\"display:none\">\r\n	</div>\r\n</div>\r\n<script>var weapons = "
    + ((stack1 = (helpers.json || (depth0 && depth0.json) || helpers.helperMissing).call(alias3,((stack1 = (depth0 != null ? depth0.weapon : depth0)) != null ? stack1.weapons : stack1),{"name":"json","hash":{},"data":data})) != null ? stack1 : "")
    + ";</script>\r\n<script src=\"/scripts/weapon.min.js\"></script>";
},"useData":true});
templates['weapons'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {};

  return "		<h2>"
    + container.escapeExpression(((helper = (helper = helpers.hero || (depth0 != null ? depth0.hero : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"hero","hash":{},"data":data}) : helper)))
    + "</h2>\r\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.weapons : depth0),{"name":"each","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"2":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "			<a href=\""
    + alias4(((helper = (helper = helpers.url || (depth0 != null ? depth0.url : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"url","hash":{},"data":data}) : helper)))
    + "\">\r\n				<div>\r\n					<div style=\"background-image:url("
    + alias4(((helper = (helper = helpers.icon || (depth0 != null ? depth0.icon : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"icon","hash":{},"data":data}) : helper)))
    + ")\"></div>\r\n					<h2 "
    + ((stack1 = (helpers.smallerFont || (depth0 && depth0.smallerFont) || alias2).call(alias1,(depth0 != null ? depth0.name : depth0),{"name":"smallerFont","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ">"
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "</h2>\r\n				</div>\r\n			</a>\r\n";
},"3":function(container,depth0,helpers,partials,data) {
    return "";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<h1>Weapons</h1>\r\n<div class=\"items weapons\">\r\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.weapon_sets : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</div>";
},"useData":true});
templates['layouts/main'] = template({"1":function(container,depth0,helpers,partials,data) {
    var helper;

  return container.escapeExpression(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"title","hash":{},"data":data}) : helper)))
    + " - ";
},"3":function(container,depth0,helpers,partials,data) {
    var helper;

  return "		<meta name=\"description\" content=\""
    + container.escapeExpression(((helper = (helper = helpers.description || (depth0 != null ? depth0.description : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"description","hash":{},"data":data}) : helper)))
    + "\">\r\n";
},"5":function(container,depth0,helpers,partials,data) {
    return "		<meta name=\"description\" content=\"Everything you could possibly want to know about Vermintide, plus more!\">\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {};

  return "<!DOCTYPE html>\r\n<html>\r\n<head>\r\n	<title>"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.title : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "Verminguide</title>\r\n	<link rel=\"dns-prefetch\" href=\"http://fonts.gstatic.com\">\r\n	<link rel=\"dns-prefetch\" href=\"http://www.google-analytics.com\">\r\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.description : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.program(5, data, 0),"data":data})) != null ? stack1 : "")
    + "	<meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\">\r\n	<meta name=\"viewport\" content=\"width=device-width,initial-scale=1\">\r\n	<meta name=\"theme-color\" content=\"#212121\">\r\n	<link rel=\"stylesheet\" type=\"text/css\" href=\"/css/main.css\">\r\n	<script src=\"/handlebars/handlebars.min.js\"></script>\r\n	<script src=\"/scripts/main.min.js\"></script>\r\n	<script src=\"/scripts/templates.min.js\"></script>\r\n	<script>(function (i, s, o, g, r, a, m) {\r\n		i['GoogleAnalyticsObject'] = r;\r\n		i[r] = i[r] || function () {\r\n					(i[r].q = i[r].q || []).push(arguments)\r\n				}, i[r].l = 1 * new Date();\r\n		a = s.createElement(o), m = s.getElementsByTagName(o)[0];\r\n		a.async = 1;\r\n		a.src = g;\r\n		m.parentNode.insertBefore(a, m)\r\n	})(window, document, 'script', '//www.google-analytics.com/analytics.js', 'ga');\r\n	ga('create', 'UA-72698344-1', 'auto');\r\n	ga('require', 'linkid');\r\n	ga('send', 'pageview');</script>\r\n</head>\r\n<body>\r\n<header id=\"header\">\r\n	<nav>\r\n		<a href=\"/heroes/\">Heroes</a>\r\n		<a href=\"/enemies/\">Enemies</a>\r\n		<a href=\"/\" class=\"logo\">\r\n			<h1>Verminguide</h1>\r\n		</a>\r\n		<a href=\"/trinkets/\">Trinkets</a>\r\n		<a href=\"/weapons/\">Weapons</a>\r\n	</nav>\r\n</header>\r\n<div class=\"content\">\r\n	"
    + ((stack1 = ((helper = (helper = helpers.body || (depth0 != null ? depth0.body : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"body","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "\r\n</div>\r\n<div id=\"hamburger\" class=\"hamburger\">\r\n	<div style=\"margin: 0;\"></div>\r\n	<div></div>\r\n	<div></div>\r\n</div>\r\n</body>\r\n</html>";
},"useData":true});
})();
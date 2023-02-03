var fs = require("fs");
var Handlebars = require("handlebars");
var moment = require("moment");


module.exports = {
	render: render
};

Handlebars.registerHelper("nl2br", function(value) {
	return (value || "").replace(/\n/g, "</p><p>");
});

Handlebars.registerHelper("formatDate", function(value) {
	return moment(date.toString(), ['YYYY-MM-DD']).format('MMM YYYY');
});

function render(resume) {
	var css = fs.readFileSync(__dirname + "/style.css", "utf-8");
	var template = fs.readFileSync(__dirname + "/resume.template", "utf-8");
	return Handlebars.compile(template)({
		css: css,
		resume: resume
	});
}

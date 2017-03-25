var hd_language_switching = hd_language_switching || {};

hd_language_switching.item_template = [
	'<li>',
	'<a href="{{{root}}}{{{project_url_path}}}/{{{language}}}/{{{basename}}}">',
	'{{language}}',
	'</a>',
	'</li>'].join('\n');

hd_language_switching.list_template = [
	'<li class="dropdown">',
	'<a class="dropdown-toggle" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">',
	'Language ',
	'<span class="caret"></span>',
	'<ul class="dropdown-menu">',
	'{{#items}}',
	'{{{.}}}',
	'{{/items}}',
	'</ul>',
	'</a>',
	'</li>'].join('\n');

$(document).ready(function() {
	if (utils.hd_context.extension == 'gi-extension') {
		var list_data = {'items': []}
		for (var i = 0; i < utils.hd_context.gi_languages.length; i++) {
			var language = utils.hd_context.gi_languages[i];
			list_data.items.push(Mustache.to_html(
						hd_language_switching.item_template, {
							'root': utils.hd_context.hd_root,
							'project_url_path': utils.hd_context.project_url_path,
							'language': language,
							'basename': utils.hd_context.hd_basename,
						}));
		}

		var widget = Mustache.to_html(
				hd_language_switching.list_template,
				list_data);

		$("#menu").append (widget);
	}
});

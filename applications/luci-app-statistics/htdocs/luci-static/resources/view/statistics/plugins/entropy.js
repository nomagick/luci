'use strict';
'require form';

return L.Class.extend({
	title: _('Entropy Plugin Configuration'),
	description: _('The entropy plugin collects statistics about the available entropy.'),

	configSummary: function(section) {
		return _('Entropy monitoring enabled');
	}
});

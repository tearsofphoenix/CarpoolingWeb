VP.Views = VP.Views || {};

(function() {
    'use strict';

    VP.Views.ToggleMenuButton = M.ButtonView.extend({
        icon: 'fa-bars',
        cssClass: 'menu-button',
        events: {
            tap: 'toggleMenu'
        }
    })
})(this);
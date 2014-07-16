/*global kitchensink*/

kitchensink.Views = kitchensink.Views || {};

(function() {
    'use strict';

    kitchensink.Views.StartScreenView = M.View.extend({

    }, {

        // Menu hint
        menuHint: M.TextView.extend({
            value: 'Drag from left to open up the menu or tab on this text',
            grid: 'col-xs-12',
            cssClass: 'center-text',
            icon: 'fa-exchange',
            events: {
                tap: 'toggleMenu'
            }
        }),
    });

})();

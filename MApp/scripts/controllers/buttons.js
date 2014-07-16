/*global kitchensink*/

kitchensink.Controllers = kitchensink.Controllers || {};

(function() {
    'use strict';

    // Extend the AbstractController
    kitchensink.Controllers.ButtonsController = kitchensink.Controllers.AbstractController.extend({

        pageHeadline: 'Buttons',

        sourceCodePath: 'scripts/views/buttons.js',

        _initViews: function() {

            // Create the ContentView with the controller (this) as scope
            if( !this.contentView ) {
                this.contentView = kitchensink.Views.ButtonsView.create(this, null, true);
            }

            // Create the HeaderView with the controller (this) as scope
            if( !this.headerView ) {
                this.headerView = kitchensink.Views.BackheaderView.create(this, null, true);
            }

            this._applyViews();
        },

        // Register menu item for this view
        registerToMenu: function( menuController ) {
            menuController.registerMenuItem({
                value: 'M.ButtonView',
                goto: 'buttons'
            });
        }

    });

})();

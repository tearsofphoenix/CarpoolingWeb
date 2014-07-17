/*global VP*/

VP.Controllers = VP.Controllers || {};

(function() {
    'use strict';

    VP.Controllers.ListsController = VP.Controllers.AbstractController.extend({

        pageHeadline: 'Lists',

        sourceCodePath: 'scripts/views/lists.js',

        _initViews: function() {

            // Create the ContentView with the controller (this) as scope
            if( !this.contentView ) {
                this.contentView = VP.Views.ListsView.create(this, null, true);
            }

            // Create the HeaderView with the controller (this) as scope
            if( !this.headerView ) {
                this.headerView = VP.Views.BackheaderView.create(this, null, true);
            }

            this._applyViews();
        },

        // Register menu item for this view
        registerToMenu: function( menuController ) {
            menuController.registerMenuItem({
                value: 'M.ListView',
                goto: 'lists'
            });
        }

    });

})();

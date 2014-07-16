/*global kitchensink*/

kitchensink.Controllers = kitchensink.Controllers || {};

(function() {
    'use strict';

    kitchensink.Controllers.PublishPathController = kitchensink.Controllers.AbstractController.extend({

        pageHeadline: '发布路线',

        sourceCodePath: 'scripts/views/publishpath.js',

        path: M.Model.create({
            start: '',
            end: '',
            start_date: '1383751054966',
            gather_location : '',
            gather_date : '1383751054966',
            user_name : '',
            user_phone : '',
            note : '',
        }),

        _initViews: function() {

            // Create the ContentView with the controller (this) as scope
            if( !this.contentView ) {
                this.contentView = kitchensink.Views.PublishPathView.create(this, null, true);
            }

            // Create the HeaderView with the controller (this) as scope
            if( !this.headerView ) {
                this.headerView = kitchensink.Views.BackheaderView.create(this, null, true);
            }

            this._applyViews();
        },

        // Register menu item for this view
        registerToMenu: function( menuController ){
            menuController.registerMenuItem({
                value: '发布路线',
                goto: 'publishpath'
            });
        }
    });

})();

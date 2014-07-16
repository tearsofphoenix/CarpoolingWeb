/*global kitchensink*/

kitchensink.Controllers = kitchensink.Controllers || {};

(function() {
    'use strict';

    kitchensink.Controllers.LoginController = kitchensink.Controllers.AbstractController.extend({

        pageHeadline: '登录',

        sourceCodePath: 'scripts/views/login.js',

        // Create a model instance with the given attributes
        person: M.Model.create({
            name: 'egon',
            birthday: '1383751054966',
            favorite: NO
        }),

        _initViews: function() {

            // Create the ContentView with the controller (this) as scope
            if( !this.contentView ) {
                this.contentView = kitchensink.Views.LoginView.create(this, null, true);
            }

            // Create the HeaderView with the controller (this) as scope
            if( !this.headerView ) {
                this.headerView = kitchensink.Views.BackheaderView.create(this, null, true);
            }

            this._applyViews();

            var data = M.Model.create({
                wifi: 'online'
            });
            this.set('wifi', data);
        },

        // Register menu item for this view
        registerToMenu: function( menuController ){
            menuController.registerMenuItem({
                value: 'Login',
                goto: 'login'
            });
        }
    });

})();

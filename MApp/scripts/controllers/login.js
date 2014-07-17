/*global VP*/

VP.Controllers = VP.Controllers || {};

(function() {
    'use strict';

    VP.Controllers.LoginController = VP.Controllers.AbstractController.extend({

        pageHeadline: '登录',

        sourceCodePath: 'scripts/views/login.js',

        loginInfo: M.Model.create({
            username: '',
            password: ''
        }),

        _initViews: function() {

            // Create the ContentView with the controller (this) as scope
            if( !this.contentView ) {
                this.contentView = VP.Views.LoginView.create(this, null, true);
            }

            // Create the HeaderView with the controller (this) as scope
            if( !this.headerView ) {
                this.headerView = VP.Views.BackheaderView.create(this, null, true);
            }

            this._applyViews();
        },

        // Register menu item for this view
        registerToMenu: function( menuController ){
            menuController.registerMenuItem({
                value: '登录',
                goto: 'login'
            });
        }
    });

})();

/*global VP*/

VP.Controllers = VP.Controllers || {};

(function() {
    'use strict';

    VP.Controllers.MenuController = VP.Controllers.AbstractController.extend({

        tmpViews: null,

        sourceCodePath: 'scripts/views/menu.js',

        registerMenuItem: function( menuEntry ){
            this._initMenu();
            this.tmpViews.add(menuEntry);
        },

        _initViews: function(){
             //Init the collection
            this._initMenu();

            // Create the menuView with the controller (this) as scope
            if( !this.contentView ) {
                this.contentView = VP.Views.LoginView.create(this, null, true);
            }

            // Create the HeaderView with the controller (this) as scope
            if( !this.headerView ) {
                this.headerView = M.ToolbarView.extend({
                    value: '拼车回家'
                },{
                        first: VP.Views.ToggleMenuButton
                    }
                ).create(this, null, true);
            }

            this._applyViews();
        },

        _initMenu: function(){
            if( !this.tmpViews ) {
                this.tmpViews = VP.Collections.TmpviewsCollection.create([]);
            }
        },

        gotoPage: function( event, element ) {

            var goto = element.model.get('goto');

            VP.navigate({
                route: goto
            });

        }

    });

})();

/*global VP*/

VP.Controllers = VP.Controllers || {};

(function() {
    'use strict';

    VP.Controllers.AbstractController = M.Controller.extend({

        // Contains the current headerView
        headerView: null,

        // Contains the current contentView
        contentView: null,

        // Contains the current menuView
        menuView: null,

        // The headline which will be displayed in the headerView
        pageHeadline: '',

        // Called from the router when the application starts
        applicationStart: function(settings) {
            var _layout = M.SwitchMenuHeaderContentLayout.extend({

            }).create(this, null, true);
            VP.setLayout(_layout);
            VP.router.menuController._initMenu(settings);
            this._initViews(settings);
        },

        // Called from the router everytime the route/url matchs the controller (binding in main.js)
        show: function(settings) {
            this._initViews(settings);
            var _layout = M.SwitchMenuHeaderContentLayout.extend({}).create(this, null, true);
            if(_layout._type === VP.getLayout()._type){
                VP.getLayout().startTransition();
            } else {
                this.applicationStart();
            }
        },

        // Called for every controller when the application is ready. applicationStart is always called before.
        applicationReady: function(){
            this.registerToMenu(VP.router.menuController);
        },

        // This method assign the header and content view to the current layout.
        _applyViews: function() {
            if(!this.menuView){
                this.menuView = VP.Views.MenuView.create(VP.router.menuController, null, true);
            }

            VP.getLayout().applyViews({
                header: this.headerView,
                content: this.contentView,
                menuContent: this.menuView
            });
            this.toggleMenu();
        },

        _initViews: function() {
            // OVERRIDE ME PLEASE
        },

        registerToMenu: function(){
            // OVERRIDE ME PLEASE
        },

        getSourceCodeUrl: function(){
            return this.githubApplicationRootUrl + this.sourceCodePath;
        },

        toggleMenu: function(){
            if(VP.getLayout().menu){
                VP.getLayout().menu.toggle();
            }

        }

    });

})();

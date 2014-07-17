/*global VP*/

VP.Views = VP.Views || {};

(function() {
    'use strict';

    VP.Views.BackheaderView = M.ToolbarView.extend({
        scopeKey: 'pageHeadline'
    }, {

        first: M.View.extend({

        },{

            menuButton: M.ButtonView.extend({
                icon: 'fa-bars',
                cssClass: 'menu-button',
                events: {
                    tap: 'toggleMenu'
                }
            }),

            backButton: M.ButtonView.extend({
                icon: 'fa-angle-left',
                events: {
                    tap: function() {
                        VP.navigate({
                            route: '/',
                            transition: M.PageTransitions.CONST.MOVE_TO_RIGHT_FROM_LEFT
                        });
                    }
                }

            })
        }),
    });
})();

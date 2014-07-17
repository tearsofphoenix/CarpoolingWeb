/*global VP*/

VP.Views = VP.Views || {};

(function() {
    'use strict';

    VP.Views.MenuView = M.MenuView.extend({
        onOpen: function(){
            $('body').addClass('menu-open');
        },

        onClose: function(){
            $('body').removeClass('menu-open');
        }
    }, {

        // The main navigation for the VP app
        "menu-content": M.ListView.extend({
            scopeKey: 'tmpViews',
            listItemView: M.ListItemView.extend({
                type: M.ListItemView.CONST.LINKED,
                events: {
                    tap: 'gotoPage'
                }
            })
        })

    });

})();

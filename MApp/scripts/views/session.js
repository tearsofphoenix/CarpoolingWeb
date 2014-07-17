/*global VP*/

VP.Views = VP.Views || {};

(function() {
    'use strict';
    
    VP.Views.SessionView = M.View.extend({
        // The view should be in a grid
        grid: 'col-xs-12'
    }, {
	    views: M.View.extend({
	            grid: 'row',
	            value: ''
	        }, {
	        	        
                listView: M.ListView.extend({

                    grid: 'col-xs-12',

                    // The list view's items
/*
                    value: M.Collection.create([

                        {headline: 'Sir Timothy John "Tim" Berners-Lee', text: 'The inventor of the World Wide Web.', image: 'http://upload.wikimedia.org/wikipedia/commons/8/83/Tim_Berners-Lee-Knight-crop.jpg'},
                        {headline: 'Brendan Eich', text: 'Creator of the JavaScript scripting language.', image: 'http://upload.wikimedia.org/wikipedia/commons/0/09/BEich.jpg'},
                        {headline: 'Stefan Jauker', text: 'Creator of the JaukerScript', image: 'http://www.mwaysolutions.com/files/9113/7396/2289/img_team_stefan-jauker.png'},
                        {headline: 'Steven Paul "Steve" Jobs', text: 'Was the co-founder (along with Steve Wozniak and Ronald Wayne), chairman, and CEO of Apple Inc.', image: 'http://upload.wikimedia.org/wikipedia/commons/f/f5/Steve_Jobs_Headshot_2010-CROP2.jpg'},
                        {headline: 'William Henry "Bill" Gates III', text: 'The former chief executive and current chairman of Microsoft', image: 'http://upload.wikimedia.org/wikipedia/commons/b/bd/Dts_news_bill_gates_wikipedia.JPG'}

                    ]),
*/
				contentBinding: {
				            target: VP.Controllers.SessionController,
				            property: 'sessionList'
				        },

                    // This property contains the listitem view
                    listItemView: M.ListItemView.extend({

                        cssClass: 'custom-list',

                        // Extend the default template with this one. It gets injected into the <%= value %> placeholder
                        extendTemplate: '<div class="row"><div class="col-xs-2" style="background-image: url(<%= image %>)"></div><div class="col-xs-10"><h4><%= headline %></h4><h6><%= text %></h6></div></div>',

                        events: {
                            // Register a tap event for this listitem view.
                            tap: function( event, element ) {
                                M.Toast.show(element.model.get('text'));
                            }
                        }

                    })
                })	        
	 	 }),
	});
})();

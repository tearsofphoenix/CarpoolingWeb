/*global VP*/

VP.Controllers = VP.Controllers || {};

(function() {
    'use strict';

    VP.Controllers.SessionController = VP.Controllers.AbstractController.extend({

        pageHeadline: '信息',

        sourceCodePath: 'scripts/views/session.js',

        _initViews: function() {

            // Create the ContentView with the controller (this) as scope
            if( !this.contentView ) {
                this.contentView = VP.Views.SessionView.create(this, null, true);
            }

            // Create the HeaderView with the controller (this) as scope
            if( !this.headerView ) {
                this.headerView = VP.Views.BackheaderView.create(this, null, true);
            }

            this._applyViews();
            
            this.set('sessionList', [

                        {headline: 'Sir Timothy John "Tim" Berners-Lee', text: 'The inventor of the World Wide Web.', image: 'http://upload.wikimedia.org/wikipedia/commons/8/83/Tim_Berners-Lee-Knight-crop.jpg'},
                        {headline: 'Brendan Eich', text: 'Creator of the JavaScript scripting language.', image: 'http://upload.wikimedia.org/wikipedia/commons/0/09/BEich.jpg'},
                        {headline: 'Stefan Jauker', text: 'Creator of the JaukerScript', image: 'http://www.mwaysolutions.com/files/9113/7396/2289/img_team_stefan-jauker.png'},
                        {headline: 'Steven Paul "Steve" Jobs', text: 'Was the co-founder (along with Steve Wozniak and Ronald Wayne), chairman, and CEO of Apple Inc.', image: 'http://upload.wikimedia.org/wikipedia/commons/f/f5/Steve_Jobs_Headshot_2010-CROP2.jpg'},
                        {headline: 'William Henry "Bill" Gates III', text: 'The former chief executive and current chairman of Microsoft', image: 'http://upload.wikimedia.org/wikipedia/commons/b/bd/Dts_news_bill_gates_wikipedia.JPG'}

                    ]);
        },
		
        // Register menu item for this view
        registerToMenu: function( menuController ){
            menuController.registerMenuItem({
                value: '信息',
                goto: 'session'
            });
        },
        
        sessionList : M.Collection.create([

                        {headline: 'Sir Timothy John "Tim" Berners-Lee', text: 'The inventor of the World Wide Web.', image: 'http://upload.wikimedia.org/wikipedia/commons/8/83/Tim_Berners-Lee-Knight-crop.jpg'},
                        {headline: 'Brendan Eich', text: 'Creator of the JavaScript scripting language.', image: 'http://upload.wikimedia.org/wikipedia/commons/0/09/BEich.jpg'},
                        {headline: 'Stefan Jauker', text: 'Creator of the JaukerScript', image: 'http://www.mwaysolutions.com/files/9113/7396/2289/img_team_stefan-jauker.png'},
                        {headline: 'Steven Paul "Steve" Jobs', text: 'Was the co-founder (along with Steve Wozniak and Ronald Wayne), chairman, and CEO of Apple Inc.', image: 'http://upload.wikimedia.org/wikipedia/commons/f/f5/Steve_Jobs_Headshot_2010-CROP2.jpg'},
                        {headline: 'William Henry "Bill" Gates III', text: 'The former chief executive and current chairman of Microsoft', image: 'http://upload.wikimedia.org/wikipedia/commons/b/bd/Dts_news_bill_gates_wikipedia.JPG'}

                    ]),
    });

})();

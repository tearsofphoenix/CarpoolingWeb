
(function(global) {
    'use strict';

    // PLEASE DON'T CHANGE OR REMOVE THE COMMENTS.
    // All comments in this file are necessary for the build process.
    
    global.VP = global.VP || {};

    global.VP.mconfig = {

        // The global namespace for the app. Needed by the framework.
        name: 'VP',

        // Defines the languages for the app.
        // All languages files are located in app/i18n
        locales: [
            {locale: 'en'},
            //m:i18n
        ],

        //specify the file type of the language files. default is 'json'
        localesFileType: 'js',

        // A flag whether to enable the debugView or not.
        // Shake your device to toggle the debugView.
        debugView: NO
    };

})(this);
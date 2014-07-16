/*global kitchensink*/

kitchensink.Views = kitchensink.Views || {};

(function() {
    'use strict';
      var login = function(user) 
	  {  	
	  	var errorMsg = null;
	  	if (user == undefined)
	  	{
		  	errorMsg = "请填写信息";
		  	
	  	}else if (null == user.username)
		{
			errorMsg = "请输入用户名！";
		}else if(null == user.password)
		{
			errorMsg = "请输入密码！";
		}
		
		if (errorMsg)
		{
			M.Toast.show(errorMsg);
		}else
		{		
		    M.Loader.toggle('Loading...');

			var params = NS.fetchArgs(user, ['username', 'password']);
			params['action'] = 'login';
			Network().post(Network().loginURL(), params, function(result, errorMsg)
					{
						M.Loader.toggle();
						if (result && result.status == '0') {
							NS.Log(result);
						}else {
							M.Toast.show(errorMsg);
				 		}
					});				
		}
	  };
	  
    kitchensink.Views.LoginView = M.View.extend({
        // The view should be in a grid
        grid: 'col-xs-12'
    }, {

        textfieldViews: M.View.extend({
            grid: 'row',
            value: ''
        }, {
            userField : M.TextfieldView.extend({
                grid: 'col-xs-12',
                label: '用户名：',
                value: 'a@b.com',
                icon: 'fa-rocket',
	            scopeKey: 'loginInfo.username',
                placeholder: '邮箱'
            })
        }),

        passwordsView: M.View.extend({
            grid: 'row',
            value: ''
        },{
            passwordField : M.TextfieldView.extend({
                grid: 'col-xs-12',
                label: '密码：',
                type: 'password',
                useCustomClear: YES,
                placeholder: '您的密码',
                value: 'c',
	            scopeKey: 'loginInfo.password',
            })
        }),
        
        loginButton: M.ButtonView.extend({
            grid: 'col-xs-12',
            value: '登录',
            cssClass: 'm-success',
            events: {
                tap: function( event, element ) {
					var user = {};					
					var views = element.scope.contentView.childViews;
					
					user.username = views.textfieldViews.childViews.userField.value;
					user.password = views.passwordsView.childViews.passwordField.value;

                	login(user);
                }
            }
        }),
    });

})();

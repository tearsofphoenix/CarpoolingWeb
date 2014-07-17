/*global VP*/

VP.Views = VP.Views || {};

(function() {
    'use strict';
      var publishPath = function(path)
	{
		NS.Log(path);

		var errorMsg = null;
	  	if (path == undefined)
	  	{
		  	errorMsg = "请填写信息";
		  	
	  	}else if (null == path.start)
		{
			errorMsg = "请填写出发地点！";
		}else if(null == path.end)
		{
			errorMsg = "请填写到达地点！";
		}else if(null == path.start_date)
		{
			errorMsg = "请选择出发日期！";
		}else if(null == path.gather_location)
		{
			errorMsg = "请填写集合地点！";
		}else if(null == path.gather_time)
		{
			errorMsg = "请填写集合时间！";
		}else if(null == path.user_name)
		{
			errorMsg = "请填写姓名！";
		}else if(null == path.user_phone)
		{
			errorMsg = "请填写电话！";
		}
		
		if (errorMsg)
		{
			 M.Toast.show(errorMsg);
		}else
		{
			var argNames = ['start', 'end', 'start_date', 'gather_location', 'gather_time', 'user_name', 'user_phone'];
			var params = NS.fetchArgs(path, argNames);
			params['action'] = 'publish';
/* 			params['user_id'] = DataService.userInfo['uuid']; */
			
			Network().post(Network().pathURL(), params, function(result, errorMsg)
			{
				if (result && result.status == '0') {
					M.Toast.show('发布成功！');
				}else {
					M.Toast.show('发布失败！');
		 		}
			})	
		}		
	};

    VP.Views.PublishPathView = M.View.extend({
        // The view should be in a grid
        grid: 'col-xs-12'
    }, {
	    views: M.View.extend({
	            grid: 'row',
	            value: ''
	        }, {
	
	            startField: M.TextfieldView.extend({
	                grid: 'col-xs-12',
	                label: '出发',
	                type: 'text',
	                scopeKey: 'path.start',
	                placeholder: '请填写出发地点'
	            }),
	
	            endField: M.TextfieldView.extend({
	                grid: 'col-xs-12',
	                label: '到达',
	                value: '',
	                scopeKey: 'path.end',
	                placeholder: '请填写到达地点'
	            }),
	
	            startDate: M.TextfieldView.extend({
	                label: '出发日期',
	                grid: 'col-xs-12',
	                scopeKey: 'path.start_date',
	                type: 'date',
	                cssClass: 'left',
	                icon: 'fa-calendar',
	                onGet: function( value ) {
	                    var date = M.Date.create(parseInt(value, 10)).format('YYYY-MM-DD');
	                    return date;
	                },
	                onSet: function( value ) {
	                    return M.Date.create(value).unix() * 1000;
	                }
	            }),
	            
	           gatherField: M.TextfieldView.extend({
	                grid: 'col-xs-12',
	                label: '集合地点',
	                value: '',
	                scopeKey: 'path.gather_location',
	                placeholder: '请填写集合地点'
	            }),	
	            
	            gatherDate: M.TextfieldView.extend({
	                label: '集合日期',
	                grid: 'col-xs-12',
	                scopeKey: 'path.gather_date',
	                type: 'date',
	                cssClass: 'left',
	                icon: 'fa-calendar',
	                onGet: function( value ) {
	                    var date = M.Date.create(parseInt(value, 10)).format('YYYY-MM-DD');
	                    return date;
	                },
	                onSet: function( value ) {
	                    return M.Date.create(value).unix() * 1000;
	                }
	            }),
	            
	           nameField: M.TextfieldView.extend({
	                grid: 'col-xs-12',
	                label: '姓名',
	                value: '',
	                scopeKey: 'path.user_name',
	                placeholder: ''
	            }),	

	           mobileField: M.TextfieldView.extend({
	                grid: 'col-xs-12',
	                label: '电话',
	                value: '',
	                scopeKey: 'path.user_phone',
	                placeholder: ''
	            }),	
	            
		       noteField: M.TextfieldView.extend({
	                grid: 'col-xs-12',
	                label: '备注',
	                value: '',
	                scopeKey: 'path.note',
	                placeholder: ''
	            }),	
	        }),
	                
	        publishButton: M.ButtonView.extend({
            grid: 'col-xs-12',
            value: '发布',
            cssClass: 'm-success',
            events: {
                tap: function( event, element ) {
                NS.Log(element.scope);
                }
            }
        }),

	});
})();

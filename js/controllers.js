angular.module('starter.controllers', [])

.controller('SignInCtrl', function($scope, $state, $ionicPopup) 
{	
	console.log($scope, $state, $ionicPopup);
	
  $scope.signIn = function(user) 
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
		 $ionicPopup.alert({
			 					title: '错误',
			 					content: errorMsg
			 				});
	}else
	{		
		Network().post(Network().loginURL(),
				{
					"action"   : "login",
					"username" : user.username,
					"password" : user.password
				}, function(result, errorMsg)
				{
					if (result && result.status == '0')
					{
						$state.go('tab.dash');
					}else
					{
						$ionicPopup.alert({
			 					title: '错误',
			 					content: errorMsg
			 				})
			 		}
				});				
	}
  };

})

.controller('DashCtrl', function($scope, $state) {
	$scope.gotoSearchPathView = function ()
	{
		NS.Log('will go');
		$state.go('tab.fact');	
	}	
})

.controller('FactCtrl', function($scope, $state) {
	$scope.goHome = function()
	{
		$state.go('tab.dash');
	};
})

.controller('PublishCtrl', function($scope, $state, $ionicPopup) {
	$scope.publishPath = function(path)
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
			 $ionicPopup.alert({
				 					title: '错误',
				 					content: errorMsg
				 				});
		}else
		{
			Network().post(Network().pathURL(), 
			{

			}, function(result, errorMsg)
			{
				if (result && result.status == '0')
				{
					$state.go('tab.dash');
				}else
				{
					
		 		}
			})	
		}		
	}
})

.controller('FriendsCtrl', function($scope, Friends) {
  $scope.friends = Friends.all();
})

.controller('FriendDetailCtrl', function($scope, $stateParams, Friends) {
  $scope.friend = Friends.get($stateParams.friendId);
})

.controller('AccountCtrl', function($scope) {
});

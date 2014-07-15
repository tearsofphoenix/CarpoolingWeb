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

.controller('DashCtrl', function($scope) {
})

.controller('FactCtrl', function($scope) {
})

.controller('PublishCtrl', function($scope) {
})

.controller('FriendsCtrl', function($scope, Friends) {
  $scope.friends = Friends.all();
})

.controller('FriendDetailCtrl', function($scope, $stateParams, Friends) {
  $scope.friend = Friends.get($stateParams.friendId);
})

.controller('AccountCtrl', function($scope) {
});

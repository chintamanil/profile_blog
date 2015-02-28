appControllers.controller('PostListTagCtrl', ['$scope', '$routeParams', '$sce', 'PostService',
    function PostListTagCtrl($scope, $routeParams, $sce, PostService) {

        $scope.posts = [];
        var tagName = $routeParams.tagName;

        PostService.findByTag(tagName).success(function(data) {
            for (var postKey in data) {
                data[postKey].content = $sce.trustAsHtml(data[postKey].content);
            }
            $scope.posts = data;
        }).error(function(status, data) {
            console.log(status);
            console.log(data);
        });

    }
]);

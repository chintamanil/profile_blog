appControllers.controller('PostListCtrl', ['$scope', '$sce', 'PostService',
    function PostListCtrl($scope, $sce, PostService) {

        $scope.posts = [];

        PostService.findAllPublished().success(function(data) {
            for (var postKey in data) {
                data[postKey].content = $sce.trustAsHtml(data[postKey].content);
            }

            $scope.posts = data;
        }).error(function(data, status) {
            console.log(status);
            console.log(data);
        });
    }
]);


 angular.module('app').controller('AdminPostEditCtrl', ['$scope', '$routeParams', '$location', '$sce', 'PostService',
    function AdminPostEditCtrl($scope, $routeParams, $location, $sce, PostService) {
        $scope.post = {};
        var id = $routeParams.id;
        $scope.textarea = '**Welcome, I am some Bold Markdown text**';
        $scope.liveedit = '**Welcome, I am some Bold Markdown text**';
        PostService.read(id).success(function(data) {
            $scope.post = data;
            $scope.textarea = '**Welcome, I am some Bold Markdown text**';
    		$scope.liveedit = data;
            $('#textareaContent').wysihtml5({"font-styles": false});
            $('#textareaContent').val($sce.trustAsHtml(data.content));
        }).error(function(status, data) {
            $location.path("/admin");
        });

        $scope.save = function save(post, shouldPublish) {
            if (post !== undefined
                && post.title !== undefined && post.title != "") {

                var content = $('#textareaContent').val();
                if (content !== undefined && content != "") {
                    post.content = content;

                    if (shouldPublish != undefined && shouldPublish == true) {
                        post.is_published = true;
                    } else {
                        post.is_published = false;
                    }

                    // string comma separated to array
                    if (Object.prototype.toString.call(post.tags) !== '[object Array]') {
                        post.tags = post.tags.split(',');
                    }

                    PostService.update(post).success(function(data) {
                        $location.path("/admin");
                    }).error(function(status, data) {
                        console.log(status);
                        console.log(data);
                    });
                }
            }
        }
    }
]);

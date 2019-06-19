 
    

app.controller('blogsController', ['$scope', '$resource',
    function($scope, $resource) {

        const Blog = $resource('/api/blogs');

        Blog.query(function (results) {
            $scope.blogs = results;
        })
        
        $scope.blogs = []
       /* $scope.blogs = [
            {
                "_id": ObjectId("5cef2a5a420b366a58fdadb3"),
                "title": "blog1" 
            },
            { 
                "_id" : ObjectId("5cef2ea5c1a79acbaab3f5ee"),
                "title": "blog2" 
            }
        ] */

    $scope.createBlog = function () {
        const blog = new Blog();
        blog.name = $scope.blogName;
        blog.$save(function (result) {
            $scope.blogs.push(result);
            $scope.blogName = '';
        });
    //  $scope.blogs.push({ name: $scope.blogName });
    //  $scope.blogName = '';
    }
}]); 
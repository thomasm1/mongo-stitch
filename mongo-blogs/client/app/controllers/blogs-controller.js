 
    

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
        blog.blogID = $scope.blogID; // NEED type test!!
        blog.title = $scope.blogTitle;
        blog.date = $scope.blogDate;
        blog.cat3 = $scope.blogCat3;
        blog.post = $scope.blogPost;
        blog.cite = $scope.blogCite;

        blog.$save(function (result) {
            $scope.blogs.push(result);
            $scope.blogID = null
            $scope.blogTitle = '';
            $scope.blogDate = '';
            $scope.blogCat3 = '';
            $scope.blogPost = '';
            $scope.blogCite = '';  
        });
 
    //  $scope.blogs.push({ name: $scope.blogName });
    //  $scope.blogName = '';

    }
     
}]);     

app.filter('reverse', function() {
  return function(items) {
    return items.slice().reverse();
  };
});
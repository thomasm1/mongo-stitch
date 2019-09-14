(function () {

    angular.module('app')
        .controller('EditBlogController', ['$rootScope', '$scope', '$resource', '$routeParams', 'blogs', '$cookies', '$cookieStore', 'dataService', '$log', '$location', 'currentUser', EditBlogController]);

    function EditBlogController($rootScope, $scope, $resource, $routeParams, blogs, $cookies, $cookieStore, dataService, $log, $location, currentUser) {
        $scope.title = "Blog Edit App"
 
        const Blog = $resource('/api/apiBlogs'); 
        // Blog.query(function (results) {
        //     $scope.blogs = results;
        // }) 
        /*   $scope.blogs = [] */

        $scope.blogs = [
            {
               // "_id": ObjectId("5cef2a5a420b366a58fdadb3"),
                "name": "Mr. Blog One",
                "age": "23", 
                "gender": "male",
                "email": "thomasm1.maestas@gmail.com",
                "height": "60",
                "dob": "09/03/1996",
                "address": "2300 calle de real"
            },
            { 
            //    "_id" : ObjectId("5cef2ea5c1a79acbaab3f5ee"),
                "name": "Mrs. Blog Two",
                "age": "33",
                "gender": "female",
                "email": "thomasm1.maestas@gmail.com",
                "height": "54",
                "dob": "12/05/1986",
                "address": "2 Teal Dr."
            }
        ];

    $scope.createBlog = function () {
        const blog = new Blog();
     
        blog.name = $scope.blogName;
        blog.age = $scope.blogAge;
        blog.gender = $scope.blogGender;
        blog.email = $scope.blogEmail;
        blog.height = $scope.blogHeight;
        blog.dob = $scope.blogDob; 
        blog.address = $scope.blogAddress;
        blog.height = $scope.blogHeight;
         
        // blog.$save(function (result) {
        //     $scope.blogs.push(result);
        //     $scope.blogName = '';
        // });
    $scope.blogs.push({ 
        name: $scope.blogName,
        age: $scope.blogAge, 
        gender: $scope.blogGender,
        email: $scope.blogEmail,
        height: $scope.blogHeight,
        dob: $scope.blogDob,
        address: $scope.blogAddress
    });
    $scope.blogName = '';
    $scope.blogAge = '';
    $scope.blogGender = ''; 
    $scope.blogEmail = '';
    $scope.blogHeight = '';
    $scope.blogDob = '';
    $scope.blogAddress = '';
    }

        var vm = this;

        dataService.getBlogByID($routeParams.blogID)
            .then(getBlogSuccess)
            .catch(getBlogError);

        function getBlogSuccess(blog) {
            vm.currentBlog = blog;
            currentUser.lastBlogEdited = vm.currentBlog;
        }

        function getBlogError(reason) {
            $log.error(reason);
        }
 
        vm.setAsFavorite = function() {

            $cookies.favoriteBlog = vm.currentBlog.name;

        };
        vm.saveBlog = function() {

            dataService.updateBlog(vm.currentBlog)
                .then(updateBlogSuccess)
                .catch(updateBlogError);

        };

        function updateBlogSuccess(message) {
            $log.info(message);
            $location.path('/');
        }

        function updateBlogError(errorMessage) {
            $log.error(errorMessage);
        }


    }

}());
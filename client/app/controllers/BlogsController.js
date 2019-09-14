(function() {

    angular.module('app')
        .controller('BlogsController', ['$rootScope', '$scope', 'blogs', 'dataService',  '$log', '$resource', '$route', 'currentUser', BlogsController]);

        BlogsCtrl = 'BlogsCtrl' 
        console.log(BlogsCtrl);
        
    function BlogsController($rootScope, $scope, blogs, dataService,  $log,  $resource, $route, currentUser) {
        $scope.administration = false;
        $scope.toggle = function() {
            ($scope.administration===true)?($scope.administration=false):($scope.administration=true);
        } 
        var vm = this; 
        vm.appName = blogs.appName;
        
        // get blog by ID
        vm.blogData =  dataService.blogApi();
        console.log(vm.blogData)
       
        vm.blogData.name = vm.blogData.blogData[0].name;
        console.log(vm.blogData.name);
          

        function getBlogsNotification(notification) {
            console.log('Promise Notification: ' + notification);
         }
        //

        dataService.getUserSummary()
            .then(getUserSummarySuccess);

        function getUserSummarySuccess(summaryData) { 
            vm.summaryData = summaryData;
        }


        dataService.getAllBlogs()
            .then(getBlogsSuccess, null, getBlogsNotification)
            .catch(errorCallback)
            .finally(getAllBlogsComplete);

        function getBlogsSuccess(blogs) {
            //throw 'error in success handler';
            vm.allBlogs = blogs;
        }

        function getBlogsNotification(notification) {
           console.log('Promise Notification: ' + notification);
        }

        function errorCallback(errorMsg) {
            console.log('Error Message: ' + errorMsg);
        }

        function getAllBlogsComplete() {
             console.log('getAllBlogs has completed');
        } 
       
        vm.currentUser = currentUser;

        vm.deleteBlog = function (blogID) {

            dataService.deleteBlog(blogID)
                .then(deleteBlogSuccess)
                .catch(deleteBlogError);

        };

        function deleteBlogSuccess(message) {
            $log.info(message);
            $route.reload();
        }

        function deleteBlogError(errorMessage) {
            $log.error(errorMessage);
        }

    }

}());
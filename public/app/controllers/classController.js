angular.module('Controllers')
    .controller("classController", function ($scope, $rootScope, $routeParams, $window) {
        $rootScope.tabActive = "class";

        $scope.hideOverlay = true;
        $scope.hideOauth = true;
        $scope.isLoading = false;
        $scope.error = null;

        $scope.hideToolTip = true;
        $scope.active = false;

        $scope.classroom = {};

        $scope.test = false;

        $scope.search = {
            value: ""
        };

        $scope.classrooms = [

        ];

        $scope.notif = null;

        $scope.selected = null;

        $scope.select = function (room) {
            $scope.selected = room;
        };

        $scope.checkInclude = function (student) {
            if (!$scope.search.value) return true;

            for (var header in student) {
                if (!student[header].indexOf) return student[header] === ($scope.search.value === "true");
                if (student[header].indexOf($scope.search.value) !== -1)
                    return true;
            }
        };

        $scope.newNotif = function (message, success) {
            $scope.notif = {message: message};

            clearTimeout($scope.to);
            $scope.to = setTimeout(function () {
                $scope.notif = null;
                $scope.$apply();
            }, 5000);
        };

        $scope.Actions = {
            getClassList: function () {
                $.ajax({
                    url: "/v1/api/classrooms",
                    success: function (result) {
                        $scope.classrooms = result;
                        $scope.$apply();
                    }
                })
            },
            onClassSubmit: function () {
                $.ajax({
                    method: "POST",
                    url: "/v1/api/classrooms",
                    data:  JSON.stringify($scope.classroom),
                    processData: false,
                    contentType: "application/json",
                    success: function (result) {
                        //$scope.tas = result;
                        $scope.hideImport = $scope.hideOverlay = true;
                        $scope.active = false;
                        $scope.Actions.getClassList();
                        $scope.classroom = {};

                        $scope.newNotif("Successfully added", true);

                    }
                })
            }
        };

        $scope.onAddClick = function () {
            $scope.hideAdd = $scope.hideOverlay = false;
            // setTimeout(function () {
            //     $scope.active = true;
            //     $scope.$apply();
            // }, 30);
        };

        $scope.onCancelClick = function () {
            $scope.hideImport = $scope.hideAdd = $scope.hideOverlay = true;
            $scope.active = false;
        };

        $scope.checkInclude = function (student) {
            if (!$scope.search.value) return true;
            for (var header in student) {
                if (student[header].indexOf($scope.search.value) !== -1)
                    return true;
            }
        };

        $scope.onOverlayClick = function ($event) {
            var form = document.getElementsByClassName("import-wrapper")[0];
            if ($event.target !==  form && !form.contains($event.target)) {
                $scope.hideImport = $scope.hideAdd = $scope.hideOverlay = true;
            }
        };

        $scope.Actions.getClassList();

        if (!$rootScope.user) {
            $.ajax({
                url: "/v1/api/session/current",
                success: function (result) {
                    $rootScope.user = result;
                    $scope.$apply();
                }
            })
        }
    });
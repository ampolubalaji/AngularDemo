﻿(function () {

    var ForgotController = function ($scope, $location, RegisterService) {

        $scope.ForgotUser = function () {            
            var resp = RegisterService.GetPassword($scope.fname);
            resp.success(function (data) {
                alert(data);
                $location.path('/signin');
            });
            resp.error(function () {
                alert("Login Details Incorrect");
            });
        }

    };
    angular.module("myapp").controller("ForgotController", ForgotController);
}())
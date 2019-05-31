var app = angular.module("FinalApp", []);

app.controller("questsCtrl", function( $scope, $http ){
    $scope.update = function(){
        $http.get("http://bonsai.lcsc.edu/gcoughenour/citpt-213/Final/api.php/records/quests")
        .then( response => {
            $scope.quests = response.data.records;
        });
    }
    $scope.update();


    $scope.add = function(){
        var newQuest = {
            "questInfo":$scope.new_quest_info,
            "questLocation":$scope.new_quest_location,
            "questPayout":$scope.new_quest_payout
        }
        $http.post("http://bonsai.lcsc.edu/gcoughenour/citpt-213/Final/api.php/records/quests", newQuest)
        .then( response => {
            console.log(response);
            $scope.update();
        });
    }


//    $scope.update = function(updatedInfo){
//         $http.update("http://bonsai.lcsc.edu/gcoughenour/citpt-213/Final/api.php/records/quests")
//         .then( response => {
//             $scope.update();
//         });
//     }
})
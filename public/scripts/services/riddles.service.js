// GETs riddles list from Server
// POSTs new riddles to Server and GETs new list of riddles
// tracks total number of riddles 
myApp.service('RiddlesService', function ($http) {
    console.log('in RiddlesService');
    var self = this;

    self.total = 0;

    // POST route to server
    self.postRiddle = function (param) {
        $http({
            method: 'POST',
            url: '/riddles',
            data: param
        }).then(function (response) {
            console.log('POST response ->', response);
            self.getRiddles();
        });
    } // end postRiddle

    // get route to server
    self.getRiddles = function () {
        console.log('in getRiddles');
        $http({
            method: 'GET',
            url:'/riddles'
        }).then(function(response) {
            self.riddleList = response.data;
            console.log('self.riddleList ->', self.riddleList);
            self.total = self.riddleList.length;
            console.log('total ->', self.total);
            
        }); // end http
    }; // end getRiddles
}); // end controller
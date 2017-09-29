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
        });
    } // end postRiddle

    // get route to server
    

});
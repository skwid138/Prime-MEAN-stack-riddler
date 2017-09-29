// Displays 1 riddle at a time on the DOM
// Displays a counter x/totalNumberOfRiddles
// GETs riddles from Riddles Service
myApp.controller('ViewRiddleController', function (RiddlesService) {
    console.log('in ViewRiddleController');
    var vm = this;

    // has to be an object, unpacked on the html
    vm.listOfRiddles = RiddlesService.riddleList;
    console.log('view.riddles', vm.riddles);

    // GET on page load
    vm.getRiddles = function() {
        RiddlesService.getRiddles();
        
        
    }; // end getRiddles
}); // end controller
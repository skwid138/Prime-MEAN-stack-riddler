// Takes input from DOM, sends it to the Riddles Service
myApp.controller('AddRiddleController', function (RiddlesService) {
    console.log('in AddRiddleController');
    var vm = this;

    vm.addRiddle = function () {
        var objToSend = {
            creator: vm.creatorIn,
            setup: vm.setupIn,
            punchline: vm.punchlineIn
        }
        console.log('objToSend ->', objToSend);
        
        RiddlesService.postRiddle(objToSend);
    }
}); // end controller
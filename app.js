console.log('sanity check')

angular
  .module('challenge', [])
  .controller('getController', getController)

getController.$inject = ['$http'];
function ReviewController ($http) {
  var vm = this;

  vm.attendeesList = [];

  $http({
      method: 'GET',
      url: '/api/attendees'
    }).then(function onSuccess (response){
      vm.attendeesList = response.data;
    }, function onError (error){
      console.log('GET error ', error);
    });

}

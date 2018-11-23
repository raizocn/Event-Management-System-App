angular.module('app.controllers', [])
  .controller('homeCtrl', ['$scope', '$stateParams', '$http', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
    // You can include any angular dependencies as parameters for this function
    // TIP: Access Route Parameters for your page via $stateParams.parameterName
    function ($scope, $stateParams, $http, ) {
      $scope.fetchData = function (isReload) {
        $http.get("http://localhost:1337/")
          .then(function (response) {
            $scope.items = response.data;
            console.log(response.data);
          }).finally(function () {
            if (isReload) {
              console.log('Home page has refreshed!')
              $scope.$broadcast('scroll.refreshComplete');
            }
          });
      }
      $scope.fetchData();
    }
  ])
  .controller('organizerCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
    // You can include any angular dependencies as parameters for this function
    // TIP: Access Route Parameters for your page via $stateParams.parameterName
    function ($scope, $stateParams) {}
  ])
  .controller('venueCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
    // You can include any angular dependencies as parameters for this function
    // TIP: Access Route Parameters for your page via $stateParams.parameterName
    function ($scope, $stateParams) {}
  ])
  .controller('personCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
    // You can include any angular dependencies as parameters for this function
    // TIP: Access Route Parameters for your page via $stateParams.parameterName
    function ($scope, $stateParams) {}
  ])
  .controller('detailsCtrl', ['$scope', '$stateParams', '$http', '$ionicPopup', '$ionicHistory', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
    // You can include any angular dependencies as parameters for this function
    // TIP: Access Route Parameters for your page via $stateParams.parameterName
    function ($scope, $stateParams, $http, $ionicPopup, $ionicHistory) {
      $http.get("http://localhost:1337/search", {
          params: {
            id: $stateParams.id
          }
        })
        .then(function (response) {
            if (response.data) {
              $scope.item = response.data;
              console.log(response.data);
            } else {
              var alertPopup = $ionicPopup.alert({
                title: 'Load Event Failed',
                template: 'Specified Event has maybe deleted or modified! Please Go back to previous page and refresh.'
              });
              alertPopup.then(function (res) {
                $ionicHistory.goBack();
              });
            }
          },
          function (response) {
            var alertPopup = $ionicPopup.alert({
              title: response.data,
              template: 'Load Data failed. Please try again.'
            });
          }
        ).finally(function () {
        });
    }
  ])
  .controller('locationCtrl', ['$scope', '$stateParams', 'venueService', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
    // You can include any angular dependencies as parameters for this function
    // TIP: Access Route Parameters for your page via $stateParams.parameterName
    function ($scope, $stateParams, venueService) {
      var venueModel = venueService.getVenue($stateParams.venueId);
      var map = L.map('map').setView([venueModel.Latitude, venueModel.Longitude], 17);
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      }).addTo(map);
      L.marker([venueModel.Latitude, venueModel.Longitude]).addTo(map)
        .bindPopup(venueModel.VenueName);
    }
  ])
  .controller('eventsByOrganizerCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
    // You can include any angular dependencies as parameters for this function
    // TIP: Access Route Parameters for your page via $stateParams.parameterName
    function ($scope, $stateParams) {}
  ])
  .controller('eventsByVenueCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
    // You can include any angular dependencies as parameters for this function
    // TIP: Access Route Parameters for your page via $stateParams.parameterName
    function ($scope, $stateParams) {}
  ])
  .controller('loginCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
    // You can include any angular dependencies as parameters for this function
    // TIP: Access Route Parameters for your page via $stateParams.parameterName
    function ($scope, $stateParams) {}
  ])
  .controller('registeredPageCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
    // You can include any angular dependencies as parameters for this function
    // TIP: Access Route Parameters for your page via $stateParams.parameterName
    function ($scope, $stateParams) {}
  ])

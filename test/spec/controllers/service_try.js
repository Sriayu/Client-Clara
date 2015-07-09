'use strict';

describe('Controller: ServiceTryCtrl', function () {

  // load the controller's module
  beforeEach(module('helpMeGodApp'));

  var ServiceTryCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ServiceTryCtrl = $controller('ServiceTryCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});

app.directive('contenteditable', [function() {
    return {
        require: '?ngModel',
        templateUrl: 'templates/description.html',
        controller:'todoController'
        scope: {

        },
        link: function(scope, element, attrs, ctrl) {
          // element.parent().append('<button type='button' ng-disabled='frm.$invalid'value="click me" >Go</button>');

            element.bind('blur', function() {
                scope.$apply(function() {
                    ctrl.$setViewValue(element.html());
                });
            });

            // model -> view
            ctrl.$render = function() {
                element.html(ctrl.$viewValue);
            };

            // load init value from DOM
            ctrl.$render();

            // remove the attached events to element when destroying the scope
            // scope.$on('$destroy', function() {
            //     element.unbind('blur');
            //     element.unbind('paste');
            //     element.unbind('focus');
            // });
        }
    };
}]);

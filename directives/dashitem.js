var module = angular.module('snDash.home');

module.directive('dashItem', function($compile) {

    function fakeChartData1() {
        var actual = [],
            estimated = [];
        // Base data on a sine wave
        for (var i = 0; i < 30; i++) {
            var y = Math.floor((Math.sin(i / (2.5)) + 1) * 5)
            actual.push({ x: i, y: y + (Math.ceil((Math.random() * 10) % 5) + 26) });
            estimated.push({ x: i, y: y + (Math.ceil((Math.random() * 10) % 3)) + 26 });
        }

        return [{
            values: estimated,
            key: 'Estimated',
            color: 'purple',
            area: true
        }, {
            values: actual,
            key: 'Actual',
            color: 'blue',
            area: true
        }];
    };

    /*
    Based on the type present in the scope item, insert the appropriate directive.
     */
    function linker(scope, element, attrs) {
        switch (scope.item.type) {
            case 'wavychart':
                scope.item.data = fakeChartData1();
                element.html('<dash-chart></dash-chart>');
                break;
            case 'statsummary':
                element.html('<stat-summary></stat-summary>');
                break;
            case 'dayprogress':
                element.html('<dash-chart></dash-chart>');
                break;
            case 'projectlist':
                element.html('<project-list></project-list>');
                break;
        }
        $compile(element.contents())(scope);
    };

    return {
        restrict: 'E',
        link: linker,
        scope: {
            item: '='
        }
    };
});

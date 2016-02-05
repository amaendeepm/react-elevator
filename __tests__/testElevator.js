jest.dontMock('../script/elevator.js');

describe('ElevatorTest', function() {

var otisElevator, TestUtils;

  beforeEach(function() {
	    var React = require('react/addons');
		var Elevator = require('../script/elevator.js');
		TestUtils = React.addons.TestUtils;
    	otisElevator = TestUtils.renderIntoDocument(<Elevator/>);
  });

  it('checks initial elevator rendered with direction UP', function() {

		var floorChk = TestUtils.findRenderedDOMComponentWithTag(otisElevator, 'button');
    	expect(floorChk.getDOMNode().textContent).toEqual('Direction UP');
	});

   it('checks toggling of elevator direction UP/DN', function() {

			var floorChk = TestUtils.findRenderedDOMComponentWithTag(otisElevator, 'button');

			TestUtils.Simulate.click(floorChk);
			expect(floorChk.getDOMNode().textContent).toEqual('Direction DN');

			TestUtils.Simulate.click(floorChk);
			expect(floorChk.getDOMNode().textContent).toEqual('Direction UP');

	});

});
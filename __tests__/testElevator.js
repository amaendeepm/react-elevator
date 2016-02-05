jest.dontMock('../script/elevator.js');

describe('ElevatorTest', function() {
  it('checks initial elevator rendered with direction UP', function() {
    	var React = require('react/addons');
    	var TestUtils = React.addons.TestUtils; // Yet to grasp it

    	var Elevator = require('../script/elevator.js');
    	var otis = TestUtils.renderIntoDocument(<Elevator/>);
		var floorChk = TestUtils.findRenderedDOMComponentWithTag(otis, 'button');
    	expect(floorChk.getDOMNode().textContent).toEqual('Direction UP');
	});

	it('checks toggling of elevator direction UP/DN', function() {
	    	var React = require('react/addons');
	    	var TestUtils = React.addons.TestUtils; // Yet to grasp it

	    	var Elevator = require('../script/elevator.js');
	    	var otis = TestUtils.renderIntoDocument(<Elevator/>);
			var floorChk = TestUtils.findRenderedDOMComponentWithTag(otis, 'button');

			TestUtils.Simulate.click(floorChk);
			expect(floorChk.getDOMNode().textContent).toEqual('Direction DN');

			TestUtils.Simulate.click(floorChk);
			expect(floorChk.getDOMNode().textContent).toEqual('Direction UP');

	});

});
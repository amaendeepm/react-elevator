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

   it('Can change direction', function() {

			var floorChk = TestUtils.findRenderedDOMComponentWithTag(otisElevator, 'button');

			TestUtils.Simulate.click(floorChk);
			expect(floorChk.getDOMNode().textContent).toEqual('Direction DN');

			TestUtils.Simulate.click(floorChk);
			expect(floorChk.getDOMNode().textContent).toEqual('Direction UP');

	});

	it('Can accept a floor number', function() {

	});

	it('Can move to that floor', function() {

	});

	it('Can mantain a list of floor numbers', function() {

	});

	it('Can move through the floors', function() {

	});

	it('Can reverse direction when it reaches the top etc.', function() {

	});



});
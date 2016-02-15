jest.dontMock('../script/elevator.js');

describe('ElevatorTest', function() {

var React, Elevator, otisElevator,TestUtils, TestUtilsAddOns;

  beforeEach(function() {
	    React = require('react/addons');
		Elevator = require('../script/elevator.js');
		TestUtils = require('react-addons-test-utils');
		TestUtilsAddOns = require('react-testutils-additions');
    	otisElevator = TestUtils.renderIntoDocument(<Elevator/>);
  });



  it('checks initial elevator rendered with direction', function() {
	  	//Check if sub-component toggle direction button is rendered
		var floorChk = TestUtils.findRenderedDOMComponentWithTag(otisElevator, 'button');
    	expect(floorChk.getDOMNode().textContent).toEqual('Toggle Direction');
	});

   it('Can change direction', function() {

			var elevator = TestUtilsAddOns.renderIntoDocument(<Elevator/>);
			var dirLabel = TestUtilsAddOns.findRenderedDOMComponentWithId(elevator, "elev-direction").htmlFor;

			console.log('**************' + dirLabel);
			var floorChk = TestUtilsAddOns.findRenderedDOMComponentWithTag(otisElevator, 'button');
			TestUtils.Simulate.click(floorChk);
			// TODO: Now get direction and check
			//expect(floorChk.getDOMNode().textContent).toEqual('Direction DN');

			TestUtils.Simulate.click(floorChk);
			// TODO: Now get direction and check
			//expect(floorChk.getDOMNode().textContent).toEqual('Direction UP');

	});


	describe("Floor changing movements", function() {

		it('Can accept a floor number', function() {
			//TODO: Select Control +  on click set the floor number
		});

		it('Can move to that floor', function() {
			//TODO: read value of floor value indicator
		});

		it('Can mantain a list of floor numbers', function() {
			//TODO: Return list of floors
		});

		it('Can move through the floors', function() {
			//TODO:
		});

	});

	it('Can reverse direction when it reaches the top etc.', function() {

	});



});
jest.dontMock('../script/elevator.jsx');

describe('ElevatorTest', function() {

var React, Elevator, otisElevator,TestUtils, TestUtilsAddOns;

  beforeEach(function() {
	    React = require('react/addons');
		Elevator = require('../script/elevator.jsx');
		TestUtils = require('react-addons-test-utils');
		TestUtilsAddOns = require('react-testutils-additions');
    	otisElevator = TestUtils.renderIntoDocument(<Elevator/>);
  });

  it('checks initial elevator rendered with direction', function() {
	  	//Check if sub-component toggle direction button is rendered
		var floorChk = TestUtils.findRenderedDOMComponentWithTag(otisElevator, 'button');
    	expect(floorChk.getDOMNode().textContent).toEqual('Toggle Direction (UP)');
	});

   it('Can change direction', function() {

		var floorChk = TestUtils.findRenderedDOMComponentWithTag(otisElevator, 'button');
    	expect(floorChk.getDOMNode().textContent).toEqual('Toggle Direction (UP)');

		TestUtils.Simulate.click(floorChk);
		expect(floorChk.getDOMNode().textContent).toEqual('Toggle Direction (DN)');

		TestUtils.Simulate.click(floorChk);
		expect(floorChk.getDOMNode().textContent).toEqual('Toggle Direction (UP)');

	});

	it('Can accept a floor number & move to that floor', function() {
		var floorSelect = TestUtils.findRenderedDOMComponentWithTag(otisElevator, 'select');
		TestUtils.Simulate.change(floorSelect, { target: { value: '5' } });
		var floorVal = TestUtilsAddOns.findRenderedDOMComponentWithId(otisElevator, 'elev-floor').value;
		console.log('%%% ', floorVal);
		expect(floorVal).toEqual('5');
	});

	it('Can maintain a list of floor numbers', function() {
			//TODO: Return list of floors --from htmlFor? (Once made list param variable to Elevator constructor)
	});

	it('Can reverse direction when it reaches the top etc.', function() {
		var floorSelect = TestUtils.findRenderedDOMComponentWithTag(otisElevator, 'select');
		TestUtils.Simulate.change(floorSelect, { target: { value: '0' } });
		var floorVal = TestUtilsAddOns.findRenderedDOMComponentWithId(otisElevator, 'elev-floor').value;
		expect(floorVal).toEqual('0');
		var floorChk = TestUtils.findRenderedDOMComponentWithTag(otisElevator, 'button');
    	expect(floorChk.getDOMNode().textContent).toEqual('Toggle Direction (UP)');

    	TestUtils.Simulate.change(floorSelect, { target: { value: '10' } });
		floorChk = TestUtils.findRenderedDOMComponentWithTag(otisElevator, 'button');
    	expect(floorChk.getDOMNode().textContent).toEqual('Toggle Direction (DN)');

	});



});
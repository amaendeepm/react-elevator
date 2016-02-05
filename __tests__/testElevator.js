jest.dontMock('../script/elevator.js');

describe('ElevatorTest', function() {
  it('checks initial elevator floor to be ground floor', function() {
    	var React = require('react/addons');
    	var TestUtils = React.addons.TestUtils; // Yet to grasp it

    	var Elevator = require('../script/elevator.js');
    	var otis = TestUtils.renderIntoDocument(<Elevator/>);
		var floorChk = TestUtils.findRenderedDOMComponentWithTag(otis, 'label');
    	expect(floorChk.getDOMNode().textContent).toEqual('0');
	});
});
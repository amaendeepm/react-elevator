/** @jsx React.DOM */

'use strict';

var React = require('react/addons');
var ReactDOM = require('react-dom');

var ElevatorFloorIndicator = React.createClass({

  displayName: 'ElevatorFloorIndicator',

  render : function(){
    return <input type="text" id="elev-floor" value={this.props.localCounter} disabled/>
  }
});


module.exports = React.createClass({

displayName: 'Elevator',

changeDirection : function() {
	  if(this.state.direction === 'UP') {
	  	this.state.direction = 'DN';
	  }
	  else if (this.state.direction === 'DN') {
	  	this.state.direction = 'UP';
	  }
	  this.forceUpdate();
	  },

setFloor : function(e) {


	console.log('To= '+e.target.value + ' At= ' + this.state.floor );
	
	var toFloor = e.target.value || this.state.floor;
	toFloor = parseInt(toFloor);
	var atNow  = parseInt(this.state.floor);
	
	if(toFloor > atNow) {
		this.state.direction = 'UP';
	}
	else if(toFloor < atNow) {
		this.state.direction = 'DN';
	}
	
	//Boundary Check to Toggle direction
	if(toFloor === parseInt(this.state.floorList[0]))
		this.state.direction = 'UP';
	else if(toFloor === parseInt(this.state.floorList[this.state.floorList.length-1]))
		this.state.direction = 'DN';
		
	this.state.floor = toFloor;
	console.log('Final direction ... ' + this.state.direction);
  	this.forceUpdate();
},


getInitialState : function(){
	return { floor: 0, direction: 'UP', floorList:[0,1,2,3,4,5,6,7,8,9,10] };
},

//TODO: Maybe improvise later with https://www.npmjs.com/package/react-datalist

render : function(){
	var floorData     = this.state.floorList,
            floorOption = function(X) {
                return <option>{X}</option>;
            };
    return(
    <div id="elevator" data-floor={this.state.floor} data-direction={this.state.direction}>
      <label>--Elevator--</label><br/>
      Direction:<label id="elev-direction" htmlFor={this.state.direction}>{this.state.direction}</label><br/>
      <button onClick ={this.changeDirection}>Toggle Direction ({this.state.direction})</button><br/>
      Current Floor:<ElevatorFloorIndicator localCounter={this.state.floor}/><br/>
      (3) Goto Floor <select onChange={this.setFloor}>{floorData.map(floorOption)}</select><br/>
    </div>
    )
  }
});
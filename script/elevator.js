'use strict';

var React = require('react/addons');

var ElevatorFloorIndicator = React.createClass({
  render : function(){
    return <label id="elev-floor" htmlFor={this.props.localCounter}>{this.props.localCounter}</label>
  }
});



var Elevator = React.createClass({

  changeDirection : function() {
	  if(this.state.direction === 'UP') {
	  	this.state.direction = 'DN';
	  }
	  else if (this.state.direction === 'DN') {
	  	this.state.direction = 'UP';
	  }
	  this.forceUpdate();
	  },


  setFloorList : function() {   },

  goFloor : function(fval) {
    this.state.floor = fval
  },

  getFloor : function() {
    return this.state.floor
  },

  setFloor : function(obj) {
    var toFloor = document.getElementById("flrSlct").value;
    if(toFloor === this.state.floorList[0] || toFloor > this.state.floor)
      this.state.direction = 'UP';
    else if(toFloor == this.state.floorList[this.state.floorList.length-1] || toFloor < this.state.floor)
      this.state.direction = 'DN';
	  this.state.floor = toFloor;
	  this.forceUpdate();
  },


  getInitialState : function(){
    return { floor: 0, direction: 'UP', floorList:[0,1,2,3,4,5,6,7,8,9,10] };
  },

  render : function(){
    var floorData     = this.state.floorList,
            floorOption = function(X) {
                return <option>{X}</option>;
            };
    return(
    <div id="elevator" data-floor={this.state.floor} data-direction={this.state.direction}>
      <label>--Elevator--</label><br/>
      Direction:<label id="elev-direction" htmlFor={this.state.direction}>{this.state.direction}</label><br/>
      <button onClick ={this.changeDirection}>Toggle Direction</button><br/>
      Current Floor:<ElevatorFloorIndicator localCounter={this.state.floor}/><br/>
      (3) Goto Floor <select id="flrSlct" onChange={this.setFloor}>{floorData.map(floorOption)}</select><br/>
      (4) Set Valid Floors (Multi-Select)<br/>
    </div>
    )
  }
});

module.exports = ElevatorFloorIndicator;
module.exports = Elevator;
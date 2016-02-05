'use strict';

var React = require('react/addons');

var ElevatorControl = React.createClass({

  render : function(){
    return(
      <div id="elevator">
        <button onClick ={this.props.localHandleClick}>Direction {this.props.localDir}</button>
      </div>
    );
  }
})

var ElevatorFloorIndicator = React.createClass({
  render : function(){
    return <div>Floor:<label>{this.props.localCounter}</label></div>
  }
})


var Elevator = React.createClass({

  changeDirection : function() { },


  setFloorList : function() {   },

  goFloor : function(fval) {
    this.state.floor = fval
  },

  getFloor : function() {
    return this.state.floor
  },


  getInitialState : function(){
    return { floor: 0, direction: 'UP' };
  },

  handleUp : function(){
    this.setState( {floor: this.state.floor+1})
  },

  handleDn : function(){
    this.setState( {floor: this.state.floor-1})
  },

  render : function(){
    return(
    <div>
      <label> Elevator </label>
      <ElevatorControl localHandleClick={this.changeDirection} localDir={this.state.direction}/>
      <ElevatorFloorIndicator localCounter={this.state.floor}/>
    </div>
    )
  }
})

module.exports = ElevatorControl;
module.exports = ElevatorFloorIndicator;
module.exports = Elevator;
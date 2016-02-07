var ElevatorDirectionControl = React.createClass({

  render : function(){
    return(
      <div id="directionToggle">
        <button onClick ={this.props.localHandleClick}>Direction {this.props.localDir}</button>
      </div>
    );
  }
})

var ElevatorFloorSelector = React.createClass({

    componentDidMount: function() {
        //alert('1');
        var $selectContainer = $(this.refs.selectContainer.getDOMNode());
        var $select = $('<select/>');//.prop('onChange',{this.onChange});

        var html = '';
          for (var i = 0, len = this.props.localFloorList.length; i < len; ++i) {
            html += '<option value="' + this.props.localFloorList[i] + '">' + this.props.localFloorList[i] + '</option>';
          }
        //$select.change = {this.onChange};

        $select.change(function(evt) {
          alert('came here' + evt);
          this.props.onChange();
        });
        $select.append(html);
        $selectContainer.append($select);
    },

    onChange: function (event) {
      //alert('רר');
      this.props.onChange();
    },

    render: function() {
        return (
            <div>
                {this.props.text}:<div ref="selectContainer"></div>
            </div>
        );
    }
})


var ElevatorFloorIndicator = React.createClass({
  render : function(){
    return <div>Floor:<div id="floorNum"><label>{this.props.localCounter}</label></div></div>
  }
})


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

  setFloor : function() {
	  alert('came here to set Floor');
  },


  getInitialState : function(){
    return { floor: 0, direction: 'UP', floorList:[1,2,3,4,5,6,7,8,9,10] };
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
      <label> --Elevator-- </label>
      <ElevatorDirectionControl localHandleClick={this.changeDirection} localDir={this.state.direction}/>
      <ElevatorFloorIndicator localCounter={this.state.floor}/>
      <ElevatorFloorSelector text="Pick Floor" onChange={this.setFloor} localSelected={this.state.floor} localFloorList={this.state.floorList}/>
    </div>
    )
  }
})

module.exports = ElevatorDirectionControl;
module.exports = ElevatorFloorIndicator;
module.exports = ElevatorFloorSelector;
module.exports = Elevator;
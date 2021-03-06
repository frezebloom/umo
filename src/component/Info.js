import React, { Component } from "react";
import { connect } from "react-redux";
import axios from "axios";

class Info extends Component {
  componentDidMount() {
    let coordinates = this.props.data.coordinates[
      this.props.data.coordinates.length - 1
    ];
    document.getElementById("doft").style.top = coordinates.positionY + "px";
    document.getElementById("doft").style.left = coordinates.positionX + "px";
  }

  close = () => this.props.showInfo(false);

  render() {
    var distributionOfTraining = this.props.data.distributionOfTraining[
      this.props.data.distributionOfTraining.length - 1
    ];
    return (
      <div className="info" id="doft">
        <div className="X" onClick={this.close}>X</div>
        <ul>
          {Object.keys(distributionOfTraining).map(key => (
            <li key={key}>{distributionOfTraining[key]}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default connect(
  state => ({
    data: state
  }),
  dispatch => ({
    showInfo: state => {
      dispatch({ type: "SHOW_INFO", payload: state });
    },
  })
)(Info);

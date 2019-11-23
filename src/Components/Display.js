import React from "react";
import { connect } from "react-redux";

class Display extends React.Component {
  render() {
    return (
      <div>
        <div>
          <h1>Welcome to my Page</h1>
          <button
            onClick={() =>
              this.props.addDay(this.props.days.day[this.props.root.day.length])
            }
          >
            Add day
          </button>
          <span> </span>
          <button onClick={() => this.props.removeDay("")}>Remove Day</button>
        </div>
        {this.props.root.day.map((item, index) => {
          return <h1 key={index}>{item}</h1>;
        })}
      </div>
    );
  }
}

let matchStatestoProps = state => {
  return { days: state.days, root: state.root };
};

let matchDispatchtoProps = dispatch => {
  return {
    addDay: stri => dispatch({ type: "ADD_DAY", payload: stri }),
    removeDay: () => dispatch({ type: "REMOVE_DAY", payload: "" })
  };
};

export default connect(
  matchStatestoProps,
  matchDispatchtoProps
)(Display);

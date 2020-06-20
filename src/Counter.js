import { connect } from "react-redux";
import React from "react";
import styled from "styled-components";

class Counter extends React.Component {
  increment = () => {
    this.props.dispatch({
      type: "INCREMENT",
    });
  };

  decrement = () => {
    this.props.dispatch({
      type: "DECREMENT",
    });
  };

  render() {
    return (
      <StyleApp>
        <h2>Counter</h2>
        <div>
          <button onClick={this.decrement}>-</button>
          <span>{this.props.count}</span>
          <button onClick={this.increment}>+</button>
        </div>
      </StyleApp>
    );
  }
}

function mapStateToProps(state) {
  return {
    count: state.count,
  };
}

export default connect(mapStateToProps)(Counter);

const StyleApp = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border: 1px solid;
  width: 160px;
  padding: 16px;
  margin: 32px auto;

  h2 {
    padding: 0;
    margin: 0;
  }

  span {
    margin: 0 16px;
  }
`;

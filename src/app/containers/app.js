import React, { Component } from "react";
import { User } from "../components/user";
import { Main } from "../components/main";
import { connect } from "react-redux";
import { setName } from "../actions/userAction";

class App extends Component {
  constructor(props) {
    super(props);
  }

  componentWillReceiveProps(nextProps) {
    console.log("nextProps", nextProps);
  }

  componentWillUpdate(nextProps, nextState) {
    console.info("nextProps", nextProps, nextState);
  }

  componentDidUpdate(prevProps, prevState) {
    console.info("prevState", prevProps, prevState);
  }

  render() {
    console.log("i18next =>", this.props.i18n);
    return (
      <div className="container">
        <Main
          changeUsername={() => this.props.setName("Anna")}
          username={this.props.user.name}
          translate={this.props.i18n.translations}
        />
        <User username={this.props.user.name} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.userReducer,
    math: state.mathReducer,
    i18n: state.i18n
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setName: name => {
      dispatch(setName(name));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

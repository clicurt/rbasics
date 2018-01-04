import React, { Component } from 'react';
import { User } from '../components/user';
import { Main } from '../components/main';
import { connect } from 'react-redux';
import { setName } from '../actions/userAction';


class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container">
        <Main changeUsername={() => this.props.setName("Anna")} username={this.props.user.name}/>
        <User username={this.props.user.name} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.userReducer,
    math: state.mathReducer
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setName: (name) => {
      dispatch(setName(name))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
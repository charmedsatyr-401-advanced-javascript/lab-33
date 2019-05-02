import React from 'react';
import { connect } from 'react-redux';

import Start from './start';
import People from './people';
import Person from './person';

import app from './app.module.scss';

import * as actions from '../store/records-actions';

class App extends React.Component {
  summon = url => {
    if (typeof url === 'string') {
      this.props.get(url);
    } else {
      this.props.get();
    }
  };
  render() {
    return (
      <>
        <Start cb={this.summon} />
        <section className={app.people}>
          <People cb={this.summon} data={this.props.people} />
          <Person cb={this.summon} design={app.person} data={this.props.person} />
        </section>
      </>
    );
  }
}

const mapStateToProps = state => ({
  people: state.records.people,
  person: state.records.person,
});

const mapDispatchToProps = (dispatch, getState) => ({
  get: url => dispatch(actions.get(url)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

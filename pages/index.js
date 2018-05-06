import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import withRedux from 'next-redux-wrapper';

import initStore from '../store/store';
import { loadCards, addItem } from '../actions';
import Card from './Card';
import './index.css';

class Index extends Component {
  static async getInitialProps({ store }) {
    store.dispatch(loadCards());
  }

  render() {
    return (
      <div className='App'>
        <header className='App-header'>
          <img src='static/logo.png' className='static-logo' alt='static-logo' />
        </header>
        <div className='Grid'>
          {
            this.props.cards.map(card => (
              <Card key={card.id} />
            ))
          }
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ cards }) => ({ cards });

const mapDispatchToProps = dispatch => bindActionCreators({ loadCards, addItem }, dispatch);

export default withRedux(
  initStore,
  mapStateToProps,
  mapDispatchToProps
)(Index);

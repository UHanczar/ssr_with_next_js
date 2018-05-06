import React from 'react';
import Link from 'next/link';

import Card from './Card';
import './index.css';

export default () => (
  <div className='App'>
    <header className='App-header'>
      <Link href='/page2'>
        <img src='static/logo.png' className='static-logo' alt='static-logo' />
      </Link>
    </header>
    <div className='Grid'>
      {/* {
        this.props.cards.map(card => (
          <Card key={card.id} />
        ))
      } */}
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  </div>
);

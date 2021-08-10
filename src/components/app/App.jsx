import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Header from './Header';
import CharacterList from '../characters/CharacterList';
import NewCharacter from '../characters/NewCharacter';
import styles from './App.css';

export default function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/" component={CharacterList} />
        <Route exact path="/new" component={NewCharacter} />
      </Switch>
    </>
  );
}

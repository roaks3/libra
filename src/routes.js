import React from 'react';
import { Route } from 'react-router';
import AppHeader from './components/AppHeader';
import InterestEventLoggingScreen from './screens/InterestEventLoggingScreen';
import './App.css';

export default (
  <div className="App">
    <AppHeader />
    <Route exact path="/" component={InterestEventLoggingScreen} />
  </div>
);

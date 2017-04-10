import React from 'react';
import { Route } from 'react-router';
import AppHeader from './components/AppHeader';
import BudgetScreen from './screens/BudgetScreen';
import AnalyticsScreen from './screens/AnalyticsScreen';
import './App.css';

export default (
  <div className="App">
    <AppHeader />
    <Route exact path="/" component={BudgetScreen} />
    <Route path="/analytics" component={AnalyticsScreen} />
  </div>
);

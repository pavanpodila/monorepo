import React, { Component } from 'react';
import { add } from '@co/shared';
import { BrowserRouter, NavLink, Route, Switch } from 'react-router-dom';
import { FeatureAComponent } from './featureA.route';
import { FeatureBComponent } from './featureB.route';

interface State {
  isFeatureALoaded: boolean;
  isFeatureBLoaded: boolean;
}

class App extends Component<{}, State> {
  state: State = {
    isFeatureALoaded: false,
    isFeatureBLoaded: false,
  };

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <h2>
            1. Using <code>@co/shared</code> package
          </h2>
          <p>Using a shared feature: {add(2, 3)}</p>

          <h2>2. Using routes for on-demand features</h2>
          <ul>
            <li>
              <NavLink to={'/feature-a'}>Load Feature A</NavLink>
            </li>
            <li>
              <NavLink to={'/feature-b'}>Load Feature B</NavLink>
            </li>
          </ul>

          <Switch>
            <Route
              path={'/feature-a'}
              exact={true}
              component={FeatureAComponent}
            />
            <Route
              path={'/feature-b'}
              exact={true}
              component={FeatureBComponent}
            />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;

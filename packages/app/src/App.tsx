import React, { Component, Suspense } from 'react';
import logo from './logo.svg';
import { add } from '@co/shared';

interface State {
  isFeatureALoaded: boolean;
  isFeatureBLoaded: boolean;
}

const LazyFeatureA = React.lazy(async () => {
  const { Feature } = await import('@co/feature-a');

  return { default: () => <Feature message={'Hello World'} /> };
});

const LazyFeatureB = React.lazy(async () => {
  const { Feature } = await import('@co/feature-b');

  return { default: () => <Feature /> };
});

class App extends Component<{}, State> {
  state: State = {
    isFeatureALoaded: false,
    isFeatureBLoaded: false,
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>

          <p>Using a shared feature: {add(2, 3)}</p>

          {this.state.isFeatureALoaded ? (
            <Suspense fallback={'Loading Feature A'}>
              <LazyFeatureA />
            </Suspense>
          ) : null}

          {this.state.isFeatureBLoaded ? (
            <Suspense fallback={'Loading Feature B'}>
              <LazyFeatureB />
            </Suspense>
          ) : null}

          <button
            onClick={this.loadFeatureA}
            disabled={this.state.isFeatureALoaded}
          >
            Load Feature
          </button>

          <button
            onClick={this.loadFeatureB}
            disabled={this.state.isFeatureBLoaded}
          >
            Load Feature
          </button>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }

  private loadFeatureA = () => this.setState({ isFeatureALoaded: true });
  private loadFeatureB = () => this.setState({ isFeatureBLoaded: true });
}

export default App;

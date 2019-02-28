import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

interface State {
  component?: React.ReactNode;
}

class App extends Component<{}, State> {
  state: State = {
    component: undefined,
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>

          {this.state.component}

          <button onClick={this.loadFeature}>Load Feature</button>
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

  private loadFeature = async () => {
    const { Feature } = await import("@co/feature");

    this.setState({
      component: <Feature message={"Hello World"} />,
    });
  };
}

export default App;

import React, {Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import 'roboto-npm-webfont';
import './App.css';

import HeaderComponent from './components/header/header';
import IntroComponent from './components/intro/intro';
import ExperienceComponent from './components/experience/experience';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div className="App">
          <div className="section header-section">
            <div className="section-container header-component">
              <HeaderComponent></HeaderComponent>
            </div>
          </div>
          <div className="section colored">
            <div className="section-container">
              <IntroComponent></IntroComponent>
            </div>
          </div>
          <div className="section">
            <div className="section-container">
              <ExperienceComponent></ExperienceComponent>
            </div>
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;

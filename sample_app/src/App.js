import { hot } from 'react-hot-loader';
import * as React from 'react';
// import Home from './view/Home';
import PageFooter from './components/PageFooter';
import FlightDetails from './view/FlightDetails';
import launch from './assets/sample_json/launch.json';
import rocket from './assets/sample_json/rocket.json';
import launchSite from './assets/sample_json/launch_site.json';

import './styles/theme.sass';

class App extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <main className="page-container">
        <div className="page-content">
          <FlightDetails
            launch={launch}
            rocket={rocket}
            launchSite={launchSite}
          />
        </div>
        <PageFooter />
      </main>
    );
  }
}

// <Home username="DaftCoder" />
export default hot(module)(App);

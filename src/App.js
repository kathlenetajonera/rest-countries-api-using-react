import './css/App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from './components/Header';
import Container from './components/Container';
import { ThemeProvider } from './context/ThemeContext';
import CountryInfo from './components/CountryInfo';
import { AllCountriesProvider } from './context/AllCountriesContext';
import { CountryProvider } from './context/CountryContext';

function App() {
  return (
    <div className="App">
      <Router>
        <ThemeProvider>
          <Header />
            <AllCountriesProvider>
              
            <Switch>
              <Route exact path="/">
                <Container />
              </Route>

              <Route exact path="/country/:name">
                <CountryProvider>
                  <CountryInfo />
                </CountryProvider>
              </Route>
            </Switch>

          </AllCountriesProvider>
        </ThemeProvider>
      </Router>

    </div>
  );
}

export default App;

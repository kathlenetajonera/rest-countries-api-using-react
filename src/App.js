import './css/App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from './components/Header';
import Container from './components/Container';
import { ThemeProvider } from './context/ThemeContext';
import CountryInfo from './components/CountryInfo';

function App() {
  return (
    <div className="App">
      <Router>
        <ThemeProvider>
          <Header />

          <Switch>
            <Route exact path="/">
              <Container />
            </Route>

            <Route exact path="/test">
              <CountryInfo />
            </Route>
          </Switch>

        </ThemeProvider>
      </Router>

    </div>
  );
}

export default App;

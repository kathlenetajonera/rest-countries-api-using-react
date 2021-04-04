import './css/App.css';
import { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ThemeProvider } from './context/ThemeContext';
import Header from './components/Header';
import Container from './components/Container';
import CountryInfo from './components/CountryInfo';
import { AllCountriesProvider } from './context/AllCountriesContext';
import Error404 from './components/Error404';

function App() {
  const [keyword, setKeyword] = useState(null);
  const [regionFilter, setRegionFilter] = useState(null);

  return (
    <div className="App">
      <Router>
        <ThemeProvider>
          <Header 
            setKeyword={setKeyword}
            setRegionFilter={setRegionFilter}
          />  
          <AllCountriesProvider>
          <Switch>
            <Route exact path="/">
              <Container 
                keyword={keyword}
                setKeyword={setKeyword}
                regionFilter={regionFilter}
                setRegionFilter={setRegionFilter}
              />
            </Route>
            
            <Route exact path="/country/:name">
              <CountryInfo />
            </Route>

            <Route path="*">
              <Error404 />
            </Route>
          </Switch>
        </AllCountriesProvider>
        </ThemeProvider>
      </Router>

    </div>
  );
}

export default App;

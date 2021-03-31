import './css/App.css';
import Header from './components/Header';
import Container from './components/Container';
import { ThemeProvider } from './context/ThemeContext';

function App() {
  return (
    <div className="App">
      <ThemeProvider>
        <Header />
        <Container />
      </ThemeProvider>
    </div>
  );
}

export default App;

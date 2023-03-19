import './App.css';
import { WeatherProvider } from './Context/WeatherContext';
import Container from './components/Container';

function App() {
  return (
    <div className="App">
      <WeatherProvider>
        <Container />
      </WeatherProvider>
    </div>
  );
}

export default App;

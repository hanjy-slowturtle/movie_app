import { HashRouter, Route } from 'react-router-dom';
import Home from './routes/Home';
import About from './routes/About';
import Navigation from './components/Navigation';
import './App.css';

function App() {
  return (
    <HashRouter>
      <Navigation />
      <Route path="/" component={Home} exact={true} />
      <Route path="/about" component={About} />
    </HashRouter>
  );
}

export default App;
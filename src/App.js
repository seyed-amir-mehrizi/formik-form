import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Routes from './routes'
function App() {
  return (
    <div className="fluid-container">
      <Header />
      <Routes />
    </div>
  );
}

export default App;

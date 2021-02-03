import logo from './images/thumb-carbon.png';
import './App.css';
import Header from './components/Header';


function App() {
  return (
    <div className="App">

      <Header />

      <header className="App-header">
        <body>
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            CARBON FOREST FOREVER!!!
        </p>
          <a
            className="App-link"
            href="https://carbonforest.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            CarbonForest
        </a>
        </body>
      </header>

    </div>
  );
}

export default App;

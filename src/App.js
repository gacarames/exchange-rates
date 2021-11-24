import { HashRouter, Routes, Route } from "react-router-dom";
import ExchangeRate from './components/ExchangeRate';
import PriceExchange from './components/PriceExchange';
import logo from './logo.svg';
import './App.css';

function App() {

  return (
    <HashRouter basename={'/exchenge-rates'}>
      <Routes>
        <Route path='/' element={
          (<div className="App">
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <p>
                Edit <code>src/App.js</code> and save to reload.
              </p>
              <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
              >
                Learn React
              </a>
            </header>
          </div>)
        } />
        <Route
          exact
          path="/exchanges"
          element={
            <>
              <ExchangeRate exchangeName={"dolarbolsa"} />
              <ExchangeRate exchangeName={"dolarblue"} />
              <ExchangeRate exchangeName={"dolarpromedio"} />
              <ExchangeRate exchangeName={"contadoliqui"} />
            </>
          }
        />
        <Route exact path="/exchanges/:id" element={<PriceExchange />} />
      </Routes>
    </HashRouter>
  );
}

export default App;

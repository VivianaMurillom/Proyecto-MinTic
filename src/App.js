import './App.css';

//Componentes
import Login from './components/Login';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <span>Header</span>
      </header>
      <section className="App-section">
        <Login />
      </section>
    </div>
  );
}

export default App;

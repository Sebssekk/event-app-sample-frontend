import './App.css';
import Header from './components/header';
import Dashboard from './components/dashboard';

function App() {
  return (
    <div className="App">
      <Header/>
      <h1>Simple Event App</h1>
      <Dashboard/>
    </div>
  );
}

export default App;

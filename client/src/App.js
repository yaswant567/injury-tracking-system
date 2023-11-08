import './app.css';
import Nav from './components/Nav/Nav';
import Reports from './components/Reports/Reports';

function App() {
  return (
    <div className="App">
      <div className='left'>
        <Nav/>
      </div>
      <div className='right'>
        <Reports/>
      </div>
    </div>
  );
}

export default App;

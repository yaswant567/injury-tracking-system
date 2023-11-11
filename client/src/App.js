import './app.css';
import Nav from './components/Nav/Nav';
import Reports from './components/Reports/Reports';
import NewReport from './components/NewReport/NewReport';


function App() {
  return (
    <div className="App">
      <div className='left'>
        <Nav/>
      </div>
      <div className='right'>
        <Reports/>
        {/* <NewReport/> */}
      </div>
    </div>
  );
}

export default App;

import './App.css';
import { Route,Routes } from 'react-router-dom';
import Signpage from './components/Signpage';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='' element={<Signpage/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
      </Routes>
    </div>
  );
}

export default App;

import './App.css';
import {Route,Routes} from 'react-router-dom';
import HomePage from './components/home/home.component';
import SingleMovie from './components/singleMovie/singleMovie.component';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/movies/:id' element={<SingleMovie/>} />
      </Routes> 
    </div>
  );
}

export default App;

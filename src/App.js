import './App.css';
import {Routes,Route} from "react-router-dom"
import Screen from './components/screen/Screen';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='*' element={<Screen/>}/>
      </Routes>
    </div>
  );
}

export default App;

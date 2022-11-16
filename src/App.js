import './App.css';
import { BrowserRouter } from 'react-router-dom'
// import MainFormFunction from './components/BookLibraryFunction/MainFunction';
import MainFormFunction from '../src/BookLibraryFunction/MainFunction'

function App() {

  return (
    <div>
      <BrowserRouter >
        <MainFormFunction />
      </BrowserRouter>
    </div>
  );
}

export default App;

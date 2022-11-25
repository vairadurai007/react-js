import './App.css';
import { BrowserRouter } from 'react-router-dom'
import BookLibrary from './BookLibraryFunction/MainFunction';

function App() {

  return (
    <div>
      <BrowserRouter >
        <BookLibrary  />
      </BrowserRouter>
    </div>
  );
}

export default App;

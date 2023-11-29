import { Routes, Route } from 'react-router-dom';
import Books from './pages/Books';
import Home from './pages/Home';
import Add from './pages/Add';
import Update from './pages/Update';
import Navigation from './components/Navigation';

function App() {
  return (
    <div className=' flex justify-center'>
      <div className='max-w-7xl w-full'>
        <Navigation />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/books' element={<Books />} />
          <Route path='/add' element={<Add />} />
          <Route path='/update/:id' element={<Update />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;

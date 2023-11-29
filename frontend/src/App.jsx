import { Routes, Route } from 'react-router-dom';
import Books from './pages/Books';
import Home from './pages/Home';
import AddBook from './pages/Add';
import UpdateBook from './pages/Update';
import Navigation from './components/Navigation';

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/books' element={<Books />} />
        <Route path='/add' element={<AddBook />} />
        <Route path='/update' element={<UpdateBook />} />
      </Routes>
    </>
  );
}

export default App;

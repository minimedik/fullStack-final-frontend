import BookList from './components/bookList';
import AddBook from './components/addBook';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {


  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<BookList/>}></Route>
        <Route path='/create-book' element={<AddBook/>}></Route>
      </Routes>
    </BrowserRouter>    


    </>
  )
}

export default App

import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Book from './components/Book';
import About from './pages/About';
import data from './models/books.json';
import Header from './components/Header';
import BookList  from './components/BookList.js';
import Search from './components/Search';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Apps.css"
// import BookCounter from './components/BookCounter';


const App = (props) => {

  const [books, setBooks] = useState(data);
  const [ keyword, setKeyword] = useState('');
  const [bookcase, setBookcase] = useState([]);
  const [count, setCount] = useState(0);

  useEffect (() => {
    document.title = `${count} Book(s) Added To Bookcase`
  });



  function addBook(title, id) {
    const newBookList = books.filter((book) => book.id !== id);
    const chosenBook = books.filter((book) => book.id === id);
    console.log(newBookList)
    setBooks(newBookList);
    setBookcase([...bookcase, ... chosenBook]);
    console.log(`The Book ${title} was clicked`);
    setCount(count +1);
    }

    function removeBook(id) {
      const newBookcaseList = bookcase.filter((book) => book.id !== id); 
      setBookcase(newBookcaseList);
      setCount(count -1);
    }

   


//   useEffect (() => {
//     document.title = bookcase.length === 0
//         ? "Any Text here"
//         : `Added ${bookcase.length}`;
// });

    

    async function findBooks (term) {
      const results = await fetch (
      `https://www.googleapis.com/books/v1/volumes?q=${term}&filter=paid-ebooks&print-type=books&projection=lite`).then(res => res.json());
      setBooks(results.items);

    }

    

  return (
    <>
    <Router>
    <Route 
    exact path="/" render={() => (
      <React.Fragment>
        <Header/>
        <Search findBooks={findBooks} keyword={keyword} setKeyword={setKeyword} />
        <BookList books={books} addBook={addBook}/>  
      </React.Fragment>
    )} />

    


    
    <Route 
    exact path="/bookcase" render={() => (
      <React.Fragment>
        <Header/>
                <BookList books={bookcase} removeBook={removeBook}/>
        {/* testing book count  */}
            
      
      </React.Fragment>
    )} />

<Route exact path="/about" render={() => (
      <React.Fragment>
        <Header/>
        <About/>  
      </React.Fragment>
    )} />


    </Router> 
    </>
  );
} 





export default App;
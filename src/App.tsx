import  { useState } from 'react';
import BookList from './components/BookList';
import Cart from './components/Cart';
import useBooks from './hooks/useBooks';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';


const App = () => {
    const { books, error } = useBooks(); 
    const [userID] = useState(1); 

    return (
      <Router>
      <div>
          <nav>
              <ul>
                  <li>
                      <Link to="/">Home</Link>
                  </li>
                  <li>
                      <Link to="/cart">Cart</Link>
                  </li>
              </ul>
          </nav>

          {error && <p>{error}</p>}

          <h1>Book Store</h1>
          <Routes>
              <Route path="/" element={<BookList bookList={books} userID={userID} />} />
              <Route path="/cart" element={<Cart userID={userID} />} />
          </Routes>
      </div>
  </Router>
);
};

export default App;

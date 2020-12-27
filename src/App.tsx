import React from 'react';
import './styles/App.scss';
import BookSearch from './book-search/BookSearch';
import Wishlist from './wish-list/Wishlist';

import { useSelector } from 'react-redux';
import { getWishlist, updateWishlist } from './store/wishlist';


function App() {
  let wishlist = useSelector(getWishlist);


  return (
      <div>
        <header className="header">
          <div className="header--content">
            <h1>My Reading Wishlist</h1>
          </div>
        </header>
        <main>
          <BookSearch />
          <Wishlist wishlist={wishlist}/>
          {/* TODO: START HERE: Why is my wishlist not getting re-rendered when the list is updated in state? */}
        </main>

      </div>
  );
}

export default App;

import React, { useEffect, useState } from "react";
import { getBooksByType } from "./book-search.service";
import { useDispatch } from 'react-redux';
import { updateWishlist } from '../store/wishlist';


const BookSearch = () => {
  const [bookType, updateBookType] = useState("");
  const [bookTypeToSearch, updateBookTypeToSearch] = useState("");
  // NOTE: 3 - bookTypeToSearch gets updated
  const [allAvailableBooks, setAllAvailableBooks] = useState([]);
  
  const dispatch = useDispatch();

  async function requestBooks() {
    if (bookTypeToSearch) {
      const allBooks = await getBooksByType(bookTypeToSearch);
      // NOTE: 6 - set allBooks to the response from getBooksByType
      setAllAvailableBooks(allBooks.items); // NOTE: 7 - update state of allAvailailableBooks to allBooks .items to get array of books
    }
  }

  useEffect(() => {
    async function getAllBooks() {
      await requestBooks();
    }
    getAllBooks(); // NOTE: 5 - getAllBooks gets called
  }, [bookTypeToSearch]); // NOTE: 4 - because bookTypeToSearch got updated in state, it fires off getAllBooks


  const handleAddToWishlist = (book: any) => {
    dispatch(updateWishlist(book));
  }

  return (
    <>
      <div className="book--container">
        <div className="search-params">
          <div>
            <form
              onSubmit={(e) => {
                // debugger;
                e.preventDefault();
                updateBookTypeToSearch(bookType)
                // NOTE: 2 - accept the value of bookType from input and pass it to updateBookTypeToSearch
              }}
            >
              <input
                className="full-width"
                autoFocus
                name="gsearch"
                type="search"
                value={bookType}
                placeholder="Search for books to add to your reading list and press Enter"
                onChange={e => updateBookType(e.target.value)} //NOTE: 1 - update the bookType in input
              />
            </form>
            {!bookType && (
              <div className="empty">
                <p>
                  Try searching for a topic, for example
                  <a onClick={() => {
                    updateBookType("Javascript");
                  }}
                  >
                    {" "}
                    "Javascript"
                   </a>
                </p>
              </div>
            )}

          </div>
        </div>
      </div>
      <ul> 
        {/* // NOTE: 8 - display the allAvailableBooks array, pretty */}
        {allAvailableBooks.map((book: any, idx) => (
          <li key={idx}>
            <img src={book.volumeInfo.imageLinks.smallThumbnail} width="125" height="150"></img>

            <p>{book.volumeInfo.title}</p>
            { book.volumeInfo.authors.map((author: string, idx: number) => (
              <p key={idx}>{author}</p>
            ))}
            <p>{book.volumeInfo.publisher}</p>
            <p>{book.volumeInfo.publishDate}</p>
            <p>{book.volumeInfo.description}</p>

            <button onClick={() => handleAddToWishlist(book)}>Add to Wishlist</button>
          </li>
        ))}
      </ul>
      {/* {
        <pre>{JSON.stringify(allAvailableBooks, null, 4)}</pre>
        
      } */}
    </>
  );
};

export default BookSearch;








// import React, { useEffect, useState } from "react";
// import { getBooksByType } from "./book-search.service";
// import { getAllAvailableBooks, updateAllAvailableBooks } from '../store/bookSlice';
// import { useSelector, useDispatch } from 'react-redux';

// const BookSearch = () => {
//   const [bookType, updateBookType] = useState("");
//   const [bookTypeToSearch, updateBookTypeToSearch] = useState("");

//   const allAvailableBooks = useSelector(getAllAvailableBooks);
//   console.log('allAvailableBooks', allAvailableBooks);

//   const dispatch = useDispatch();

//   async function requestBooks() {
//     if (bookTypeToSearch) {
//       const allBooks = await getBooksByType(bookTypeToSearch);
//       console.log('allBooks', allBooks);
//       dispatch(updateAllAvailableBooks(allBooks));
//     }
//   }

//   const handleSubmit = () => {
//     console.log("submitting")
//   }

//   useEffect(() => {
//     async function getAllBooks() {
//       await requestBooks();
//     }
//     getAllBooks();
//   }, [bookTypeToSearch]);

//   return (
//     <>
//       <div className="book--container">
//         <div className="search-params">
//           <div>
//             <form
//               onSubmit={(e) => {
//                 // debugger;
//                 e.preventDefault();
//                 handleSubmit();
//                 updateBookTypeToSearch(bookType)
//               }}
//             >
//               <input
//                 className="full-width"
//                 autoFocus
//                 name="gsearch"
//                 type="search"
//                 value={bookType}
//                 placeholder="Search for books to add to your reading list and press Enter"
//                 onChange={e => updateBookType(e.target.value)}
//               />
//             </form>
//             {!bookType && (
//               <div className="empty">
//                 <p>
//                   Try searching for a topic, for example
//                      <a onClick={() => {
//                     updateBookType("Javascript");
//                   }}
//                   >
//                     {" "}
//                         "Javascript"
//                     </a>
//                 </p>
//               </div>
//             )}

//           </div>
//         </div>
//       </div>
//       {/* <ul>
//         { allAvailableBooks.map((book: any, idx: number) => (
//           <li key={idx}>
//             {idx}
//           </li>
//         ))}
//       </ul> */}
//       {/* {                
//         <pre>{JSON.stringify(allAvailableBooks, null, 4)}</pre>
//       } */}
//     </>
//   );
// };

// export default BookSearch;

import React from 'react';

const Wishlist = (props: any) => {
  const { wishlist } = props;

  console.log('wishlist', wishlist);

  return (
    <div>
      <h2>My Reading Wishlist (3)</h2>
      <ul>
        { wishlist.map((book: any, idx: number) => (
          <li key={idx}>{idx}</li>
        ))}
        <li>fake book</li>
      </ul>
    </div>
  )
}

export default Wishlist;
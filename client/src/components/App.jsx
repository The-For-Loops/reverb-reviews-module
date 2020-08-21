import React from 'react';
import ProductReviews from './ProductReviews.jsx';
import SellerReviews from './SellerReviews.jsx';

const App = () => {
  return (
    <div className="review-main-container">
      <div className="review-main-content">
        {<SellerReviews />}
        {<ProductReviews />}<br></br>
      </div>
      <div className="review-sidebar">
        <div className="space-filler-sidebar"><p></p></div>
      </div>
    </div>
  )
};

export default App;
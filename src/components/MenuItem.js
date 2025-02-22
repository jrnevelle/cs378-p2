import React from 'react';


// This is a functional component that represents a single menu item. It currently takes in the title and displays it in an h2 element.
// Modify the component to take in all the other properties of a menu item you need and display them in the component.
// Use bootstrap to style the elements so that it looks like the mockup in the assignment.
// Hint: You can use the image name to get the image from the images folder.
const MenuItem = ({ id, title, description, price, img, increaseQuantity, decreaseQuantity, quantity }) => {
    return (
    <div class="row align-items-center mb-4">
      <div class="col-5">
        <img src={`images/${img}`} class="item_img" alt={description}></img>
      </div>
      <div class="col-7">
        <div class="row">
            <h3>{title}</h3>
            <p class="description">{description}</p>
          <div class="col-6">
            <p class="price">${price}</p>
          </div>
          <div class="col-6 end">
            <div className="d-flex justify-content-between">
              <button onClick={() => decreaseQuantity(id, price)}>-</button>
              <p>{quantity}</p>
              <button onClick={() => increaseQuantity(id, price)}>+</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    );
};

export default MenuItem;

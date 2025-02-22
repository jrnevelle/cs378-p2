import './App.css';
import MenuItem from './components/MenuItem';
import {useState} from 'react';

import 'bootstrap/dist/css/bootstrap.min.css'; // This imports bootstrap css styles. You can use bootstrap or your own classes by using the className attribute in your elements.

// Menu data. An array of objects where each object represents a menu item. Each menu item has an id, title, description, image name, and price.
// You can use the image name to get the image from the images folder.
const menuItems = [
    {
      id: 1,
      title: 'Gyoza',
      description: 'Japanese dumplings',
      imageName: 'gyoza.png',
      price: 5.99,
    },
    {
      id: 2,
      title: 'Sushi',
      description: 'Japanese rice rolls',
      imageName: 'sushi.png',
      price: 6.99,
    },
    {
      id: 3,
      title: 'Ramen',
      description: 'Japanese noodle soup',
      imageName: 'ramen.png',
      price: 7.99,
    },
    {
      id: 4,
      title: 'Matcha Cake',
      description: 'Japanese green tea cake',
      imageName: 'matcha-cake.png',
      price: 4.99,
    },
    {
      id: 5,
      title: 'Mochi',
      description: 'Japanese rice cake',
      imageName: 'mochi.png',
      price: 3.99,
    },
    {
      id: 6,
      title: 'Yakitori',
      description: 'Japanese skewered chicken',
      imageName: 'yakitori.png',
      price: 2.99,
    },
    {
      id: 7,
      title: 'Takoyaki',
      description: 'Japanese octopus balls',
      imageName: 'takoyaki.png',
      price: 5.99,
    },
    {
      id: 8,
      title: 'Sashimi',
      description: 'Japanese raw fish',
      imageName: 'sashimi.png',
      price: 8.99,
    },
    {
      id: 9,
      title: 'Okonomiyaki',
      description: 'Japanese savory pancake',
      imageName: 'okonomiyaki.png',
      price: 6.99,
    },
    {
      id: 10,
      title: 'Katsu Curry',
      description: 'Japanese curry with fried pork',
      imageName: 'katsu-curry.png',
      price: 9.99,
    }
];


function App() {
  const [quantities, setQuantities] = useState({});
  const [subtotal, setSubtotal] = useState (0);

  const increaseQuantity = (id, price) => {
    id--;
    setQuantities(prevQuantities => ({
      ...prevQuantities,
      [id]: (prevQuantities[id] || 0) + 1
    }));
    setSubtotal(subtotal + price);
  }

  const decreaseQuantity = (id, price) => {
    id--;
    if (quantities[id] && quantities[id] > 0) {
      setSubtotal(subtotal - price);
    }
    setQuantities(prevQuantities => ({
      ...prevQuantities,
      [id]: (prevQuantities[id] && prevQuantities[id] > 0)?  prevQuantities[id] - 1 : 0
    }));
  }

  const submit = () => {
    if (subtotal === 0)
    {
      alert("No Items In Cart!");
      return;
    }
    var result = "";
    for (let i = 0; i < menuItems.length; i++)
    {
      if (quantities[i] && quantities[i] > 0)
      {
        result += quantities[i] + " " + menuItems[i].title + "\n";
      }
    }
    alert("Order Placed!\n" + result);
  }

  const clear = () => {
    for (let i = 0; i < menuItems.length; i++)
    {
      if (quantities[i])
      {
        setQuantities(prevQuantities => ({
          ...prevQuantities,
          [i]: 0
        }));
      }
    }
    setSubtotal(0);
  }

  return (
    <div class="container">
    <div class="row mb-2">
      <div class="logo_row">
        <img class="logo" src="images/logo.jpg" alt="Kitchen Logo"></img>
      </div>
    </div>
    <div class="row mb-2 text-center">
      <div class="slogan">
        <h1>Delicous, From-Scratch Recipes Close at Hand</h1>
        <h2>The Fresh Choice of UT!</h2>
      </div>
    </div>
        {menuItems.map((item) => (
          <MenuItem 
            id={item.id}
            title={item.title} 
            description={item.description} 
            price={item.price} 
            img={item.imageName} 
            increaseQuantity={increaseQuantity}
            decreaseQuantity={decreaseQuantity}
            quantity={quantities[item.id - 1] || 0}
          /> 
        ))}
    <div class="row justify-content-between">
      <div class="col"><p>${Math.max(0, subtotal).toFixed(2)}</p></div>
      <div class="col"><button onClick={() => submit()}>Order</button></div>
      <div class="col"><button onClick={() => clear()}>Clear All</button></div>
    </div>
    </div>
    
  );
}

export default App;

import './App.css';
import MenuItem from './components/MenuItem';

import 'bootstrap/dist/css/bootstrap.min.css'; // This imports bootstrap css styles. You can use bootstrap or your own classes by using the className attribute in your elements.

// Menu data. An array of objects where each object represents a menu item. Each menu item has an id, title, description, image name, and price.
// You can use the image name to get the image from the images folder.
const menuItems = [
  {
    id: 1,
    title: 'Pizza',
    description: 'A delicious pizza topped with basil, olives, peppers, bacon, and more.',
    imageName: 'images/pizza.jpg',
    price: 9.99,
  },
  {
    id: 2,
    title: 'Salad',
    description: 'A refreshing salad with apples, cucumbers, avocados, and more.',
    imageName: 'images/salad.jpg',
    price: 7.99,
  },
  {
    id: 3,
    title: 'Poke Bowl',
    description: 'A scrumptious bowl with rice, tuna, avocados, and more.',
    imageName: 'images/poke.jpeg',
    price: 12.99,
  },
  {
    id: 4,
    title: 'Sandwich',
    description: 'A bagel sandwich with chicken salad, lettuce, onions, and more.',
    imageName: 'images/sandwich.png',
    price: 4.99,
  }
];


function App() {
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
          <MenuItem title={item.title} description={item.description} price={item.price} img={item.imageName} /> 
        ))}
    </div>
  );
}

export default App;

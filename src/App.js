import React, { Component } from 'react';
import Navbar from './components/Navbar';
import ShoppingCart from './components/ShoppingCart';
import InsertItem from './components/InsertItem';
import uuid from 'uuid';

const shoppingListItems = [
  {
    id: uuid(),
    name: 'Item 1'
  },
  {
    id: uuid(),
    name: 'Item 2'
  },
  {
    id: uuid(),
    name: 'Item 3'
  }
];

class App extends Component {
  state = {
    cartItems: shoppingListItems
  };

  deleteItem = id => {
    this.setState(state => ({
      cartItems: state.cartItems.filter(item => item.id !== id)
    }));
  };

  addItem = newItem => {
    this.setState(state => ({
      cartItems: [...state.cartItems, newItem]
    }));
  };

  render() {
    return (
      <div className="container">
        <Navbar />
        <InsertItem onAddItem={this.addItem} />
        <ShoppingCart
          onDeleteItem={this.deleteItem}
          cartItems={this.state.cartItems}
        />
      </div>
    );
  }
}

export default App;

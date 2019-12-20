import React, { Component } from 'react';

class ShoppingCart extends Component {
  handleClick = e => {
    e.preventDefault();
    this.props.onDeleteItem(e.target.value);
  };

  render() {
    return (
      <div className="row">
        <div className="col-md-8">
          <ul className="list-group">
            {this.props.cartItems.map(cartItem => {
              return (
                <li
                  key={cartItem.id}
                  className="list-group-item d-flex justify-content-between align-items-center"
                >
                  {cartItem.name}
                  <button
                    type="button"
                    className="btn btn-danger"
                    onClick={this.handleClick}
                    value={cartItem.id}
                  >
                    X
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
}

export default ShoppingCart;

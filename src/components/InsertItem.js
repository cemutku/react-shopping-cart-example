import React, { Component } from 'react';
import uuid from 'uuid';

class InsertItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      inputValue: ''
    };
  }

  onChange = e => {
    this.setState({
      inputValue: e.target.value
    });
  };

  handleOnSubmit = e => {
    e.preventDefault();

    if (this.state.inputValue && this.state.inputValue.length > 0) {
      const newItem = { id: uuid(), name: this.state.inputValue };
      this.props.onAddItem(newItem);
      this.setState({
        inputValue: ''
      });
    }
  };

  render() {
    return (
      <div>
        <div className="row">
          <div className="col-md-4 mt-5">
            <form className="form-inline mb-5" onSubmit={this.handleOnSubmit}>
              <div className="form-group">
                <label htmlFor="item" className="sr-only">
                  Cart Item
                </label>
                <input
                  type="text"
                  className="form-control-plaintext"
                  id="item"
                  placeholder="Add cart item"
                  value={this.state.inputValue}
                  onChange={this.onChange}
                />
                <button type="submit" className="btn btn-dark btn-block mt-2">
                  Add New Item
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default InsertItem;

import React, { Component } from 'react';
import { FormControl } from 'react-bootstrap';

class Search extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchString: '',
      mockData: null
    };
  }

  handleInput = event => {
    this.setState({ searchString: event.target.value });
  };

  search = () => {
    fetch(
      'http://localhost:3001/api/' +
        this.props.for +
        '/' +
        this.state.searchString,
      { method: 'GET' }
    )
      .then(res => res.json())
      .then(res => {
        this.props.results(res.data);
      });
  };

  render() {
    return (
      <div>
        <FormControl
          type="text"
          placeholder={'Search for ' + this.props.for}
          value={this.state.searchString}
          onInput={this.handleInput}
        />
        <div onClick={this.search}>Search</div>
      </div>
    );
  }
}

export default Search;

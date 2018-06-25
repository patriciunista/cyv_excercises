import React, { Component } from 'react';
import { FormControl } from 'react-bootstrap';
import MockData from '../mock/CharactersWithS';

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
    this.setState({ mockData: MockData }).then(() => {
      this.props.results(this.state.mockData);
    });
    // fetch('api/' + this.props.for +'/' + this.state.searchString)
    // .then(res => res.toJSON())
    // .then(res =>
    //   this.props.results({
    //     characters: res.data
    //   })
    // );
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

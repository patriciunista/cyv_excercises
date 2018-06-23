import React, { Component } from 'react';
import { FormControl } from 'react-bootstrap';

class Search extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchString: '',
      results: null
    };
  }

  handleInput = event => {
    this.setState({ searchString: event.target.value });
  };

  search = () => {
    this.props.results({
      data: 'api/' + this.props.for + '/' + this.state.searchString
    });
    // fetch('api/' + this.props.for +'/' + this.state.searchString)
    // .then(res => res.toJSON())
    // .then(res =>
    //   this.props.results({
    //     characters: res.data
    //   })
    // );
  }

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

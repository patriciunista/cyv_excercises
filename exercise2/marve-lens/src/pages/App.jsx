import React, { Component } from 'react';
import logo from '../assets/logo.svg';
import '../css/App.css';
import { FormGroup, FormControl, ControlLabel } from 'react-bootstrap';
import Character from '../components/Character';
import Search from '../components/Search';

class App extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      searchResults: null
    };
  }

  handleResults(results) {
    console.log(results.data);
    // this.setState({
    //   searchResults: results.data
    // });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to MarveLens</h1>
        </header>
        <form>
          <FormGroup controlId="formBasicText">
            <ControlLabel>Search for marvel characters</ControlLabel>
            <Search for="characters" results={this.handleResults} />
            <FormControl.Feedback />
          </FormGroup>
        </form>
        <article className="search-results">
          <section className="characters">
            {this.state.searchResults !== null ? (
              this.state.searchResults.map(character => {
                return <Character info={character} />;
              })
            ) : (
              <p>Start typing to search...</p>
            )}
          </section>
        </article>
      </div>
    );
  }
}

export default App;

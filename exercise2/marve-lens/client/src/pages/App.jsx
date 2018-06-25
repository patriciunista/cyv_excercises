import React, { Component } from 'react';
import logo from '../assets/logo.svg';
import '../css/App.css';
import { FormGroup, FormControl } from 'react-bootstrap';
import Character from '../components/Character';
import Search from '../components/Search';

class App extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      searchResults: null
    };
  }

  handleCharacterResults = (response) => {
    console.log(response.results);
    let filteredSearchResults = response.results.map(character => {
      const wikiUrlObject = Object.keys(character.urls)[0];
      return {
        name: character.name,
        avatar: character.thumbnail.path + "." + character.thumbnail.extension,
        wikiUrl: character.urls[wikiUrlObject].url
      };
    });

    this.setState({
      searchResults: filteredSearchResults
    });
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
            <Search for="characters" results={this.handleCharacterResults} />
            <FormControl.Feedback />
          </FormGroup>
        </form>
        <article className="search-results">
          <section className="characters">
            {this.state.searchResults !== null ? (
              this.state.searchResults.map(character => {
                return <Character info={character} key={character.id} />;
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

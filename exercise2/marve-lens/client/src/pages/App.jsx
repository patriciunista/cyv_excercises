import React, { Component } from 'react';
import logo from '../assets/logo.svg';
import '../css/App.css';
import Character from '../components/Character';
import SearchForm from '../components/SearchForm';
import { Pager } from 'react-bootstrap';

class App extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      searchResults: null,
      searchFor: 'characters'
    };
  }

  handleCharacterResults = response => {
    let filteredSearchResults = response.map(character => {
      return {
        name: character.name,
        avatar: character.thumbnail.path + '.' + character.thumbnail.extension,
        wikiUrl: character.urls.filter(url => {
          return url.type === 'wiki';
        })
      };
    });

    this.setState({
      searchResults: filteredSearchResults
    });
  };

  searchAction() {
    this.refs.searchForm.search();
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to MarveLens</h1>
        </header>
        <div className="container">
          <SearchForm
            ref="searchForm"
            for={this.state.searchFor}
            results={this.handleCharacterResults}
          />
          {this.state.searchResults !== null ? (
            <article className="search-results">
              <div className="row">
                {this.state.searchResults.length ? (
                  this.state.searchResults.map(result => {
                    if (this.state.searchFor === 'characters') {
                      return <Character info={result} key={result.id} />;
                    }
                    return this.state.searchFor;
                  })
                ) : (
                  <p>No {this.state.searchFor} found.</p>
                )}
              </div>
              <a className="go-to-top" onClick={() => {document.documentElement.scrollTop = 0}}>Go To Top</a>
            </article>
          ) : (
            ''
          )}
        </div>
      </div>
    );
  }
}

export default App;

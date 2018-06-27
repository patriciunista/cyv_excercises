import React, { Component } from 'react';
import { Button, FormGroup, Form, Pagination } from 'react-bootstrap';
import { DebounceInput } from 'react-debounce-input';
import loadingImage from '../assets/loading.gif';

class SearchForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchString: '',
      inputValue: '',
      page: 0,
      numPages: 0,
      error: null,
      paginationPages: [],
      suggestions: [],
      suggestionsText: ''
    };
  }

  handleInput = event => {
    this.setState({ inputValue: event.target.value, suggestionsText: "Loading suggestions..." }, () => {
      if (this.state.inputValue.length) {
        fetch('api/searches/' + this.state.inputValue)
          .then(res => res.json())
          .then(res => {
            if (res.data.length) {
              this.setState({ suggestions: [...res.data] });
            } else {
              this.setState({ suggestions: [], suggestionsText: "No suggestions found." });
            }
          });
      } else {
        this.setState({ suggestions: [], suggestionsText: "No suggestions found." });
      }
    });
  };

  handleSuggestionClick = event => {
    let searchTerm = event.target.outerText.toLowerCase();
    this.setState({ inputValue: searchTerm }, () => this.search());
  };

  prevPage = () =>
    this.setState(
      prevState => {
        return { page: prevState.page - 1 >= 0 ? prevState.page - 1 : 0 };
      },
      () => {
        if (this.state.page !== 0) {
          this.search();
        }
      }
    );
  nextPage = () =>
    this.setState(
      prevState => {
        return {
          page:
            prevState.page + 1 <= prevState.numPages ? prevState.page + 1 : 0
        };
      },
      () => {
        if (this.state.page !== this.state.pages) {
          this.search();
        }
      }
    );

  search = () => {
    if (this.state.inputValue !== '') {
      this.setState(
        prevState => {
          let page =
            prevState.searchString === this.state.inputValue
              ? prevState.page
              : 0;
          return {
            error: false,
            loading: true,
            page: page,
            searchString: this.state.inputValue
          };
        },
        () => {
          let searchUrl =
            'api/' +
            this.props.for +
            '/' +
            this.state.searchString +
            '/page/' +
            this.state.page;
          fetch(searchUrl, { method: 'GET' })
            .then(res => res.json())
            .then(res => {
              this.props.results(res.data.results);
              this.setState(
                {
                  numPages:
                    (res.data.total / 20) % 1 === 0
                      ? res.data.total / 20
                      : Math.floor(res.data.total / 20) + 1,
                  loading: false,
                  paginationPages: [],
                  suggestionsText: res.data.results.length ? '' : ''
                },
                () => {
                  this.loadPagination();
                }
              );
            });
        }
      );
    }
  };

  navigateToPage = e => {
    let pageNumber = parseInt(e.target.outerText, 10);
    if (pageNumber !== this.state.page) {
      this.setState({ page: pageNumber }, () => this.search());
    }
  };

  loadPagination = () => {
    let pages = [];
    for (let num = 0; num < this.state.numPages; num++) {
      pages.push(
        <Pagination.Item
          active={this.state.page === num}
          onClick={this.navigateToPage}
        >
          {num}
        </Pagination.Item>
      );
    }
    this.setState({
      paginationPages: pages
    });
  };

  render() {
    return (
      <div className="search-area">
        <Form
          inline
          className="search-form"
          onSubmit={e => {
            e.preventDefault();
            return this.search();
          }}
        >
          <FormGroup>
            <DebounceInput
              minLength={0}
              placeholder={'Search for ' + this.props.for}
              debounceTimeout={300}
              className="App-input"
              value={this.state.inputValue}
              required
              onChange={this.handleInput}
            />
            <Button type="submit" className="App-button">
              Search
            </Button>
          </FormGroup>
        </Form>
        {this.state.suggestions.length ? (
          <div className="suggestions">
            {this.state.suggestions.map(suggestion => {
              return (
                <Button
                  onClick={this.handleSuggestionClick}
                  className="App-button"
                >
                  {suggestion._id}
                </Button>
              );
            })}
          </div>
        ) : this.state.inputValue.length ? (
          <p>{this.state.suggestionsText}</p>
        ) : (
          ''
        )}
        {this.state.paginationPages.length &&
        this.state.paginationPages.length !== 1 ? (
          <Pagination>{this.state.paginationPages}</Pagination>
        ) : (
          ''
        )}
        <div
          className="loading"
          style={{ display: this.state.loading ? 'block' : 'none' }}
        >
          <img src={loadingImage} width="50px" alt="loading..." />
        </div>
      </div>
    );
  }
}

export default SearchForm;

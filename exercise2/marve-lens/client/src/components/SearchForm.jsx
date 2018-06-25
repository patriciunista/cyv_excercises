import React, { Component } from 'react';
import {
  FormControl,
  Button,
  FormGroup,
  Form,
  Pagination
} from 'react-bootstrap';
import loadingImage from '../assets/loading.gif';

class SearchForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchString: '',
      page: 0,
      numPages: 0,
      error: null,
      paginationPages: []
    };
  }

  handleInput = event => {
    this.setState({ searchString: event.target.value });
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
    if (this.state.searchString !== '') {
      this.setState({ error: false, loading: true }, () => {
        let searchUrl =
          'http://localhost:3001/api/' +
          this.props.for +
          '/' +
          this.state.searchString +
          '/page/' +
          this.state.page;
        console.log(searchUrl);
        fetch(searchUrl, { method: 'GET' })
          .then(res => res.json())
          .then(res => {
            this.props.results(res.data.results);
            this.setState(
              {
                numPages: Math.floor(res.data.total / 20) + 1,
                loading: false,
                paginationPages: []
              },
              () => {
                this.loadPagination();
              }
            );
          });
      });
    } else {
      this.setState({ error: true });
    }
  };

  navigateToPage = e => {
    this.setState({ page: parseInt(e.target.outerText) }, () => this.search());
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
            <FormControl
              type="text"
              placeholder={'Search for ' + this.props.for}
              value={this.state.searchString}
              onInput={this.handleInput}
              required
            />
            <Button type="submit">Search</Button>
          </FormGroup>
        </Form>
        {this.state.paginationPages.length ? (
          <Pagination>{this.state.paginationPages}</Pagination>
        ) : (
          console.log(this.state.paginationPages)
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

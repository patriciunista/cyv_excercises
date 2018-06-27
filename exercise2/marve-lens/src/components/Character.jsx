import React, { Component } from 'react';
import '../css/Character.css';
import { Glyphicon, Col } from 'react-bootstrap';

class Character extends Component {
  constructor(props) {
    super(props);

    this.state = {
      clicked: false
    };
  }

  handleDetailsClick = e => {
    this.setState(prevState => {
      return { clicked: !prevState.clicked };
    });
  };

  render() {
    return (
      <div className="character" key={this.props.key}>
        <div className="col-sm-6 col-md-4">
          <div className="thumbnail">
            {this.state.clicked ? (
              <div className="details">
                <Col className="text-right">
                  <Glyphicon
                    glyph="remove"
                    onClick={this.handleDetailsClick}
                    className="close-details"
                  />
                </Col>
                <h4>Details</h4>
                <li>
                  <strong>Description:</strong>{' '}
                  {this.props.character.details.description ||
                    'No description available.'}
                </li>
                <li>
                  <strong>Modified:</strong>{' '}
                  {this.props.character.details.modified}
                </li>
                <li>
                  <strong>Comics Available:</strong>{' '}
                  {this.props.character.details.numComics}
                </li>
                <li>
                  <strong>Series Available:</strong>{' '}
                  {this.props.character.details.numSeries}
                </li>
                <li>
                  <strong>Stories Available:</strong>{' '}
                  {this.props.character.details.numStories}
                </li>
                <li>
                  <strong>Events Available:</strong>{' '}
                  {this.props.character.details.numEvents}
                </li>
              </div>
            ) : (
              <div
                className="avatar"
                style={{
                  backgroundImage: 'url(' + this.props.character.avatar + ')'
                }}
              >
                <div
                  className="details-button"
                  onClick={this.handleDetailsClick}
                >
                  Show Details
                </div>
              </div>
            )}
            <div className="caption">
              <h3 className="name">{this.props.character.name}</h3>
              {this.props.character.wikiUrl !== undefined ? (
                <a
                  href={this.props.character.wikiUrl}
                  className="btn btn-danger App-button"
                  target="_blank"
                  role="button"
                >
                  Go to wiki
                </a>
              ) : (
                ''
              )}
              <button
                onClick={this.handleDetailsClick}
                className="btn btn-danger App-button show-details"
              >
                {!this.state.clicked ? 'Show' : 'Hide'} details
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Character;

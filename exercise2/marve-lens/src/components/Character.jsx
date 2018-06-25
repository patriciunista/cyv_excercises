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
                  <Glyphicon glyph="remove" onClick={this.handleDetailsClick} className="close-details" />
                </Col>
                <h4>Details</h4>
                <li>
                  <strong>Description:</strong>{' '}
                  {this.props.info.description || 'No description available.'}
                </li>
                <li>
                  <strong>Modified:</strong> {this.props.info.modified}
                </li>
                <li>
                  <strong>Comics Available:</strong> {this.props.info.numComics}
                </li>
                <li>
                  <strong>Series Available:</strong> {this.props.info.numSeries}
                </li>
                <li>
                  <strong>Stories Available:</strong>{' '}
                  {this.props.info.numStories}
                </li>
                <li>
                  <strong>Events Available:</strong> {this.props.info.numEvents}
                </li>
              </div>
            ) : (
              <div
                className="avatar"
                style={{
                  backgroundImage: 'url(' + this.props.info.avatar + ')'
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
              <h3 className="name">{this.props.info.name}</h3>
              {this.props.info.wikiUrl.length ? (
                <p>
                  <a
                    href={this.props.info.wikiUrl[0].url}
                    className="btn btn-primary"
                    target="_blank"
                    role="button"
                  >
                    Go to wiki
                  </a>
                </p>
              ) : (
                ''
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Character;

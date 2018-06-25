import React, { Component } from 'react';
import '../css/Character.css';

class Character extends Component {
  constructor(props) {
    super(props);

    this.state = {
      clicked: false
    };
  }

  handleClick = e => {
    this.setState(prevState => {
      return { clicked: !prevState.clicked };
    });
  };


  render() {
    return (
      <div className="character" key={this.props.key}>
        <div className="col-sm-6 col-md-4">
          <div className="thumbnail" onClick={this.handleClick}>
            {this.state.clicked ? (
              <div className="details">Details</div>
            ) : (
              <div
                className="avatar"
                style={{
                  backgroundImage: 'url(' + this.props.info.avatar + ')'
                }}
              />
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

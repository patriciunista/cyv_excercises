import React, { Component } from 'react';

class Character extends Component {
  constructor(props) {
    super(props);

    this.state = {
      clicked: false
    };
  }

  handleClick = e => {
    this.setState({
      clicked: true
    });
  };

  render() {
    return (
      <div className="character">
        <div className="row">
          <div className="col-sm-6 col-md-4">
            <div className="thumbnail">
              <img
                src={this.props.info.avatar}
                alt={this.props.info.name + ' image'}
              />
              <div className="caption">
                <h3>{this.props.info.name}</h3>
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
      </div>
    );
  }
}

export default Character;

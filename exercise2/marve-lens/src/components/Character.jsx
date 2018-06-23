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
        <div className="header">
          <img
            className="avatar"
            src={this.props.info.image}
            alt={this.props.info.name + ' image'}

          />

        </div>
        <div className="body">
          <div className="name">{this.props.info.name}</div>
        </div>
        <div className="foter">
          <a href={this.props.info.url}>Go to wiki</a>
        </div>
      </div>
    );
  }
}

export default Character;

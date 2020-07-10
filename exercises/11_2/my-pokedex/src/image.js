import React from 'react';

class Image extends React.Component {
  render() {
    return <img src={this.props.source} alt={this.props.altText} />;
  }
}

export default Image;
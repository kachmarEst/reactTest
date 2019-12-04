import React from 'react';
// import Card from './card';
// import article from '../ArticleContent';

class ArticlesFull extends React.Component {
    constructor(props){
        super(props);

    }
  render() {
    return (
        <div>
           {this.props.match.params}
        </div>
    );
  }
}

export default ArticlesFull;

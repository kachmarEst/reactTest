import React from 'react';
import './card.css';

class Card extends React.Component {
  render() {
    return (

        <div className="card">
          <div className="cardHeading">
            {this.props.titre}
          </div>
            <div className="textA"> 
              {this.props.nom} 
              <br/>
              {this.props.content[0]}
              <br/>
              {this.props.content[1]}

            </div>
        </div>
    );
  }
}

export default Card;

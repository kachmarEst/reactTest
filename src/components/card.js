import React from 'react';
import './card.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class Card extends React.Component {
  constructor(props){
    super(props);
    this.OnClick = this.OnClick.bind(this);
    this.state ={
      expanded:false
    }
  }
  OnClick(e){
    if(this.state.expanded){
      this.setState({
        expanded:false
      })
    }else{
      this.setState({
        expanded:true
      })
    }
  }
  render() {
    return (

        <div className="card">
          <div className="cardHeading">
            {this.props.titre}
          </div>
            <div className="textA"> 
              {this.props.nom} 
              <br/>
              
              {this.state.expanded ? this.props.content : this.props.content.substring(1,30)+'...'}
              <button className="btn btn-success" onClick={this.OnClick} >{this.state.expanded ? 'Show Less' :'Show More' }</button>

            </div>
        </div>
    );
  }
}

export default Card;

import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
class App extends React.Component {
constructor(props){
  super(props);
this.state = {
 textval :''
}
this.onchangeText = this.onchangeText.bind(this);
}
onchangeText(e){
this.setState({
  textval : e.target.value
})
}
  render() {

    return(
      <div className="container">
        <div className="row"><div className="col-sm-12"><h1>REACT APP </h1> <h2>ON CHANGE METHOD</h2></div></div>
        <div className="row">
          <div className="col-sm-6"><textarea value={this.state.textval} onChange={this.onchangeText} className="form-control" rows={16}></textarea> </div>
          <div className="col-sm-6">texte apres  <br/> {this.state.textval}</div>

        </div>

      </div>

    );
  }
}

export default App;

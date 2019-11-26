import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import marked from 'marked'
import MarkedArea from './components/MarkedArea';
import TexteArea from './components/textarea';
import Headers from './components/headers';

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
        <Headers  />
        <div className="row">
          <div className="col-sm-6"><TexteArea value={this.state.textval} onchng= {this.onchangeText}/></div>
          <MarkedArea dnghtml ={this.state.textval} />
        </div>

      </div>

    );
  }
}


export default App;

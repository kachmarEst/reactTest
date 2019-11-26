import React from 'react';
import './App.css';
import Card from './components/card';
class App extends React.Component {
  constructor(){
    super();
    this.state=[
      {
          nom:'youssef boutakourt',
          filiere:'ISIL',
          image:'youssef boutakourt?set=set2'
      },
      {
        nom:'bari ayoub',
        filiere:'GODT',
        image:'bari ayoub?set=set2'
      },
      {
        nom:'amine nazih',
        filiere:'TM',
        image:'amine nazih?set=set2'    
      },
      {
        nom:'ghoudan ayoub',
        filiere:'GI',
        image:'ghoudan ayoub?set=set2'     
      },
      {
        nom:'karkaih achraf',
        filiere:'TM',
        image:'karkaih achraf?set=set2'     
      },
      {
        nom:'morad zakar',
        filiere:'MT',
        image:'morad zakar?set=set2'    
      },
      {
        nom:'yassir soulaimani',
        filiere:'MGE',
        image:'yassir soulaimani?set=set2'      
      }
          ]
  }

  render() {

    
    return(

<div className="App">

    {



this.state.map((item,i) =>   <Card key={i} nom={item.nom} filiere={item.filiere} url={item.image}/>)

    }
    
    </div>

    );
  }
}

export default App;

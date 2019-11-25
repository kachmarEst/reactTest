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
            image:'youssef boutakourt?set=set4'
      
      },
      {
        nom:'bari ayoub',
        filiere:'GODT',
        image:'bari ayoub?set=set4'
      
      },
      {
        nom:'amine nazih',
        filiere:'TM',
        image:'amine nazih?set=set4'
      
      },
      {
        nom:'ghoudan ayoub',
        filiere:'GI',
        image:'ghoudan ayoub?set=set4'
      
      },
      {
        nom:'karkaih achraf',
        filiere:'TM',
        image:'karkaih achraf?set=set4'
      
      },
      {
        nom:'morad zakar',
        filiere:'MT',
        image:'morad zakar?set=set4'
      
      },
      {
        nom:'yassir soulaimani',
        filiere:'MGE',
        image:'yassir soulaimani?set=set4'
      
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

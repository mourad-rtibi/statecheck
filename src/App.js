import { Component } from 'react';
import mourad  from './mourad.jpg';


class App extends Component{
  constructor(){
    super();
    this.state = {
      //number:1,
      show : true,
      Person : { 
                fullName : "mourad",
                bio : "Licencié en electrique", 
                imgSrc: mourad, 
                profession:"Instructor in GMC"
              },
    }
    this.clickHandler = this.clickHandler.bind(this);
  }
  


  clickHandler(){
    this.setState(function (prevState){
      return{
        show : !prevState.show ,
      }
    });
  }

  render(){
    if(this.state.show)
    return (
      <div className="container">
        <button className="btn btn-primary" onClick={this.clickHandler}>Hide</button>
        <br/>
        <img src={mourad} alt="image peronel" width="180" height="300" />
        <h1>{this.state.Person.fullName}</h1>
        <h2>{this.state.Person.bio}</h2>
        <h2>{this.state.Person.profession}</h2>
      </div>
      );
      else return (
        <div className="container">
      <button className="btn btn-primary" onClick={this.clickHandler}>Show</button>
      </div>
      );
  }
}

export default App;

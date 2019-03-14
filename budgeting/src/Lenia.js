import React from 'react';

class Lenia extends React.Component{

constructor(props){
  super(props);
  this.state = {
    total: 0
  }
  this.deposit = this.deposit.bind(this);
  this.owner = "lenia";
}

deposit(){
  this.setState(prevState => {
    return {total: prevState.total + this.props.depositAmount};
  });
}

withdraw(){
  this.setState(prevState => {
    let newSum = prevState.total <1 ? 0 : prevState.total -this.props.depositAmount; //turnary logic: means that if prevState total is <1 (?) then write 0, else do -1
    return {total: newSum};
  });
}


  render(){
    return(
      <div className ="lenia-box">
       Hello lenia
       <h1>{this.props.title}</h1>
       <p> I have {this.state.total} money</p>
       <p> My owner is {this.owner}</p>
       <button onClick ={this.deposit}>Add</button>
       <button onClick = {this.withdraw.bind(this)}>withdraw</button>
      </div>
    );
  }
}

export default Lenia;

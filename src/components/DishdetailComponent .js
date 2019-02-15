import React, { Component } from 'react';
import { Card, CardTitle } from 'reactstrap';

class Dish extends Component {

  render() {
    if(this.props.dishes){
    const detail = this.props.dishes.comments.map((dishs)=>{
      return (
        <div key={dishs.id}>
          <p>{dishs.comment}</p>
          <p>-- {dishs.author}, {dishs.date}</p>
        </div>
      );
    });
    
    return (
      <div className="col-12 col-md-5">
        <Card>
          <CardTitle>Comments</CardTitle>
          {detail}
        </Card>
      </div>
    );
  }
  else{
    return (<div></div>);
  }
  }
};

export default Dish;

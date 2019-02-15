import React, { Component } from 'react';
import { Card, CardTitle, CardImg, CardText, CardBody} from 'reactstrap';

class Dish extends Component {

  render() {
    if(this.props.dishes){
      const detail = this.props.dishes.comments.map((dishs)=>{
        return (
          <div key={dishs.id}>
            <p>{dishs.comment}</p>
            <p>-- {dishs.author}, {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(dishs.date)))}</p>
          </div>
        );
      });
    
    return (
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-5 m-1">
            <Card>
              <CardImg top src={this.props.dishes.image} alt={this.props.dishes.name} />
              <CardBody>
                <CardTitle>{this.props.dishes.name}</CardTitle>
                <CardText>{this.props.dishes.description}</CardText>
              </CardBody>
            </Card>
          </div>

          <div className="col-12 col-md-5">
            <Card>
              <CardTitle>Comments</CardTitle>
              {detail}
            </Card>
          </div>
        </div>
      </div>
    );
  }
  else{
    return (<div></div>);
  }
  }
};

export default Dish;

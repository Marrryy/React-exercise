import React, { Component } from 'react';
import { Card, CardTitle, CardImg, CardText, CardBody} from 'reactstrap';

  function RenderDish({dish}) {
    return(
    <Card>
      <CardImg top src={dish.image} alt={dish.name} />
      <CardBody>
        <CardTitle>{dish.name}</CardTitle>
        <CardText>{dish.description}</CardText>
      </CardBody>
    </Card>
    );
  }

  function RenderComments({comments}) {
    if ({comments}){
    const detail = comments.map((dishes)=>{
      return (
        <div key={dishes.id}>
          <p>{dishes.comment}</p>
          <p>-- {dishes.author}, {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(dishes.date)))}</p>
        </div>
      );
    });
    return detail;
    }
  }

  const Dish = (props) => {
    if(props.dishes){
      return (
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-5 m-1">
              <RenderDish dish={props.dishes} />
            </div>
  
            <div className="col-12 col-md-5 m-1">
              <Card>
                <CardTitle>Comments</CardTitle>
                <RenderComments comments={props.dishes.comments} />
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

export default Dish;

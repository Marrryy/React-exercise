import React from 'react';
import CommentForm from './CommentForm';
import { Card, CardImg, CardText, CardBody,CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Loading } from './LoadingComponent';
import { baseUrl } from '../shared/baseUrl';

  function RenderDish({dish}) {
    return(
    <Card>
      <CardImg top src={baseUrl + dish.image} alt={dish.name} />
      <CardBody>
        <CardTitle>{dish.name}</CardTitle>
        <CardText>{dish.description}</CardText>
      </CardBody>
    </Card>
    );
  }

  function RenderComments({comments}) {
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

  const Dish = (props) => {
    if (props.isLoading) {
      return(
        <div className="container">
          <div className="row">            
            <Loading />
          </div>
        </div>
      );
    }
    else if (props.errMess) {
      return(
        <div className="container">
            <div className="row">            
                <h4>{props.errMess}</h4>
            </div>
        </div>
      );
    }
    else if (props.dish != null) {
        return (
          <div className="container">

            <div className="row">
              <Breadcrumb>
                <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
              </Breadcrumb>
              <div className="col-12">
                <h3>{props.dish.name}</h3>
                <hr />
              </div>                
            </div>
            
            <div className="row">
              <div className="col-12 col-md-5 m-1">
                <RenderDish dish={props.dish} />
              </div>
    
              <div className="col-12 col-md-5 m-1">
                <Card>
                  <CardTitle>Comments</CardTitle>
                  <RenderComments comments={props.comments} />
                  <CommentForm comments={props.comments}
                    addComment={props.addComment}
                    dishId={props.dish.id}/>
                </Card>
              </div>
            </div>
          </div>
        );
      }
    else {
      return (
      <div></div>
      );
    }
  }

export default Dish;
